import { CompileError } from 'types/logging';
import { ExpressionCheck } from './ExpressionCheck';
import * as N from 'types/nodes';

export class TemplateChecker {
  private readonly errorStack: CompileError[];
  private readonly expChecker: ExpressionCheck;
  private readonly program: N.ProgramNode;

  constructor(errorStack: CompileError[], program: N.ProgramNode) {
    this.errorStack = errorStack;
    this.program = program;
    this.expChecker = new ExpressionCheck(program);
  }

  checkTemplate(template: N.TemplateNode): void {
    template.children.forEach(child => {
      this.checkTag(child);
    });
  }

  private checkTag(tag: N.TagNode): void {
    const openTag = tag.openTag;
    const closeTag = tag.closeTag;

    if (closeTag && openTag.text !== closeTag.text) {
      const max = Math.max(closeTag.end - openTag.start, 100);
      const textLines = this.program.sourceCode.substring(openTag.start, openTag.start + max);
      this.errorStack.push({
        message: `tag ${openTag.text} is not closed`,
        text: textLines,
        file: this.program.sourceFile,
        line: openTag.line,
        column: openTag.column,
      });
    }

    tag.properties.forEach(prop => this.checkAttribute(prop));

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

  private checkAttribute(attribute: N.TagPropertyNode): void {

  }

  private checkExpression(expression: N.ExpressionResult): void {
    const result = this.expChecker.checkExpression(expression);
    this.errorStack.push(...result.errors);
  }
}