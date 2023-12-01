import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import * as N from 'types/nodes';
import { ExpressionKind } from 'types/nodes';
import { symbolToToken } from '../utils/parse';
import { TypeVisitor } from './TypeVisitor';
import { ReturnType } from 'types/nodes/native';

export class ExpressionVisitor extends BaseVisitor<N.ExpressionResult> {
  private typeVisitor = new TypeVisitor();

  visitExpression = (ctx: H.ExpressionContext): N.ExpressionResult => {
    return this.visitAssignmentExpression(ctx.assignmentExpression());
  };

  visitAssignmentExpression = (ctx: H.AssignmentExpressionContext): N.ExpressionResult => {
    const assigneeExp = ctx.conditionalExpression();
    const assignorExp = ctx.assignmentFollow();

    const assignee = this.visitConditionalExpression(assigneeExp);

    if(!assignorExp.getChildCount()) {
      return assignee;
    }

    const assignor = this.visitAssignmentFollow(assignorExp);

    return {
      kind: ExpressionKind.AssignmentExpression,
      assignee,
      assignor,
    };
  };

  visitAssignmentFollow = (ctx: H.AssignmentFollowContext): N.ExpressionResult => {
    return this.visitAssignmentExpression(ctx.assignmentExpression());
  };

  visitConditionalExpression = (ctx: H.ConditionalExpressionContext): N.ExpressionResult => {
    const conditionExp = ctx.logicalOrExpression();
    const resultsExp = ctx.ternaryExpression();

    const condition = this.visitLogicalOrExpression(conditionExp);

    if(!resultsExp.getChildCount()) {
      return condition;
    }

    const results = this.visitTernaryExpression(resultsExp);

    return {
      kind: ExpressionKind.ConditionalExpression,
      condition,
      results,
    };
  };

  visitTernaryExpression = (ctx: H.TernaryExpressionContext): N.TernaryExpressionNode => {
    const trueBranchExp = ctx.expression();
    const falseBranchExp = ctx.conditionalExpression();

    const trueBranch = this.visitExpression(trueBranchExp);
    const falseBranch = this.visitConditionalExpression(falseBranchExp);

    return {
      kind: ExpressionKind.TernaryExpression,
      trueBranch,
      falseBranch,
    };
  };

  visitLogicalOrExpression = (ctx: H.LogicalOrExpressionContext): N.ExpressionResult => {
    const leftExp = ctx.logicalAndExpression();
    const rightExp = ctx.logicalOrFollow();

    const left = this.visitLogicalAndExpression(leftExp);

    if(!rightExp.getChildCount()) {
      return left;
    }

    const right = this.visitLogicalOrFollow(rightExp);

    return {
      kind: ExpressionKind.LogicalOrExpression,
      left,
      right,
    };
  };

  visitLogicalOrFollow = (ctx: H.LogicalOrFollowContext): N.ExpressionResult => {
    return this.visitLogicalOrExpression(ctx.logicalOrExpression());
  };

  visitLogicalAndExpression = (ctx: H.LogicalAndExpressionContext): N.ExpressionResult => {
    const leftExp = ctx.equalityExpression();
    const rightExp = ctx.logicalAndFollow();

    const left = this.visitEqualityExpression(leftExp);

    if(!rightExp.getChildCount()) {
      return left;
    }

    const right = this.visitLogicalAndFollow(rightExp);

    return {
      kind: ExpressionKind.LogicalAndExpression,
      left,
      right,
    };
  };

  visitLogicalAndFollow = (ctx: H.LogicalAndFollowContext): N.ExpressionResult => {
    return this.visitLogicalAndExpression(ctx.logicalAndExpression());
  };

  visitEqualityExpression = (ctx: H.EqualityExpressionContext): N.ExpressionResult => {
    const leftExp = ctx.relationalExpression();
    const rightExp = ctx.equalityFollow();

    const left = this.visitRelationalExpression(leftExp);

    if(!rightExp.getChildCount()) {
      return left;
    }

    const expression = this.visitEqualityFollow(rightExp);
    expression.left = left;

    return expression;
  };

