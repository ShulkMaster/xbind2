import { ExpressionCheckResult } from 'types/crossbind';
import * as N from 'types/nodes';
import { Resolver } from 'scope/Resolver';
import { ReturnType } from 'types/nodes/native';

export class ExpressionCheck {
  private readonly p: N.ProgramNode;

  constructor(p: N.ProgramNode) {
    this.p = p;
  }

  checkExpression(expression: N.ExpressionResult): ExpressionCheckResult {
    switch (expression.kind) {
      case N.ExpressionKind.constantExpression:
        return this.checkConstantExpression(expression);
      case N.ExpressionKind.PrimaryExpression:
        return this.checkPrimaryExpression(expression);
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
      case N.ExpressionKind.PostfixExpression:
        throw new Error('Not implemented');
      default:
        throw new Error('Invalid expression');
    }
  }

  checkConstantExpression(exp: N.ConstantExpressionNode): ExpressionCheckResult {
    return {
      valid: true,
      errors: [],
      result: exp.primitiveType,
    };
  }

  checkPrimaryExpression(exp: N.PrimaryExpressionNode): ExpressionCheckResult {
    const { identifier, groupExpression } = exp;

    if (groupExpression) {
      return this.checkExpression(groupExpression.expression);
    }

    if (identifier) {
      const resolution = Resolver.resolveIdentifier(identifier.text);

      if(!resolution) {
        return {
          valid: false,
          errors: [
            {
              message: `Unresolved identifier ${identifier.text}`,
              text: identifier.text,
              column: identifier.column,
              line: identifier.line,
              file: this.p.sourceFile,
            }
          ],
          result: '' as ReturnType,
        };
      }

      return {
        valid: true,
        errors: [],
        result: resolution,
      };
    }

    throw new Error('Invalid primary expression');
  }
}