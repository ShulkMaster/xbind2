import * as N from 'types/nodes';
import { CompileError } from 'types/logging';
import { ProgramNode } from 'types/nodes';
import { ExpressionCheck } from './ExpressionCheck';
import { TypeRefSymbol } from 'types/symbol';
import { ReturnType } from 'types/nodes/native';
import { TemplateChecker } from './TemplateChecker';
import { Resolver } from 'scope/Resolver';
import { StyleChecker } from './StyleChecker';

export class Crossbind {
  public readonly errors: CompileError[] = [];
  private readonly res: Resolver;

  constructor(res: Resolver) {
    this.res = res;
  }

  public check(program: N.ProgramNode): void {
    const {scope, uses, components, types, styles, sourceFile} = program;
    // for (const component of components) {
    //   this.checkComponent(component, program);
    // }

    const checker = new StyleChecker();
    checker.check(styles);
    checker.getErrors().forEach(e => {
      this.errors.push({
        message: e.message,
        file: sourceFile,
        column: e.column,
        line: e.line,
      });
    });
  }

  private checkComponent(comp: N.ComponentNode, p: ProgramNode): void {
    const {name, properties, template} = comp;
    this.checkProperties(properties, p);
    const templateChecker = new TemplateChecker(this.errors, p, this.res);
    templateChecker.checkTemplate(template);
  }

  private checkProperties(properties: N.PropertyNode[], p: ProgramNode): void {
    for (const prop of properties) {
      const { name, typeAnnotation, initializer, property} = prop;
      if (!initializer) {
        continue;
      }

      const checker = new ExpressionCheck(p, this.res);
      const validProp = checker.checkExpression(initializer);

      if (!validProp.valid) {
        this.errors.push(...validProp.errors);
        continue;
      }

      const type = validProp.result;
      if (typeAnnotation.primitive) {
        if (this.checkPrimitiveType(typeAnnotation, type)) {
          this.errors.push({
            message: `type ${type} is not assignable to ${typeAnnotation.name}`,
            file: p.sourceFile,
            column: property.column,
            line: property.line,
          });
        }
      } else {
        if (this.checkType(typeAnnotation, type)) {
          this.errors.push({
            message: `type ${type} is not assignable to ${typeAnnotation.typeName.text}`,
            file: p.sourceFile,
            column: property.column,
            line: property.line,
          });
        }
      }
    }
  }

  private checkPrimitiveType(expected: N.PrimitiveTypeNode, actual: TypeRefSymbol | ReturnType): boolean {
    if (typeof actual === 'string') {
      return expected.name !== actual;
    }

    if (typeof actual.name === 'string') {
      return expected.name !== actual.name;
    }

    return expected.name !== actual.name.text;
  }

  private checkType(expected: N.TypeRefNode, actual: TypeRefSymbol | ReturnType): boolean {
    if (typeof actual === 'string') {
      return expected.typeName.text !== actual;
    }

    if (typeof actual.name === 'string') {
      return expected.typeName.text !== actual.name;
    }

    return expected.typeName.text !== actual.name.text;
  }
}