import { ClassNode, RuleNode, StyleKind, StyleNode, StyleValueNode } from 'types/nodes';
import { SimpleError } from 'types/logging';
import { styleRules } from 'bcl/css';
import { Logger } from 'utils';
import { CssRule, CssRules, StyleRule } from 'bcl/css/types';

export class StyleChecker {
  private readonly stack: string[] = [];
  private readonly errors: SimpleError[] = [];

  public getErrors(): SimpleError[] {
    return this.errors;
  }

  public check(styles: StyleNode[]): void {
    for (const style of styles) {
      this.checkStyle(style);
    }
  }

  private checkStyle(style: StyleNode): void {
    const {name, classes} = style;
    this.stack.push(name.text);
    for (const subStyle of classes) {
      this.checkClass(subStyle);
    }
    this.stack.pop();
  }

  private checkClass(styleClass: ClassNode): void {
    const {name, subClasses, rules} = styleClass;
    this.stack.push(name.text);
    this.checkRules(rules);
    for (const subStyle of subClasses) {
      this.checkClass(subStyle);
    }
    this.stack.pop();
  }

  private checkRules(rules: RuleNode[]): void {
    const ruleSet = new Set<string>();
    for (const rule of rules) {
      const ruleName = rule.identifier.text;
      if (ruleSet.has(ruleName)) {
        const error: SimpleError = {
          line: rule.identifier.line,
          column: rule.identifier.column,
          message: `Duplicate CSS rule '${ruleName} at ${this.stack.join('->')}`,
        };
        this.errors.push(error);
      }

      const validation = styleRules.get(ruleName);
      if (validation === undefined) {
        Logger.warn(`Skipping unknown CSS rule '${ruleName}' at ${this.stack.join('->')}`);
        continue;
      }

      // checks if the shorthand will collide with a base rule
      for (const shortHand of Object.values(validation.shorthand)) {
        const baseRule = rules.find(r => r.identifier.text === shortHand.name);
        if (baseRule) {
          const error: SimpleError = {
            line: rule.identifier.line,
            column: rule.identifier.column,
            message: `Shorthand rule '${ruleName}' collides with base rule '${shortHand.name}' at ${this.stack.join('->')}`,
          };
          this.errors.push(error);
        }
      }
      this.validateRule(rule, validation);
      ruleSet.add(ruleName);
    }
  }

  private validateRule(rule: RuleNode, definition: StyleRule): void {
    const args = definition.arguments;
    const ruleName = rule.identifier.text;
    const values = rule.value;

    if (args.length === 0) {
      this.validateShorthand(rule, definition);
      return;
    }

    if (values.length > args.length) {
      this.errors.push({
        line: rule.identifier.line,
        column: rule.identifier.column,
        message: `Too many arguments for rule '${ruleName}', uses upto ${args.length} args got ${values.length} at ${this.stack.join('->')}`,
      });
    }

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const value = values[i];
      const { optional, alternatives} = arg;

      if(optional && value === undefined) {
        continue;
      }

      if (Array.isArray(alternatives)) {
        let valid = false;
        for (const alternative of alternatives) {
          valid = this.validateValue(value, alternative);
          if (valid) {
            break;
          }
        }
        if(!valid) {
          const error = this.getInvalidError(rule, alternatives, value);
          this.errors.push(error);
        }
        continue;
      }

      const valid = this.validateValue(value, alternatives);
      if (!valid) {
        const error = this.getInvalidError(rule, [alternatives], value);
        this.errors.push(error);
      }
    }
  }

  private validateShorthand(rule: RuleNode, definition: StyleRule): void {
    const shorts = definition.shorthand;

    for (const short of Object.values(shorts)) {
      const args = short.arguments;
      for (const arg of args) {
        const values = rule.value;
        for (const value of values) {
          const alts = arg.alternatives;

          if(Array.isArray(alts)) {
            for (const alternative of Object.values(arg.alternatives)) {
              if (this.validateValue(rule.value[0], alternative)) {
                return;
              }
            }
          } else {
            if(this.validateValue(value, alts)) {
              return;
            }
          }
        }
      }
    }

    this.errors.push({
      line: rule.identifier.line,
      column: rule.identifier.column,
      message: `No alternative found for '${rule.identifier.text}', invalid sequence of arguments at ${this.stack.join('->')}`,
    });
  }

  private validateValue(value: StyleValueNode, alternative: CssRules): boolean {
    switch (value.type) {
      case StyleKind.hex:
        return alternative.kind === CssRule.cssColor;
      case StyleKind.measure: {
        if (alternative.kind !== CssRule.cssNumber) {
          return false;
        }

        if (alternative.unitRequired) {
          return value.unit !== undefined;
        }

        return true;
      }
      case StyleKind.identifier: {
        const id  = value.token.text;
        if (alternative.kind !== CssRule.cssIdentifier) {
          return false;
        }

        const index = alternative.options.findIndex(o => o.name === id);
        return index > -1;
      }
    }
  }

  private getInvalidError(rule: RuleNode, alternatives: CssRules[], value: StyleValueNode): SimpleError {
    const got = value.type;
    const expected = alternatives.map(alt => {
      switch (alt.kind) {
        case CssRule.cssNumber:
          return alt.unitRequired ? 'number with unit' : 'number';
        case CssRule.cssIdentifier:
          return  alt.options.map(o => o.name).join('|');
        case CssRule.cssColor:
          return 'color';
      }
    });

    const expectedText = expected.join(' or ');

    return {
      line: rule.identifier.line,
      column: rule.identifier.column,
      message: `Got ${got} but expected ${expectedText} at ${this.stack.join('->')}`,
    };
  }
}