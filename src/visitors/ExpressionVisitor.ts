import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import * as N from 'types/nodes';
import { ExpressionKind } from 'types/nodes';
import { symbolToToken } from '../utils/parse';

export class ExpressionVisitor extends BaseVisitor<N.ExpressionResult> {

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

    //const left = this.visitMultiplicativeExpression(leftExp);

    if(!rightExp.getChildCount()) {
      return {
        kind: ExpressionKind.AdditiveExpression,
        operator: {} as any,
        left: 0,
        right: {} as N.ExpressionResult,
      };
    }

    const expression = this.visitAdditiveFollow(rightExp);
    expression.left = 6;

    return expression;
  };

  visitAdditiveFollow = (ctx: H.AdditiveFollowContext): N.AdditiveExpressionNode => {
    const operator = ctx.Plus() || ctx.Minus();
    const rightExp = ctx.additiveExpression();
    const right = this.visitAdditiveExpression(rightExp);

    return {
      kind: ExpressionKind.AdditiveExpression,
      operator: symbolToToken(operator.symbol),
      left: 5,
      right,
    };
  };
}
