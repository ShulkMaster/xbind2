import * as E from 'types/nodes';

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
      case E.ExpressionKind.EqualityExpression:
      case E.ExpressionKind.LogicalAndExpression:
      case E.ExpressionKind.LogicalOrExpression:
      case E.ExpressionKind.TernaryExpression:
      case E.ExpressionKind.ConditionalExpression:
      case E.ExpressionKind.AssignmentExpression:
      default:
        throw new Error('Invalid expression');
    }
  }

  public static writeConstantExpression(exp: E.ConstantExpressionNode): string {
    if (exp.value.text.startsWith('#')) {
      return `'${exp.value.text}'`;
    }
    return exp.value.text;
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

    throw new Error('Primary expression cannot reach const expression');
  }

  public static postfixExpression(exp: E.PostfixExpressionNode): string {
    const { primary, operator, call, indexed, follow } = exp;

    const followExpression = follow ? this.writeExpression(follow) : '';
    const primaryExpression = this.writeExpression(primary);

    if (operator) {
      return `${primaryExpression} ${operator.text} ${followExpression}`;
    }

    if (call) {
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
}