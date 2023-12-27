import { ExpressionVisitor } from './ExpressionVisitor';
import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import * as N from 'types/nodes';
import { DirectiveBind, DirectiveType, ExpressionKind } from 'types/nodes';
import { symbolToToken } from 'utils/parse';
import { ReturnType } from 'types/nodes/native';

export class AttributeVisitor extends BaseVisitor<N.AttributeVisit> {
  private readonly expVisitor = new ExpressionVisitor();

  visitAttributes = (ctx: H.AttributesContext): N.TagProperty[] => {
    let current = ctx;
    const nodes: N.TagProperty[] = [];
    while (current?.getChildCount()) {
      const result = this.visitAttribute(current.attribute());
      nodes.push(result);
      current = current.attributes();
    }
    return nodes;
  };

  visitAttribute = (ctx: H.AttributeContext): N.TagProperty => {
    const directive = ctx.directive();
    if (directive?.getChildCount()) {
      return this.visitDirective(directive);
    }

    const attribute = ctx.attributeBind();
    if (attribute?.getChildCount()) {
      const bind = this.visitAttributeBind(attribute);
      return {
        type: 'attribute',
        name: bind.identifier,
        value: bind.expression,
      };
    }

    const identifier = ctx.Identifier();

    return {
      type: 'attribute',
      name: symbolToToken(identifier.symbol),
      value: {
        kind: ExpressionKind.PrimaryExpression,
        identifier: symbolToToken(identifier.symbol),
        groupExpression: undefined,
      },
    };
  };

  visitAttributeBind = (ctx: H.AttributeBindContext): N.AttributeBind => {
    const identifier = ctx.Identifier();
    const attributeBindFollow = ctx.attributeBindFollow();
    const expression = this.visitAttributeBindFollow(attributeBindFollow);
    return {
      identifier: symbolToToken(identifier.symbol),
      expression,
    };
  };

  visitAttributeBindFollow = (ctx: H.AttributeBindFollowContext): N.ExpressionResult => {
    return this.visitAttribValue(ctx.attributeValue());
  };

  visitDirective = (ctx: H.DirectiveContext): N.DirectiveNode => {
    const { type, token } = this.visitDirectiveName(ctx.directiveName());
    const value = this.visitAttribValue(ctx.attributeValue());

    return {
      type: 'directive',
      name: token,
      kind: type,
      value,
    };
  };

  visitAttribValue = (ctx: H.AttributeValueContext): N.ExpressionResult  => {
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

  visitDirectiveName = (ctx: H.DirectiveNameContext): DirectiveBind => {
    const ifDirective = ctx.If();
    if (ifDirective) {
      return {
        type: DirectiveType.if,
        token: symbolToToken(ifDirective.symbol),
      };
    }

    const elseDirective = ctx.Else();
    if (elseDirective) {
      return {
        type: DirectiveType.else,
        token: symbolToToken(elseDirective.symbol),
      };
    }

    const switchDirective = ctx.Switch();
    if (switchDirective) {
      return {
        type: DirectiveType.switch,
        token: symbolToToken(switchDirective.symbol),
      };
    }

    const caseDirective = ctx.Case();
    if (caseDirective) {
      return {
        type: DirectiveType.case,
        token: symbolToToken(caseDirective.symbol),
      };
    }

    const templateDirective = ctx.Template();
    if (templateDirective) {
      return {
        type: DirectiveType.template,
        token: symbolToToken(templateDirective.symbol),
      };
    }

    throw new Error(`Unknown directive name: ${ctx.getText()}`);
  };
}