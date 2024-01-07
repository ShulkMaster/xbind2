import * as N from 'types/nodes';
import * as E from 'types/nodes/expression';
import { res } from 'scope';
import { ReturnType } from 'types/nodes/native';
import { ExpressionCheck } from './ExpressionCheck';
import { DirectiveType, ExpressionKind } from 'types/nodes';

export class TemplateChecker {
  private readonly expChecker = new ExpressionCheck();

  checkTemplate(template: N.TemplateNode): void {
    template.children.forEach(child => {
      this.checkTag(child);
    });
  }

  private checkTag(tag: N.TagNode): void {
    const openTag = tag.openTag;
    const closeTag = tag.closeTag;

    if (closeTag && openTag.text !== closeTag.text) {
      res.addError({
        message: `tag ${openTag.text} is not closed`,
        line: openTag.line,
        column: openTag.column,
      });
    }

    tag.attributes.forEach(prop => this.checkAttribute(prop));
    tag.directives.forEach(directive => this.checkDirective(directive));
    tag.children.forEach(child => {
      switch (child.type) {
        case 'charData':
          break;
        case 'tag':
          this.checkTag(child);
          break;
        case 'expression':
          this.expChecker.checkExpression(child.expression);
          break;
      }
    });
  }

  private checkAttribute(attribute: N.AttributeNode): void {
    const {name, value} = attribute;
    // todo: check attribute name exits and has correct type
    if (value) {
      const expChecker = this.expChecker.checkExpression(value);
      //todo: check attribute type is correct and exits;
    }
  }

  private constanMsg(exp: E.ConstantExpressionNode): string {
    switch (exp.primitiveType) {
      case ReturnType.Void:
        return 'void value is always false';
      case ReturnType.Number:
        return exp.token.text === '0' ?
          '0 is always false' : `number value ${exp.token.text} is always true`;
      case ReturnType.String: {
        const text = exp.token.text;
        return text.length <= 2
          ? 'empty string is always false'
          : `${text} string value is always true`;
      }
      case ReturnType.Boolean:
        return exp.token.text === 'false' ?
          'false is always false' : 'true is always true';
      case ReturnType.Color:
        return 'color value is always interpreted as true';
      case ReturnType.Undefined:
        return 'undefined value is always tread as false';
    }
  }

  private checkConstantDirective(dir: N.DirectiveNode): void {
    const {name, value} = dir;
    const dirName = dir.kind.toUpperCase();
    if (value.kind !== ExpressionKind.constantExpression) {
      res.addError({
        message: `${dirName} directive must have a constant string expression`,
        line: name.line,
        column: name.column,
      });
      return;
    }

    if(value.primitiveType !== ReturnType.String) {
      res.addError({
        message: `${dirName} directive must have a constant string expression`,
        line: name.line,
        column: name.column,
      });
      return;
    }

    const text = value.token.text;
    if(text.length <= 2) {
      res.addError({
        message: `${dirName} directive string value must not be empty and point to a valid template`,
        line: name.line,
        column: name.column,
      });
    }
  }

  private checkDirective(directive: N.DirectiveNode): void {
    const {name, value, kind} = directive;
    switch (kind) {
      case DirectiveType.if:
        if (value.kind === ExpressionKind.constantExpression) {
          const reason = this.constanMsg(value);
          res.addError({
            message: `IF directive has an invalid expression: ${reason}`,
            line: name.line,
            column: name.column,
          });
          return;
        }
        this.expChecker.checkExpression(value);
        break;
      case DirectiveType.else:
      case DirectiveType.template:
        this.checkConstantDirective(directive);
        return;
      case DirectiveType.switch:
      case DirectiveType.case:
        break;
    }
  }

}