import fs from 'fs';
import path from 'path';
import { Logger } from './logger';
import { CharStream, CharStreams } from 'antlr4';
import { ExitCodes } from 'types/console';
import { UsePath } from 'types/nodes';

export const HaibtExtension = '.hbt';

export function makeDirs(filePath: string): void {
  const directory = path.dirname(filePath);
  fs.mkdirSync(directory, {recursive: true});
}

export function findFiles(dir: string): string[] {
  const exists = fs.existsSync(dir);
  if (!exists) {
    Logger.error(`The directory or file ${dir} does not exist`);
    process.exit(ExitCodes.Error);
  }

  const dirStat = fs.statSync(dir);
  if (dirStat.isFile()) {
    if (path.extname(dir) === HaibtExtension)
      return [dir];
    else {
      Logger.error(`The file ${dir} is not a file with the extension ${HaibtExtension}`);
      process.exit(ExitCodes.Error);
    }
  }

  const files: string[] = [];
  Logger.info(`Looking for files in ${path.resolve(dir)}`);

  function traverse(currentDir: string) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const itemPath = path.join(currentDir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isFile() && path.extname(item) === HaibtExtension) {
        files.push(itemPath);
      } else if (stat.isDirectory()) {
        traverse(itemPath);
      }
    }
  }

  traverse(dir);
  return files;
}

export function openFileStream(filePath: string): CharStream {
  return CharStreams.fromPathSync(filePath, 'utf8');
}

export function filePathToScope(filePath: string): UsePath {
  const dir = filePath.substring(0, filePath.length - HaibtExtension.length);
  const parts = dir.split(path.sep);
  return parts.filter(part => part !== '.' && part !== '..');
}
