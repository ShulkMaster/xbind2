import BaseVisitor from 'parser/HaibtVisitor';
import { ProgramContext, ComponentContext } from 'parser/Haibt';
import { ComponentNode, ProgramNode, ProgramResult, TypeDeclarationNode } from 'types/nodes';
import { ComponentVisitor } from './ComponentVisitor';

export class ProgramVisitor extends BaseVisitor<ProgramResult> {
  private readonly components: ComponentNode[] = [];
  private readonly types: TypeDeclarationNode[] = [];

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
}