  visitEqualityFollow = (ctx: H.EqualityFollowContext): N.EqualityExpressionNode => {
    const operator = ctx.Equal() || ctx.NotEqual();
    const rightExp = ctx.equalityExpression();
    const right = this.visitEqualityExpression(rightExp);

    return {
      kind: ExpressionKind.EqualityExpression,
      left: {} as N.ExpressionResult,
      operator: symbolToToken(operator.symbol),
      right,
    };
  };

  visitRelationalExpression = (ctx: H.RelationalExpressionContext): N.ExpressionResult => {
    const leftExp = ctx.additiveExpression();
    const rightExp = ctx.relationalFollow();

    const left = this.visitAdditiveExpression(leftExp);

    if(!rightExp.getChildCount()) {
      return left;
    }

    const expression = this.visitRelationalFollow(rightExp);
    expression.left = left;

    return expression;
  };

  visitRelationalFollow = (ctx: H.RelationalFollowContext): N.RelationalExpressionNode => {
    const lesserOperator = ctx.LessThan() || ctx.LessThanOrEqual();
    const greaterOperator = ctx.GreaterThan() || ctx.GreaterThanOrEqual();
    const operator = lesserOperator || greaterOperator;
    const rightExp = ctx.relationalExpression();
    const right = this.visitRelationalExpression(rightExp);

    return {
      kind: ExpressionKind.RelationalExpression,
      left: {} as N.ExpressionResult,
      operator: symbolToToken(operator.symbol),
      right,
    };
  };

  visitAdditiveExpression = (ctx: H.AdditiveExpressionContext): N.ExpressionResult => {
    const leftExp = ctx.multiplicativeExpression();
    const rightExp = ctx.additiveFollow();

    const left = this.visitMultiplicativeExpression(leftExp);

    if(!rightExp.getChildCount()) {
      return left;
    }

    const expression = this.visitAdditiveFollow(rightExp);
    expression.left = left;

    return expression;
  };

  visitAdditiveFollow = (ctx: H.AdditiveFollowContext): N.AdditiveExpressionNode => {
    const operator = ctx.Plus() || ctx.Minus();
    const rightExp = ctx.additiveExpression();
    const right = this.visitAdditiveExpression(rightExp);

    return {
      kind: ExpressionKind.AdditiveExpression,
      operator: symbolToToken(operator.symbol),
      left: {} as N.ExpressionResult,
      right,
    };
  };

  visitMultiplicativeExpression = (ctx: H.MultiplicativeExpressionContext): N.ExpressionResult => {
    const leftExp = ctx.castExpression();
    const rightExp = ctx.multiplicativeFollow();

    const left = this.visitCastExpression(leftExp);

    if(!rightExp.getChildCount()) {
      return left;
    }

    const expression = this.visitMultiplicativeFollow(rightExp);
    expression.left = left;

    return expression;
  };

  visitMultiplicativeFollow = (ctx: H.MultiplicativeFollowContext): N.MultiplicativeExpressionNode => {
    const operator = ctx.Star() || ctx.Slash() || ctx.Mod();
    const rightExp = ctx.multiplicativeExpression();
    const right = this.visitMultiplicativeExpression(rightExp);

    return {
      kind: ExpressionKind.MultiplicativeExpression,
      operator: symbolToToken(operator.symbol),
      left: {} as N.ExpressionResult,
      right,
    };
  };

  visitCastExpression = (ctx: H.CastExpressionContext): N.ExpressionResult => {
    const unaryExp = ctx.unaryExpression();
    const typeExp = ctx.castFollow();

    const unary = this.visitUnaryExpression(unaryExp);

    if (!typeExp.getChildCount()) {
      return unary;
    }

    const type = this.typeVisitor.visitVarType(typeExp.varType());

    return {
      kind: ExpressionKind.CastExpression,
      left: unary,
      as: type,
    };
  };

  visitUnaryExpression = (ctx: H.UnaryExpressionContext): N.ExpressionResult => {
    const operatorCtx = ctx.unaryOperator();
    const primaryExp = this.visitPostfixExpression(ctx.postfixExpression());

    if(!operatorCtx?.getChildCount()) {
      return primaryExp;
    }

    const operator = operatorCtx.Plus() || operatorCtx.Minus() || operatorCtx.Not();

    return {
      kind: ExpressionKind.UnaryExpression,
      operator: symbolToToken(operator.symbol),
      right: primaryExp,
    };
  };

