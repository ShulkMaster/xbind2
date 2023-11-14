import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import { ComponentResult, ComponentNode, PropertyNode } from 'types/nodes/component';
import { symbolToToken } from 'utils/parse';
import { TypeVisitor } from './TypeVisitor';
import { TagNode } from 'types/nodes/template';
import { TemplateVisitor } from './TemplateVisitor';

export class ComponentVisitor extends BaseVisitor<ComponentResult> {
  private readonly typeVisitor = new TypeVisitor();
  private readonly props: PropertyNode[] = [];
  private tags: TagNode[] = [];

  visitComponent = (ctx: H.ComponentContext): ComponentNode => {
    const name = ctx.Identifier().symbol;
    const body = ctx.componentBody();
    this.visit(body);

    return {
      type: 'component',
      name: symbolToToken(name),
      properties: this.props,
      template: {
        type: 'template',
        children: this.tags,
      }
    };
  };

  visitPropDeclaration = (ctx: H.PropDeclarationContext): void => {
    const prop = ctx.Prop().symbol;
    const name = ctx.Identifier().symbol;
    const colon = ctx.Colon().symbol;
    const type = ctx.varType();
    //const initializer = ctx.initValue();
    const semi = ctx.SemiColon().symbol;

    const typeAnnotation = this.typeVisitor.visitVarType(type);

    this.props.push({
      type: 'property',
      property: symbolToToken(prop),
      name: symbolToToken(name),
      colon: symbolToToken(colon),
      initializer: '',
      optional: false,
      typeAnnotation,
      semicolon: symbolToToken(semi),
    });
  };

  visitRenderFollow = (ctx: H.RenderFollowContext): void => {
    const undefinedNode = ctx.Undefined();

    if(undefinedNode) {
      return;
    }

    const template = ctx.template();
    const templateVisitor = new TemplateVisitor();
    this.tags = templateVisitor.visitTemplate(template);
  };
}