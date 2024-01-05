import * as N from 'types/nodes';
import { ExpressionCheck } from './ExpressionCheck';
import { TemplateChecker } from './TemplateChecker';
import { res } from 'scope';
import { StyleChecker } from './StyleChecker';
import { getTokenFromExp, isAssignableTo } from './helper';

export class Crossbind {
  public check(program: N.ProgramNode): void {
    res.setFilename(program.sourceFile);
    const { components, types, styles} = program;
    for (const component of components) {
      this.checkComponent(component);
    }

    const checker = new StyleChecker();
    checker.check(styles);
    checker.getErrors().forEach(res.addError);
  }

  private checkComponent(comp: N.ComponentNode): void {
    const checker = new ExpressionCheck();
    this.checkProperties(comp, checker);
    // const templateChecker = new TemplateChecker(this.errors, p, this.res);
    // templateChecker.checkTemplate(template);
  }

  private checkProperties(comp: N.ComponentNode, checker: ExpressionCheck): void {
    for (const prop of comp.properties) {
      const { typeAnnotation, initializer} = prop;
      if (!initializer) {
        continue;
      }

      const validProp = checker.checkExpression(initializer);

      if (!validProp.valid) {
        validProp.errors.forEach(e => res.addError(e));
      }

      const ref = res.resolve({ symbolName: typeAnnotation.text});
      if(!ref) {
        continue;
      }

      const isAssignable = isAssignableTo(ref, validProp.result, false);
      const token = getTokenFromExp(initializer);
      if(!isAssignable) {
        res.addError({
          message: `${validProp.result.fqnd} is not assignable to ${ref.fqnd}`,
          column: token.column,
          line: token.line,
        });
      }
    }
  }
}