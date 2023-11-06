import fs from 'fs';
import path from 'path';
import { Logger } from './logger';

export function makeDirs(filePath: string): void {
  const directory = path.dirname(filePath);
  fs.mkdirSync(directory, { recursive: true });
}

export function findFiles(dir: string): string[] {
  const files: string[] = [];
  Logger.info(`Looking for files in ${path.resolve(dir)}`);

  function traverse(currentDir: string) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const itemPath = path.join(currentDir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isFile() && path.extname(item) === '.hbt') {
        files.push(itemPath);
      } else if (stat.isDirectory()) {
        traverse(itemPath);
      }
    }
  }

  traverse(dir);
  return files;
}