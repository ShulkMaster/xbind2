import { ExpressionCheckResult } from 'types/crossbind';
import * as N from 'types/nodes';
import { UsePath } from 'types/nodes';
import { Resolver } from 'scope/Resolver';
import { ReturnType } from 'types/nodes/native';

export class ExpressionCheck {
  private readonly fileName: string;
  private resolver: Resolver;
  private scopes: UsePath = [];

  constructor(program: N.ProgramNode, resolver: Resolver) {
    this.fileName = program.sourceFile;
    this.resolver = resolver;
    this.scopes = program.scope;
  }

  checkExpression(expression: N.ExpressionResult): ExpressionCheckResult {
    switch (expression.kind) {
      case N.ExpressionKind.constantExpression:
        return this.checkConstantExpression(expression);
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
      const resolution = this.resolver.resolve(this.scopes, identifier.text);

      if (!resolution) {
        return {
          valid: false,
          errors: [
            {
              message: `Unresolved identifier ${identifier.text}`,
              text: identifier.text,
              column: identifier.column,
              line: identifier.line,
              file: this.fileName,
            }
          ],
          result: ReturnType.Void,
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

  checkPostfixExpression(exp: N.PostfixExpressionNode): ExpressionCheckResult {
    const { follow, primary, operator } = exp;
    const result = this.checkExpression(primary);

    if (follow) {
      return { valid: true, errors: [], result: ReturnType.Void };
    }

    if (!result.valid) {
      return result;
    }

    return result;
  }
}