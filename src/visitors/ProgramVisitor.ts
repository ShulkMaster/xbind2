import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import { ComponentNode, ProgramNode, ProgramResult, StyleNode, TypeDeclarationNode, UsePath } from 'types/nodes';
import { ComponentVisitor } from './ComponentVisitor';
import { StyleVisitor } from './StyleVisitor';
import { filePathToScope } from 'utils';
import { TypeVisitor } from './TypeVisitor';
import { symbolToToken } from 'utils/parse';


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


  visitProgram = (ctx: H.ProgramContext): ProgramNode => {
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

  visitComponent = (ctx: H.ComponentContext): void => {
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

  visitStyle = (cxt: H.StyleContext) => {
    const style = this.styleVisitor.visitStyle(cxt);
    this.styles.push(style);
  };

  visitTypeDef = (ctx: H.TypeDefContext) => {
    const v = new TypeVisitor();
    const tName = ctx.Identifier().symbol;
    const type: TypeDeclarationNode = {
      typeName: symbolToToken(tName),
      members: [],
    };

    let tMember = ctx.typeDefBody();
    while (tMember?.getChildCount() > 0) {
      const notation = v.visitVarType(tMember.varType());
      type.members.push({
        name: symbolToToken(tMember.Identifier().symbol),
        optional: tMember.optional().getChildCount() > 0,
        typeNotation: notation,
      });
      tMember = tMember.typeDefBody();
    }

    this.types.push(type);
  };
}