  visitPostfixExpression = (ctx: H.PostfixExpressionContext): N.ExpressionResult => {
    const primaryExp = ctx.primaryExpression();
    const postfixExp = ctx.postfixFollow();

    const primary = this.visitPrimaryExpression(primaryExp);

    if(!postfixExp.getChildCount()) {
      return primary;
    }

    const expression = this.visitPostfixFollow(postfixExp);
    expression.primary = primary;

    return expression;
  };

  visitPostfixFollow = (ctx: H.PostfixFollowContext): N.PostfixExpressionNode => {
    const operator = ctx.PlusPlus() || ctx.MinusMinus();
    const followExp = ctx.postfixFollow();
    let follow: N.ExpressionResult | undefined = undefined;

    if (followExp.getChildCount()) {
      follow = this.visitPostfixFollow(followExp);
    }

    if (operator) {
      return {
        kind: ExpressionKind.PostfixExpression,
        primary: {} as N.ExpressionResult,
        operator: symbolToToken(operator.symbol),
        call: undefined,
        indexed: undefined,
        follow,
      };
    }

    const open = ctx.OParen();
    if(open) {
      const close = ctx.CParen().symbol;
      return {
        kind: ExpressionKind.PostfixExpression,
        primary: {} as N.ExpressionResult,
        operator: undefined,
        call: [symbolToToken(open.symbol), symbolToToken(close)],
        indexed: undefined,
        follow,
      };
    }

    const openIndex = ctx.OBracnk();
    const closeIndex = ctx.CBracnk();
    const expressionNode = this.visitExpression(ctx.expression());

    return {
      kind: ExpressionKind.PostfixExpression,
      primary: {} as N.ExpressionResult,
      operator: undefined,
      call: undefined,
      indexed: {
        open: symbolToToken(openIndex.symbol),
        index: expressionNode,
        close: symbolToToken(closeIndex.symbol),
      },
      follow,
    };
  };

  visitPrimaryExpression = (ctx: H.PrimaryExpressionContext): N.ExpressionResult => {
    const identifier = ctx.Identifier();
    if (identifier) {
      return {
        kind: ExpressionKind.PrimaryExpression,
        identifier: symbolToToken(identifier.symbol),
        groupExpression: undefined,
      };
    }

    const constantExpression = ctx.constantExpression();
    if (constantExpression) {
      return this.visitConstantExpression(constantExpression);
    }

    return {
      kind: ExpressionKind.PrimaryExpression,
      identifier: undefined,
      groupExpression: {
        open: symbolToToken(ctx.OParen().symbol),
        expression: this.visitExpression(ctx.expression()),
        close: symbolToToken(ctx.CParen().symbol),
      },
    };
  };

  visitConstantExpression = (ctx: H.ConstantExpressionContext): N.ConstantExpressionNode => {
    const numberValue = ctx.NumberValue();
    if (numberValue) {
      return {
        kind: ExpressionKind.constantExpression,
        token: symbolToToken(numberValue.symbol),
        primitiveType: ReturnType.Number,
      };
    }

    const stringLiteral = ctx.StringLiteral();
    if (stringLiteral) {
      return {
        kind: ExpressionKind.constantExpression,
        token: symbolToToken(stringLiteral.symbol),
        primitiveType: ReturnType.String,
      };
    }

    const booleanValue = ctx.BoolValue();
    if (booleanValue) {
      return {
        kind: ExpressionKind.constantExpression,
        token: symbolToToken(booleanValue.symbol),
        primitiveType: ReturnType.Boolean,
      };
    }

    const colorValue = ctx.HEX_COLOR();
    if (colorValue) {
      return {
        kind: ExpressionKind.constantExpression,
        token: symbolToToken(colorValue.symbol),
        primitiveType: ReturnType.Color,
      };
    }

    const value = ctx.Undefined();
    return {
      kind: ExpressionKind.constantExpression,
      token: symbolToToken(value.symbol),
      primitiveType: ReturnType.Undefined,
    };
  };
}
