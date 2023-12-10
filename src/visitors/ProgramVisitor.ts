import BaseVisitor from 'parser/HaibtVisitor';
import { ProgramContext, ComponentContext, StyleContext } from 'parser/Haibt';
import { ComponentNode, ProgramNode, ProgramResult, StyleNode, TypeDeclarationNode } from 'types/nodes';
import { ComponentVisitor } from './ComponentVisitor';
import { StyleVisitor } from './StyleVisitor';

export class ProgramVisitor extends BaseVisitor<ProgramResult> {
  private readonly components: ComponentNode[] = [];
  private readonly types: TypeDeclarationNode[] = [];
  private readonly styles: StyleNode[] = [];
  private readonly styleVisitor = new StyleVisitor();

  visitProgram = (ctx: ProgramContext): ProgramNode => {
    const rootModule = ctx.module_();

    if (rootModule.getChildCount() < 1) {
      throw new Error('Program must have at least one module');
    }

    this.visit(rootModule);

    return {
      sourceFile: '',
      sourceCode: '',
      namespace: [],
      uses: [],
      types: this.types,
      components: this.components,
      styles: this.styles,
    };
  };

  visitComponent = (ctx: ComponentContext): void => {
    const componentVisitor = new ComponentVisitor();
    const result = componentVisitor.visitComponent(ctx);
    this.components.push(result);

    if (result.properties.length < 1) {
      return;
    }

    const propTypeName = `${result.name.text}Props`;
    const propType: TypeDeclarationNode = {
      typeName: propTypeName,
      members: [],
    };
    result.propsTypeName = propTypeName;

    for (const property of result.properties) {
      propType.members.push({
        name: property.name,
        optional: property.optional || property.initializer !== undefined,
        type: property.typeAnnotation,
      });
    }
    this.types.push(propType);
  };

  visitStyle = (cxt: StyleContext) => {
    const style = this.styleVisitor.visitStyle(cxt);
    this.styles.push(style);
  };
}