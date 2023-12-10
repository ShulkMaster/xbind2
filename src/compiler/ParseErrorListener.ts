import { Logger } from 'utils';
import { ErrorListener } from 'antlr4';

export class ParseErrorListener extends ErrorListener<unknown> {
  private readonly sourceFile: string;

  constructor(sourceFile: string) {
    super();
    this.sourceFile = sourceFile;
  }

  syntaxError(recognizer: unknown, token: unknown, line: number, column: number, msg: string): void {
    const message = `${this.sourceFile}(${line},${column}): ${msg}`;
    Logger.error(message);
  }
}