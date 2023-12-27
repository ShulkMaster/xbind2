import { Printer } from './Printer';
import { ClassNode, RuleNode, StyleNode, StyleValueNode } from 'types/nodes';

export const styleNameMap = new Map<string, string>([
  ['backgroundColor', 'background-color'],
  ['fontSize', 'font-size'],
  ['fontWeight', 'font-weight'],
  ['textAlign', 'text-align'],
  ['textDecoration', 'text-decoration'],
  ['textTransform', 'text-transform'],
  ['borderRadius', 'border-radius'],
  ['justifyContent', 'justify-content'],
]);

export class StyleWriter {
  private readonly p: Printer;
  private readonly stack: string[] = [];

  constructor(printer: Printer) {
    this.p = printer;
  }

  public collectStyleText(): string {
    return this.p.flush();
  }

  writeStyle(style: StyleNode, pad: number): void {
    for (const styleClass of style.classes) {
      this.writeClass(styleClass, pad);
    }
  }

  writeClass(styleClass: ClassNode, pad: number): void {
    const { name, subClasses, modifiers, rules } = styleClass;
    const prefix = this.stack.join(' ');

    if(prefix) {
      this.p.appendLine(`${prefix} .${name.text} {`, pad);
    } else {
      this.p.appendLine(`.${name.text} {`, pad);
    }

    for (const rule of rules) {
      this.writeRule(rule, pad + 2);
    }
    this.p.appendLine('}', pad);
    this.p.crlf();

    this.stack.push(`.${name.text}`);
    for (const subStyle of subClasses) {
      this.writeClass(subStyle, pad);
      this.p.crlf();
    }

    this.stack.pop();
  }

  writeRule(rule: RuleNode, depth: number): void {
    const ruleName = rule.identifier.text;
    const cssName = styleNameMap.get(ruleName) ?? ruleName;
    this.p.append(`${cssName}:`, depth);

    for (const value of rule.value) {
      this.p.append(' ');
      this.writeValue(value);
    }
    this.p.appendLine(';');
  }

  writeValue(value: StyleValueNode): void {
    switch (value.type) {
      case 'hex':
        this.p.append(value.value.text);
        break;
      case 'measure':
        this.p.append(`${value.value.text}${value.unit?.text}`);
        break;
      case 'identifier':
        this.p.append(value.token.text);
        break;
    }
  }
}