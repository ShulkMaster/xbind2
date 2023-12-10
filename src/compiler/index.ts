import { CompileOptions, ExitCodes } from 'types/console';
import { asLogLevel } from 'utils/parse';
import { findFiles, Logger } from 'utils';

export * from './Crossbind';

export function compile(source: string, option: CompileOptions): void {
  const level = asLogLevel(option.log);
  Logger.setLevel(level);
  const files = findFiles(source);
  Logger.info(`Found ${files.length} files to compile`);
  Logger.info(`Files:\n${files.join('\n')}`);
}