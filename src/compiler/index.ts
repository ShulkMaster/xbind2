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

export * from './Crossbind';

export function compile(source: string, option: CompileOptions): void {
  const level = asLogLevel(option.log);
  Logger.setLevel(level);
  const sourceFiles = findFiles(source);
  Logger.info(`Found ${sourceFiles.length} files to compile`);
  Logger.info(`Files:\n${sourceFiles.join('\n')}`);

  if (sourceFiles.length < 1) {
    Logger.error('No Haibt files found');
    process.exit(ExitCodes.Error);
  }

  const parseUnits = sourceFiles.map(parseHaibt);
  const totalErrors = parseUnits.reduce((acc, unit) => acc + unit.errors, 0);
  if (totalErrors > 0) {
    Logger.error(`Unable to compile, found ${totalErrors} syntax errors`);
    return;
  }

  const visitedUnits = parseUnits.map(visitHaibt);
  const crossBind = new Crossbind();
  const replacer = new TemplateReplacer();

  visitedUnits.forEach(unit => res.registerUnit(unit));
  visitedUnits.forEach(unit => replacer.replaceStyles(unit.program));
  visitedUnits.forEach(unit => crossBind.check(unit.program));
  if (res.checkErrors.length > 0) {
    Logger.compileErrors(res.checkErrors);
    Logger.error(`Compilation failure, found ${res.checkErrors.length} errors`);
    return;
  }

  visitedUnits.forEach(unit => Logger.debug(unit.program));
  res.triggerFill();
  const plugin = option.plugin === 'react'
    ? new ReactPlugin(option.output)
    : new VuePlugin(option.output);
  plugin.setResolver(res);
  visitedUnits.forEach(unit => plugin.writeProgram(unit.program));
  Logger.info('Compilation complete');
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
