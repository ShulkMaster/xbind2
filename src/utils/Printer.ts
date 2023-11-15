import fs from 'fs';

export class Printer {
  private readonly texts: string[] = [];

  public append(text: string, pad?: number): void {
    if (pad && pad > 0) {
      const padString = ' '.repeat(pad);
      this.texts.push(padString);
    }
    this.texts.push(text);
  }

  public appendLine(text: string,  pad?: number): void {
    this.append(text, pad);
    this.texts.push('\r\n');
  }

  public crlf(): void {
    this.texts.push('\r\n');
  }

  public printToFile(fileName: string): void {
    fs.writeFileSync(fileName, this.texts.join(''));
  }
}