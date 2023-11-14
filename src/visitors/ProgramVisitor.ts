import BaseVisitor from 'parser/HaibtVisitor';
import { ProgramContext, ComponentContext } from 'parser/Haibt';
import { ComponentNode, ProgramNode, ProgramResult } from 'types/nodes';
import { ComponentVisitor } from './ComponentVisitor';

export class ProgramVisitor extends BaseVisitor<ProgramResult> {
  private readonly components: ComponentNode[] = [];

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
      types: [],
      components: this.components,
    };
  };

  visitComponent = (ctx: ComponentContext): void => {
    const componentVisitor = new ComponentVisitor();
    const result = componentVisitor.visitComponent(ctx);
    this.components.push(result);
  };
}