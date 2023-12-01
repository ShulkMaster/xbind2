import { findFiles, openFileStream } from './utils';
import { Logger } from './utils';
import { LogLevel } from './types/logging';
import { Arguments } from './types/console';
import { createVisitor, parseStream } from './visitors';
import { ReactPlugin, VuePlugin } from './plugins';
import { Compiler, SymbolTable } from './compiler';

export function toArgs(args: string[]): Arguments {
  const scripArgs = args.slice(2);

  return {
    sources: scripArgs[0] || '.',
    logLevel: scripArgs[1] || LogLevel.DEBUG,
  };
}

const enum ReturnCode {
  SUCCESS = 0,
  ERROR = -1,
}

function main(args: string[]): number {
  const scripArgs = toArgs(args);
  Logger.setLevel(scripArgs.logLevel);
  const sourceFiles = findFiles(scripArgs.sources);

  if (sourceFiles.length < 1) {
    Logger.error('No Haibt files found');
    return ReturnCode.ERROR;
  }

  Logger.info(`Found ${sourceFiles.length} files`);
  for (const file of sourceFiles) {
    Logger.info(`Found ${file}`, 2);
  }
  const fileName = 'samples\\Text.hbt';
  const stream = openFileStream(fileName);
  const ast = parseStream(stream);
  const source = stream.getText(0, stream.size);
  const sb = new SymbolTable();
  const compiler = new Compiler(sb);
  const reactPlugin = new ReactPlugin();
  const vuePlugin = new VuePlugin();

  try {
    const visitor = createVisitor();
    const result = visitor.visitProgram(ast);

    result.sourceFile = fileName;
    result.sourceCode = source;
    sb.registerProgram(result);
    const success = compiler.check(result);
    if (!success) {
      return ReturnCode.ERROR;
    }

    reactPlugin.writeProgram(result);
    vuePlugin.writeProgram(result);
  } catch (e: unknown) {
    Logger.error((e as Error).message);
    console.log(e);
    return ReturnCode.ERROR;
  }

  return ReturnCode.SUCCESS;
}

const returnCode = main(process.argv);
process.exit(returnCode);