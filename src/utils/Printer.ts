import fs from 'fs';
import { TypeDeclarationNode } from '../types/nodes';

export class Printer {
  private texts: string[] = [];

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

  public flushToFile(fileName: string): void {
    fs.writeFileSync(fileName, this.texts.join(''));
    this.texts = [];
  }

  public printType(type: TypeDeclarationNode, pad = 0): void {
    const { typeName, members  } = type;
    const isString = typeof typeName === 'string';
    const name = isString ? typeName : typeName.text;

    this.appendLine(`export type ${name} = {`, pad);
    for (const member of members) {
      const propName = member.name.text;
      const annotation = member.type;
      if (annotation.primitive) {
        const primitiveType = annotation.name;
        this.appendLine(`${propName}: ${primitiveType};`, pad + 2);
        continue;
      }
      const memberTypeName = annotation.typeName.text;
      this.appendLine(`${propName}: ${memberTypeName};`, pad + 2);
    }
    this.appendLine('};', pad);
    this.crlf();
  }
}