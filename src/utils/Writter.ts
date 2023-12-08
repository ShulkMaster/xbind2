import * as E from 'types/nodes';
import { ReturnType } from 'types/nodes/native';
import { Logger } from './logger';

export class Writer {

  public static writeExpression(expression: E.ExpressionResult): string {
    switch (expression.kind) {
      case E.ExpressionKind.constantExpression:
        return this.writeConstantExpression(expression);
      case E.ExpressionKind.PrimaryExpression:
        return this.writePrimaryExpression(expression);
      case E.ExpressionKind.PostfixExpression:
        return this.postfixExpression(expression);
      case E.ExpressionKind.UnaryExpression:
        return this.unaryExpression(expression);
      case E.ExpressionKind.CastExpression:
        return this.castExpression(expression);
      case E.ExpressionKind.MultiplicativeExpression:
        return this.multiplicativeExpression(expression);
      case E.ExpressionKind.AdditiveExpression:
        return this.additiveExpression(expression);
      case E.ExpressionKind.RelationalExpression:
        return this.relationalExpression(expression);
      case E.ExpressionKind.EqualityExpression:
        return this.equalityExpression(expression);
      case E.ExpressionKind.LogicalAndExpression:
        return this.logicalAndExpression(expression);
      case E.ExpressionKind.LogicalOrExpression:
        return this.logicalOrExpression(expression);
      case E.ExpressionKind.TernaryExpression:
        return this.ternaryExpression(expression);
      case E.ExpressionKind.ConditionalExpression:
      case E.ExpressionKind.AssignmentExpression:
      default:
        throw new Error('Unsupported expression');
    }
  }

  public static writeConstantExpression(exp: E.ConstantExpressionNode): string {
    if (exp.primitiveType === ReturnType.Color) {
      return `'${exp.token.text}'`;
    }

    if(exp.primitiveType === ReturnType.String) {
      const normalized = exp.token.text.slice(1, -1);
      if(normalized.includes("'")) {
        return `"${normalized}"`;
      }

      return `'${normalized}'`;
    }

    return exp.token.text;
  }

  public static writePrimaryExpression(exp: E.PrimaryExpressionNode): string {
    const group = exp.groupExpression;

    if (group) {
      return `(${this.writeExpression(group.expression)})`;
    }

    const identifier = exp.identifier;
    if (identifier) {
      return identifier.text;
    }

    Logger.error(exp);
    throw new Error('unknown primary expression');
  }

  public static postfixExpression(exp: E.PostfixExpressionNode): string {
    const { primary, operator, call, indexed, follow } = exp;

    const followExpression = follow ? this.writeExpression(follow) : '';
    const primaryExpression = this.writeExpression(primary);

    if (operator) {
      return `${primaryExpression} ${operator.text} ${followExpression}`;
    }

    if (call) {
      // todo support arguments
      //const args = call.arguments.map(arg => this.writeExpression(arg));
      return `${primaryExpression}()${followExpression}`;
    }

    if (indexed) {
      const index = this.writeExpression(indexed.index);
      return `${primaryExpression}[${index}]${followExpression}`;
    }

    return `${primaryExpression}${followExpression}`;
  }

  public static unaryExpression(exp: E.UnaryExpressionNode): string {
    const { operator, right } = exp;
    const unaryOperator = operator.text;
    const unaryExpression = this.writeExpression(right);
    return `${unaryOperator}${unaryExpression}`;
  }

  public static castExpression(exp: E.CastExpressionNode): string {
    const typeElement = exp.as;
    const expression = this.writeExpression(exp.left);
    if (typeElement.primitive) {
      return `${expression} as ${typeElement.name}`;
    }

    return `${expression} as ${typeElement.typeName.text}`;
  }

  public static multiplicativeExpression(exp: E.MultiplicativeExpressionNode): string {
    const { left, operator, right } = exp;
    const leftExpression = this.writeExpression(left);
    const rightExpression = this.writeExpression(right);
    const operatorText = operator.text;
    return `${leftExpression} ${operatorText} ${rightExpression}`;
  }

  public static additiveExpression(exp: E.AdditiveExpressionNode): string {
    const { left, operator, right } = exp;
    const leftExpression = this.writeExpression(left);
    const rightExpression = this.writeExpression(right);
    const operatorText = operator.text;
    return `${leftExpression} ${operatorText} ${rightExpression}`;
  }

  public static relationalExpression(exp: E.RelationalExpressionNode): string {
    const { left, operator, right } = exp;
    const leftExpression = this.writeExpression(left);
    const rightExpression = this.writeExpression(right);
    const operatorText = operator.text;
    return `${leftExpression} ${operatorText} ${rightExpression}`;
  }

  public static equalityExpression(exp: E.EqualityExpressionNode): string {
    const { left, operator, right } = exp;
    const leftExpression = this.writeExpression(left);
    const rightExpression = this.writeExpression(right);
    const operatorText = operator.text;
    return `${leftExpression} ${operatorText} ${rightExpression}`;
  }

  public static logicalAndExpression(exp: E.LogicalAndExpressionNode): string {
    const { left, right } = exp;
    const leftExpression = this.writeExpression(left);
    const rightExpression = this.writeExpression(right);
    return `${leftExpression} && ${rightExpression}`;
  }

  public static logicalOrExpression(exp: E.LogicalOrExpressionNode): string {
    const { left, right } = exp;
    const leftExpression = this.writeExpression(left);
    const rightExpression = this.writeExpression(right);
    return `${leftExpression} || ${rightExpression}`;
  }

  public static ternaryExpression(exp: E.TernaryExpressionNode): string {
    const { trueBranch, falseBranch } = exp;
    // const conditionExpression = this.writeExpression(condition);
    const trueExp = this.writeExpression(trueBranch);
    const falseExp = this.writeExpression(falseBranch);
    // return `${conditionExpression} ? ${trueExp} : ${falseExp}`;
    throw new Error('Unsupported expression');
  }
}