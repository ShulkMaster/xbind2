import { findFiles, makeDirs, openFileStream } from './utils/files';
import { Logger } from './utils/logger';
import { LogLevel } from './types/logging';
import { Arguments } from './types/console';
import { createVisitor, parseStream } from './visitors';
import { ReactPlugin } from './plugins/react';
import { Printer } from './utils';
import { VuePlugin } from './plugins/vue';

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
  const stream = openFileStream('samples\\moduleA\\SubModuleD\\span.hbt');
  const ast = parseStream(stream);

  try {
    const visitor = createVisitor();
    const result = visitor.visitProgram(ast);
    Logger.info(result);

    // const reactDir = 'outdir\\react\\samples\\moduleA\\SubModuleD\\span.tsx';
    // makeDirs(reactDir);
    // const plugin = new ReactPlugin();
    // const printer = new Printer();
    // plugin.writeProgram(result, printer);
    // printer.printToFile(reactDir);
    //
    //
    // const vueDir = 'outdir\\vue\\samples\\moduleA\\SubModuleD\\span.vue';
    // makeDirs(vueDir);
    // const vuePlugin = new VuePlugin();
    // const vuePrinter = new Printer();
    // vuePlugin.writeProgram(result, vuePrinter);
    // vuePrinter.printToFile(vueDir);

  } catch (e: unknown) {
    Logger.error((e as Error).message);
    console.log(e);
    return ReturnCode.ERROR;
  }

  return ReturnCode.SUCCESS;
}

const returnCode = main(process.argv);
process.exit(returnCode);