import { CompileOptions, ExitCodes } from 'types/console';
import { asLogLevel } from 'utils/parse';
import { findFiles, Logger, openFileStream } from 'utils';
import { parseStream, ProgramVisitor } from 'visitors';
import { ParseUnit, VisitedUnit } from 'types/crossbind';
import { ParseErrorListener } from './ParseErrorListener';
import { Crossbind } from './Crossbind';
import { res } from 'scope/Resolver';
import { ReactPlugin, VuePlugin } from 'plugins';
import { TemplateReplacer } from './TemplateReplacer';
import { LogLevel, MemorySnap } from 'types/logging';
import * as process from 'process';

export * from './Crossbind';

function plugFactory(option: CompileOptions): (ReactPlugin | VuePlugin)[] {
  switch (option.plugin) {
    case 'react': {
      const p = new ReactPlugin(option.output);
      p.setResolver(res);
      return [p];
    }
    case 'vue': {
      const p = new VuePlugin(option.output);
      p.setResolver(res);
      return [p];
    }
  }

  const rPlugin = new ReactPlugin(option.output);
  const vPlugin = new VuePlugin(option.output);
  rPlugin.setResolver(res);
  vPlugin.setResolver(res);
  return [rPlugin, vPlugin];
}

const heapData: MemorySnap[] = [];

function logMemoryUsage(l: LogLevel) {
  const logMemory = l === LogLevel.DEBUG || l === LogLevel.PERFORMANCE;
  if (!logMemory) {
    return;
  }
  heapData.push({
    allocated: process.memoryUsage(),
    delta: process.hrtime.bigint().toString(),
  });
}

export function compile(source: string, option: CompileOptions): void {
  const startTime = process.hrtime.bigint();
  const level = asLogLevel(option.log);
  Logger.setLevel(level);
  logMemoryUsage(level);

  const sourceFiles = findFiles(source);
  Logger.info(`Found ${sourceFiles.length} files to compile`);
  Logger.info(`Files:\n${sourceFiles.join('\n')}`);

  if (sourceFiles.length < 1) {
    Logger.error('No Haibt files found');
    process.exit(ExitCodes.Error);
  }

  const parseUnits = sourceFiles.map(parseHaibt);
  logMemoryUsage(level);
  const totalErrors = parseUnits.reduce((acc, unit) => acc + unit.errors, 0);
  if (totalErrors > 0) {
    Logger.error(`Unable to compile, found ${totalErrors} syntax errors`);
    return;
  }

  const visitedUnits = parseUnits.map(visitHaibt);
  logMemoryUsage(level);
  const crossBind = new Crossbind();
  const replacer = new TemplateReplacer();

  visitedUnits.forEach(unit => res.registerUnit(unit));
  logMemoryUsage(level);
  visitedUnits.forEach(unit => replacer.replaceStyles(unit.program));
  logMemoryUsage(level);
  visitedUnits.forEach(unit => crossBind.check(unit.program));
  logMemoryUsage(level);
  if (res.checkErrors.length > 0) {
    Logger.compileErrors(res.checkErrors);
    Logger.error(`Compilation failure, found ${res.checkErrors.length} errors`);
    return;
  }

  res.triggerFill();
  logMemoryUsage(level);
  if (res.checkErrors.length > 0) {
    Logger.compileErrors(res.checkErrors);
    Logger.error(`Compilation failure, found ${res.checkErrors.length} errors`);
    return;
  }
  visitedUnits.forEach(unit => Logger.debug(unit.program));
  const plugins = plugFactory(option);
  visitedUnits.forEach(unit => {
    logMemoryUsage(level);
    plugins.forEach(plugin => plugin.writeProgram(unit.program));
  });
  logMemoryUsage(level);
  Logger.info('Compilation complete:');
  const endTime = process.hrtime.bigint();
  Logger.performance({
    start: startTime.toString(),
    end: endTime.toString(),
    memory: heapData,
  });
}

export function parseHaibt(sourceFile: string): ParseUnit {
  const stream = openFileStream(sourceFile);
  const parser = parseStream(stream);
  const errorListener = new ParseErrorListener(sourceFile);
  parser.addErrorListener(errorListener);
  const source = stream.getText(0, stream.size);
  const ast = parser.program();

  return {
    program: ast,
    source,
    errors: parser.syntaxErrorsCount,
    fileName: sourceFile,
  };
}

function visitHaibt(unit: ParseUnit): VisitedUnit {
  const visitor = new ProgramVisitor(unit.fileName);
  const result = visitor.visitProgram(unit.program);
  Logger.debug(result);
  return {
    program: result,
    source: unit.source,
    fileName: unit.fileName,
  };
}
