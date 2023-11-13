import BaseVisitor from 'parser/HaibtVisitor';
import { ProgramContext, ComponentContext } from 'parser/Haibt';
import { ComponentNode, ComponentResult, ProgramNode, ProgramResult } from 'types/nodes';

export class ProgramVisitor extends BaseVisitor<ProgramResult> {
  private readonly componentVisitor: BaseVisitor<ComponentResult>;
  private readonly components: ComponentNode[] = [];

  constructor(componentVisitor: BaseVisitor<ComponentResult>) {
    super();
    this.componentVisitor = componentVisitor;
  }

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
    const result = this.componentVisitor.visit(ctx);
    if (result.type !== 'component') {
      throw new Error(`Expected component result ${result.type}`);
    }

    this.components.push(result);
  };
}