import { findFiles } from './utils/files';
import { Logger } from './utils/logger';
import { LogLevel } from './types/logging';
import { Arguments } from './types/console';

export function toArgs(args: string[]): Arguments {
  const scripArgs = args.slice(2);

  return {
    sources: scripArgs[0] || '.',
    logLevel: scripArgs[1] || LogLevel.DEBUG,
  };
}

function main(args: string[]): void {
  const scripArgs = toArgs(args);
  Logger.setLevel(scripArgs.logLevel);
  const sourceFiles = findFiles(scripArgs.sources);
  if(sourceFiles.length < 1) {
    Logger.error('No files found');
  }
  Logger.info(`Found ${sourceFiles.length} files`);
}

main(process.argv);