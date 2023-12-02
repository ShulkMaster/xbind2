import { ExpressionVisitor } from './ExpressionVisitor';
import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import { DirectiveType, ExpressionKind, ExpressionResult, TagPropertyNode } from 'types/nodes';
import { Token } from 'types/token';
import { symbolToToken } from 'utils/parse';
import { ReturnType } from '../types/nodes/native';

export class AttributeVisitor extends BaseVisitor<TagPropertyNode[]> {
  private readonly expVisitor = new ExpressionVisitor();

  visitAttributes = (ctx: H.AttributesContext): TagPropertyNode[] => {
    const result: TagPropertyNode[] = [];
    this.visitAttributesInt(ctx, result);
    return result;
  };

  private visitAttributesInt = (ctx: H.AttributesContext, nodes: TagPropertyNode[]): void => {
    const attribute = ctx.attribute();
    this.visitAttributeInt(attribute, nodes);
    const next = ctx.attributes();
    if(next?.getChildCount()) {
      this.visitAttributesInt(next, nodes);
    }
  };

  private visitAttributeInt = (ctx: H.AttributeContext, nodes: TagPropertyNode[]): void => {
    const directive = ctx.directive();
    if (directive.getChildCount()) {
      nodes.push(this.visitDirectiveInt(directive));
      return;
    }
  };

  private visitDirectiveInt = (ctx: H.DirectiveContext): TagPropertyNode => {
    const [kind, token] = this.visitDirectiveNameInt(ctx.directiveName());
    const value = this.visitAttribValueInt(ctx.attributeValue());

    return {
      type: 'directive',
      name: token,
      kind,
      value,
    };
  };

  private visitAttribValueInt = (ctx: H.AttributeValueContext): ExpressionResult  => {
    const stringLiteral = ctx.StringLiteral();

    if (stringLiteral) {
      return {
        kind: ExpressionKind.constantExpression,
        token: symbolToToken(stringLiteral.symbol),
        primitiveType: ReturnType.String,
      };
    }

    const exp = ctx.expression();
    return this.expVisitor.visitExpression(exp);
  };

  private visitDirectiveNameInt = (ctx: H.DirectiveNameContext): [DirectiveType, Token] => {
    const ifDirective = ctx.If();
    if (ifDirective) {
      return [DirectiveType.if, symbolToToken(ifDirective.symbol)];
    }

    const elseDirective = ctx.Else();
    if (elseDirective) {
      return [DirectiveType.else, symbolToToken(elseDirective.symbol)];
    }

    const switchDirective = ctx.Switch();
    if (switchDirective) {
      return [DirectiveType.switch, symbolToToken(switchDirective.symbol)];
    }

    const caseDirective = ctx.Case();
    if (caseDirective) {
      return [DirectiveType.case, symbolToToken(caseDirective.symbol)];
    }

    const templateDirective = ctx.Template();
    if (templateDirective) {
      return [DirectiveType.template, symbolToToken(templateDirective.symbol)];
    }

    throw new Error(`Unknown directive name: ${ctx.getText()}`);
  };
}