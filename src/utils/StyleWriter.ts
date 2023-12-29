import { Printer } from './Printer';
import { ClassNode, ModifierNode, OrArray, RuleNode, StyleNode, StyleValueNode } from 'types/nodes';
import { styleRules } from 'bcl/css';
import { CssArgument, CssRule, CssRules, StyleRule } from 'bcl/css/types';
import { Token } from 'types/token';

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
    const {name, subClasses, modifiers, rules} = styleClass;
    const prefix = this.stack.join(' ');
    const mods = this.writeModifiers(name, modifiers);

    if (prefix) {
      this.p.appendLine(`${prefix} .${name.text}${mods} {`, pad);
    } else {
      this.p.appendLine(`.${name.text}${mods} {`, pad);
    }

    for (const rule of rules) {
      this.writeRule(rule, pad + 2);
    }
    this.p.appendLine('}', pad);
    this.p.crlf();

    this.stack.push(`.${name.text}${mods}`);
    for (const subStyle of subClasses) {
      this.writeClass(subStyle, pad);
    }

    this.stack.pop();
  }

  writeModifiers(name: Token, mods: ModifierNode[]): string {
    const result: string[] = [];
    let lastEnd = name.end;

    for (let i = 0; i < mods.length; i++) {
      const mod = mods[i];
      if (mod.modifier === 'gt') {
        result.push(` > .${mod.name.text}`);
        continue;
      }

      if (mod.name.start <= lastEnd + 2) {
        result.push(`.${mod.name.text}`);
      } else {
        result.push(` .${mod.name.text}`);
      }
      lastEnd = mod.name.end;
    }
    return result.join('');
  }

  writeRule(rule: RuleNode, depth: number): void {
    const ruleName = rule.identifier.text;
    const map = styleRules.get(ruleName);
    const cssName = map?.alias ?? ruleName;
    this.p.append(`${cssName}:`, depth);

    for (const value of rule.value) {
      this.p.append(' ');
      this.writeValue(value, map);
    }
    this.p.appendLine(';');
  }

  writeValue(value: StyleValueNode, style: StyleRule | undefined): void {
    switch (value.type) {
      case 'hex':
        this.p.append(value.value.text);
        break;
      case 'measure':
        this.p.append(`${value.value.text}${value.unit?.text}`);
        break;
      case 'identifier':
        // todo: optimize this by prefilling a set with all the identifiers
        this.p.append(this.findIdentifierName(value.token.text, style));
        break;
    }
  }

  findIdentifierName(identifier: string, style: StyleRule | undefined): string {
    if (!style) {
      return identifier;
    }

    if (style.arguments.length < 1) {
      for (const rule of Object.values(style.shorthand)) {
        const name = this.findNameInArgs(identifier, rule.arguments);
        if (name) {
          return name;
        }
      }
      return identifier;
    }

    const name = this.findNameInArgs(identifier, style.arguments);
    return name ?? identifier;
  }

  findNameInArgs(identifier: string, args: CssArgument[]): string | undefined {
    for (const arg of args) {
      const name = this.findArgName(identifier, arg.alternatives);
      if (name) {
        return name;
      }
    }
  }

  findArgName(identifier: string, rules: OrArray<CssRules>): string | undefined {
    if(Array.isArray(rules)) {
      for (const rule of rules) {
        const name = this.findArgName(identifier, rule);
        if (name) {
          return name;
        }
      }
      return undefined;
    }

    if(rules.kind !== CssRule.cssIdentifier) {
      return undefined;
    }

    const option = rules.options.find(o => o.name === identifier);
    return option?.alias;
  }
}