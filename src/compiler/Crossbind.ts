import * as N from 'types/nodes';
import { ExpressionCheck } from './ExpressionCheck';
import { TemplateChecker } from './TemplateChecker';
import { res } from 'scope';
import { StyleChecker } from './StyleChecker';
import { getTokenFromExp, isAssignableTo, isLiteralObjectAssignableTo, isLiteralType } from './helper';

export class Crossbind {
  public check(program: N.ProgramNode): void {
    res.setFilename(program.sourceFile);
    const { components, types, styles} = program;
    this.checkTypes(types);
    for (const component of components) {
      this.checkComponent(component);
    }

    const checker = new StyleChecker();
    checker.check(styles);
    checker.getErrors().forEach(res.addError);
  }

  private checkTypes(types: N.TypeDeclarationNode[]): void {
    const propsChecked = new Set<string>();
    for (const type of types) {
      const { members, typeName } = type;
      const tName = typeof typeName === 'string' ? typeName : typeName.text;
      for (const member of members) {
        const { typeNotation, name } = member;
        const result = res.resolve({ symbolName: typeNotation.text });
        if (!result) {
          res.addError({
            message: `${tName}.${name.text} has an unresolved type identifier ${typeNotation.text}`,
            column: typeNotation.column,
            line: typeNotation.line,
          });
        }
        if(propsChecked.has(name.text)) {
          res.addError({
            message: `${tName}.${name.text} has already been declared`,
            column: name.column,
            line: name.line,
          });
        } else {
          propsChecked.add(name.text);
        }
      }
    }
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

      const ref = res.resolve({ symbolName: typeAnnotation.text});
      const validProp = checker.checkExpression(initializer);

      if (!validProp.valid) {
        validProp.errors.forEach(e => res.addError(e));
      }

      if(!ref) {
        continue;
      }

      const result = validProp.result;
      if(isLiteralType(result)) {
        isLiteralObjectAssignableTo(ref, result);
        continue;
      }
      const isAssignable = isAssignableTo(ref, result, false);
      const token = getTokenFromExp(initializer);
      if(!isAssignable) {
        res.addError({
          message: `${result.fqnd} is not assignable to ${ref.fqnd}`,
          column: token.column,
          line: token.line,
        });
      }
    }
  }
}