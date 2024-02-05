import { ExpressionCheckResult } from 'types/crossbind';
import * as N from 'types/nodes';
import { res } from 'scope/Resolver';
import { nativeBool, nativeNumber, nativeString, undefinedSymbol } from 'bcl/lang/lib';
import { asName, getTokenFromExp, resolveConstantExpression } from './helper';
import { HSymbol, LiteralObjectSymbol, LiteralType, Resolution, SymbolKind } from 'types/scope';
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
      case N.ExpressionKind.UnaryExpression:
        return this.checkUnaryExpression(expression);
      case N.ExpressionKind.CastExpression:
        return this.checkCastExp(expression);
      case N.ExpressionKind.MultiplicativeExpression:
        return this.checkMulti(expression);
      case N.ExpressionKind.AdditiveExpression:
        return this.checkAdditive(expression);
      case N.ExpressionKind.AssignmentExpression:
      case N.ExpressionKind.ConditionalExpression:
      case N.ExpressionKind.TernaryExpression:
      case N.ExpressionKind.LogicalOrExpression:
      case N.ExpressionKind.LogicalAndExpression:
      case N.ExpressionKind.EqualityExpression:
      case N.ExpressionKind.RelationalExpression:
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

  checkUnaryExpression(exp: N.UnaryExpressionNode): ExpressionCheckResult {
    const { operator, right} = exp;
    const check = this.checkExpression(right);
    if (!check.valid) {
      return check;
    }

    switch (operator.text) {
      case '!':
        return { valid: true, result: nativeBool };
      case '+':
      case '-': {
        if (check.result.kind !== SymbolKind.Object) {
          res.addError({
            message: 'Invalid operation - not apply to a number or string',
            column: operator.column,
            line: operator.line,
          });
          return { valid: false, result: undefinedSymbol };
        }

        const isNumber = check.result.fqnd === nativeNumber.fqnd;
        const isString = check.result.fqnd === nativeString.fqnd;

        if(!isNumber && !isString) {
          res.addError({
            message: `Invalid: operation ${operator.text} not apply to a number or string`,
            column: operator.column,
            line: operator.line,
          });
          return { valid: false, result: undefinedSymbol };
        }
        return { valid: true, result: nativeNumber };
      }
      default:
        throw new Error('Invalid unary operator');
    }
  }

  checkCastExp(exp: N.CastExpressionNode): ExpressionCheckResult {
      const { as } = exp;
      const resolution =  res.resolve({symbolName: as.text});
      if (!resolution) {
        res.addError({
          message: `Unresolved identifier ${as.text}`,
          column: as.column,
          line: as.line,
        });
        return { valid: false, result: undefinedSymbol };
      }
      return { valid: true, result: resolution };
  }

  checkMulti(exp: N.MultiplicativeExpressionNode): ExpressionCheckResult {
      const { left, operator, right } = exp;
      const leftCheck = this.checkExpression(left).result;
      const rightCheck = this.checkExpression(right).result;

      if (leftCheck.kind !== SymbolKind.Object || rightCheck.kind !== SymbolKind.Object) {
        return { valid: false, result: undefinedSymbol };
      }

      const lisNumber = leftCheck.fqnd === nativeNumber.fqnd;
      const risNumber = rightCheck.fqnd === nativeNumber.fqnd;

      if (!lisNumber) {
        res.addError({
          message: 'Invalid operation: left operand is not a number',
          column: operator.column,
          line: operator.line,
        });
        return { valid: false, result: undefinedSymbol };
      }

      if (!risNumber) {
        res.addError({
          message: 'Invalid operation: right operand is not a number',
          column: operator.column,
          line: operator.line,
        });
        return { valid: false, result: undefinedSymbol };
      }

      return { valid: true, result: nativeNumber };
  }

  private checkAdditive(exp: N.AdditiveExpressionNode): ExpressionCheckResult {
    const { left, operator, right } = exp;
    const leftCheck = this.checkExpression(left).result;
    const rightCheck = this.checkExpression(right).result;

    if (leftCheck.kind !== SymbolKind.Object || rightCheck.kind !== SymbolKind.Object) {
      res.addError({
        message: 'Invalid operation: left operand is not a number or right operand is not a number',
        column: operator.column,
        line: operator.line,
      });
      return { valid: false, result: undefinedSymbol };
    }

    const lisNumber = leftCheck.fqnd === nativeNumber.fqnd;
    const risNumber = rightCheck.fqnd === nativeNumber.fqnd;

    if (lisNumber && risNumber) {
      return { valid: true, result: nativeNumber };
    }

    const lisString = leftCheck.fqnd === nativeString.fqnd;
    const risString = rightCheck.fqnd === nativeString.fqnd;

    if (risString && risString) {
      return { valid: true, result: nativeString };
    }

    if ((lisNumber || lisString) && (risNumber || risString)) {
      return { valid: true, result: nativeString };
    }

    res.addError({
      message: `Invalid operation: left operand is ${leftCheck.fqnd} and right operand is ${rightCheck.fqnd} `,
      column: operator.column,
      line: operator.line,
    });

    return { valid: false, result: undefinedSymbol };
  }
}
