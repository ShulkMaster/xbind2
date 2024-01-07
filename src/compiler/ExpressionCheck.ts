import { ExpressionCheckResult } from 'types/crossbind';
import * as N from 'types/nodes';
import { res } from 'scope/Resolver';
import { undefinedSymbol } from 'bcl/lang/lib';
import { asName, getTokenFromExp, resolveConstantExpression } from './helper';
import { HSymbol, LiteralObjectSymbol, LiteralType, Resolution } from 'types/scope';
import { expCheckCall, expCheckMember } from './ExpResolver';

export class ExpressionCheck {

  checkExpression(expression: N.ExpressionResult): ExpressionCheckResult {
    switch (expression.kind) {
      case N.ExpressionKind.constantExpression: {
        const result = resolveConstantExpression(expression);
        return {result, valid: true };
      }
      case N.ExpressionKind.PrimaryExpression:
        return this.checkPrimaryExpression(expression);
      case N.ExpressionKind.ArrayLiteralExpression:
       throw new Error(`Not implemented ${expression.kind}`);
      case N.ExpressionKind.ObjectLiteralExpression:
        return this.checkObjectLiteral(expression);
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
        throw new Error(`Not implemented ${expression.kind}`);
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
      res.addError({
        message: `Unresolved identifier ${identifier.text}`,
        column: identifier.column,
        line: identifier.line,
      });
      return {
        valid: false,
        result: undefinedSymbol,
      };
    }

    return { valid: true, result: resolution };
  }

  checkPostfixExpression(exp: N.PostfixExpressionNode): ExpressionCheckResult {
    const check = this.checkExpression(exp.primary!);
    if (!check.valid) {
      return check;
    }

    const kind = check.result.kind;
    if (kind === LiteralType.Object) {
      throw new Error('How is this possible?');
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
      return {valid: true, result: check};
    }

    return { result: undefinedSymbol, valid: false };
  }

  checkObjectLiteral(exp: N.ObjectLiteralExpressionNode): ExpressionCheckResult {
    const {elements} = exp;
    const props = new Set<string>();
    const symbol: LiteralObjectSymbol = {
      kind: LiteralType.Object,
      declaration: getTokenFromExp(exp),
      members: {},
    };

    for (const { key, value} of elements) {
      const keyName = asName(key);
      const check = this.checkExpression(value);
      if (props.has(keyName)) {
        res.addError({
          message: `Duplicate property ${keyName}`,
          column: key.column,
          line: key.line,
        });
        continue;
      }
      props.add(asName(key));
      if (!check.valid) continue;

      symbol.members[keyName] = {
        name: key,
        type: check.result,
      };
    }

    return { result: symbol,  valid: true };
  }
}