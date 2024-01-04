import BaseVisitor from 'parser/HaibtVisitor';
import { ProgramContext, ComponentContext, StyleContext } from 'parser/Haibt';
import { ComponentNode, ProgramNode, ProgramResult, StyleNode, TypeDeclarationNode, UsePath } from 'types/nodes';
import { ComponentVisitor } from './ComponentVisitor';
import { StyleVisitor } from './StyleVisitor';
import { filePathToScope } from 'utils';


export class ProgramVisitor extends BaseVisitor<ProgramResult> {
  private readonly components: ComponentNode[] = [];
  private readonly types: TypeDeclarationNode[] = [];
  private readonly styles: StyleNode[] = [];
  private readonly styleVisitor = new StyleVisitor();
  private readonly fileName: string;
  private readonly scope: UsePath;

  constructor(fileName: string) {
    super();
    this.fileName = fileName;
    this.scope = filePathToScope(fileName);
  }


  visitProgram = (ctx: ProgramContext): ProgramNode => {
    const rootModule = ctx.module_();

    if (rootModule.getChildCount() < 1) {
      throw new Error('Program must have at least one module');
    }

    this.visit(rootModule);

    return {
      sourceFile: this.fileName,
      sourceCode: '',
      scope: this.scope,
      uses: [],
      types: this.types,
      components: this.components,
      styles: this.styles,
    };
  };

  visitComponent = (ctx: ComponentContext): void => {
    const componentVisitor = new ComponentVisitor();
    const result = componentVisitor.visitComponent(ctx);
    result.scope = this.scope;
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
        typeNotation: property.typeAnnotation,
      });
    }
    this.types.push(propType);
  };

  visitStyle = (cxt: StyleContext) => {
    const style = this.styleVisitor.visitStyle(cxt);
    this.styles.push(style);
  };
}