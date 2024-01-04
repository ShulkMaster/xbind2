import { SimpleError } from 'types/logging';
import { ExpressionCheck } from './ExpressionCheck';
import * as N from 'types/nodes';

export class TemplateChecker {
  private readonly errorStack: SimpleError[] = [];
  private readonly expChecker: ExpressionCheck;

  constructor() {
    this.expChecker = new ExpressionCheck();
  }

  checkTemplate(template: N.TemplateNode): void {
    template.children.forEach(child => {
      this.checkTag(child);
    });
  }

  public getErrors(): SimpleError[] {
    return this.errorStack;
  }

  private checkTag(tag: N.TagNode): void {
    const openTag = tag.openTag;
    const closeTag = tag.closeTag;

    if (closeTag && openTag.text !== closeTag.text) {
      this.errorStack.push({
        message: `tag ${openTag.text} is not closed`,
        line: openTag.line,
        column: openTag.column,
      });
    }

    tag.attributes.forEach(prop => this.checkAttribute(prop));

    tag.children.forEach(child => {
      switch (child.type) {
        case 'charData':
          break;
        case 'tag':
          this.checkTag(child);
          break;
        case 'expression':
          this.checkExpression(child.expression);
          break;
      }
    });
  }

  private checkAttribute(attribute: N.AttributeNode): void {
    const { name, value } = attribute;
    // todo: check attribute name exits and has correct type
    if (value) {
      const expChecker = this.expChecker.checkExpression(value);
      this.errorStack.push(...expChecker.errors);
    }
  }

  private checkExpression(expression: N.ExpressionResult): void {
    const result = this.expChecker.checkExpression(expression);
    this.errorStack.push(...result.errors);
  }
}