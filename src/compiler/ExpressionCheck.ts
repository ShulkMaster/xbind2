import { ExpressionCheckResult } from 'types/crossbind';
import * as N from 'types/nodes';
import { res } from 'scope/Resolver';
import { undefinedSymbol } from 'bcl/lang/lib';
import { resolveConstantExpression } from './helper';
import { HSymbol, Resolution } from 'types/scope';
import { expCheckCall, expCheckMember } from './ExpResolver';

export class ExpressionCheck {

  checkExpression(expression: N.ExpressionResult): ExpressionCheckResult {
    switch (expression.kind) {
      case N.ExpressionKind.constantExpression: {
        const result = resolveConstantExpression(expression);
        return {result, valid: true, errors: []};
      }
      case N.ExpressionKind.PrimaryExpression:
        return this.checkPrimaryExpression(expression);
      case N.ExpressionKind.PostfixExpression:
        return this.checkPostfixExpression(expression);
      case N.ExpressionKind.AssignmentExpression:
      case N.ExpressionKind.ConditionalExpression:
      case N.ExpressionKind.TernaryExpression:
      case N.ExpressionKind.LogicalOrExpression:
      case N.ExpressionKind.LogicalAndExpression:
      case N.ExpressionKind.EqualityExpression:
      case N.ExpressionKind.RelationalExpression:
      case N.ExpressionKind.AdditiveExpression:
      case N.ExpressionKind.MultiplicativeExpression:
      case N.ExpressionKind.CastExpression:
      case N.ExpressionKind.UnaryExpression:
        throw new Error('Not implemented');
      default:
        throw new Error('Invalid expression');
    }
  }

  checkPrimaryExpression(exp: N.PrimaryExpressionNode): ExpressionCheckResult {
    const {identifier, groupExpression} = exp;

    if (groupExpression) {
      return this.checkExpression(groupExpression.expression);
    }

    if (!identifier) {
      throw new Error('Invalid primary expression');
    }

    const resolution = res.resolve({symbolName: identifier.text});

    if (!resolution) {
      return {
        valid: false,
        errors: [
          {
            message: `Unresolved identifier ${identifier.text}`,
            column: identifier.column,
            line: identifier.line,
          },
        ],
        result: undefinedSymbol,
      };
    }

    return {
      valid: true,
      errors: [],
      result: resolution,
    };
  }

  checkPostfixExpression(exp: N.PostfixExpressionNode): ExpressionCheckResult {
    const check = this.checkExpression(exp.primary!);
    if (!check.valid) {
      return check;
    }

    return this.checkPostfixFollow(exp, check.result);
  }

  checkPostfixFollow(exp: N.PostfixExpressionNode, previous: HSymbol): ExpressionCheckResult {
    const {call, indexed, member, operator, follow} = exp;

    let check: Resolution;
    if (member) {
      check = expCheckMember(member, previous);
    }

    if (call) {
      check = expCheckCall(call.open, call.arguments, previous);
    }

    if (check && follow) {
      return this.checkPostfixFollow(follow, check);
    }

    if (check) {
      return {valid: true, errors: [], result: check};
    }

    return {
      result: undefinedSymbol, valid: false, errors: [],
    };
  }
}