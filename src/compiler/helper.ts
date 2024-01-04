import { ReturnType } from 'types/nodes/native';
import { ConstantExpressionNode, ExpressionKind, ExpressionResult } from 'types/nodes';
import { nativeNumber, undefinedSymbol, nativeString, nativeBool } from 'bcl/lang/lib';
import { HSymbol, ObjectSymbol, Resolution, SymbolKind } from 'types/scope';
import { Token } from 'types/token';
import { res } from 'scope';

export function resolveConstantExpression(exp: ConstantExpressionNode): HSymbol {
  switch (exp.primitiveType) {
    case ReturnType.Void:
      return undefinedSymbol;
    case ReturnType.Number:
      return nativeNumber;
    case ReturnType.String:
      return nativeString;
    case ReturnType.Boolean:
      return nativeBool;
    case ReturnType.Undefined:
    default:
      return undefinedSymbol;
  }
}

export function isAssignableTo(expected: Resolution, actual: Resolution): boolean {
  if (!expected || !actual) {
    throw new Error(`Missing symbol ${actual?.name} || ${expected?.name}`);
  }

  if (expected === actual) {
    return true;
  }

  if (expected.kind !== actual.kind) {
    res.addError({
      message: `Type ${actual.fqnd} is not assignable to ${expected.fqnd}`,
      line: actual.declaration?.line ?? 0,
      column: actual.declaration?.column ?? 0,
    });
    return false;
  }

  switch (expected.kind) {
    case SymbolKind.Object: {
      return isObjectAssignable(expected, actual as ObjectSymbol);
    }
    default:
      return false;
  }
}

function isObjectAssignable(exp: ObjectSymbol, actual: ObjectSymbol): boolean {
  let valid = true;
  for (const member of Object.values(exp.members)) {
    const actualMember = actual.members[member.name];
    const line = member.declaration?.line ?? 0;
    const column = member.declaration?.column ?? 0;
    let message  = '';

    if (!actualMember) {
      message = `Property ${member.name} is missing in type ${actual.name}`;
      res.addError({ message, line, column });
      valid = false;
      continue;
    }

    if (!member.readonly && actualMember.readonly) {
      message = `Property ${member.name} is readonly in ${actual.name}`;
      res.addError({message, line, column});
      valid = false;
    }

    if (!member.optional && actualMember.optional) {
      message = `Property ${member.name} is optional in ${actual.name}, but required in ${exp.name}`;
      res.addError({message, line: 0, column: 0});
      valid = false;
    }

    const actualType = res.resolve(actualMember.typeRef);
    const expectedType = res.resolve(member.typeRef);
    const innerAccepted = isAssignableTo(expectedType, actualType);
    valid = valid && innerAccepted;
  }
  return valid;
}

export function getTokenFromExp(exp: ExpressionResult): Token {
  switch (exp.kind) {
    case ExpressionKind.AssignmentExpression:
      return getTokenFromExp(exp.assignee);
    case ExpressionKind.ConditionalExpression:
      return getTokenFromExp(exp.condition);
    case ExpressionKind.TernaryExpression:
      return getTokenFromExp(exp.trueBranch);
    case ExpressionKind.LogicalOrExpression:
    case ExpressionKind.LogicalAndExpression:
      return getTokenFromExp(exp.left);
    case ExpressionKind.EqualityExpression:
    case ExpressionKind.RelationalExpression:
    case ExpressionKind.AdditiveExpression:
    case ExpressionKind.MultiplicativeExpression:
      return exp.operator;
    case ExpressionKind.CastExpression:
      return exp.as;
    case ExpressionKind.UnaryExpression:
      return exp.operator;
    case ExpressionKind.PostfixExpression:
      return getTokenFromExp(exp.primary);
    case ExpressionKind.PrimaryExpression: {
      const id = exp.identifier;
      if(id) return id;
      const group = exp.groupExpression?.expression;
      if(group) return getTokenFromExp(group);
      throw new Error('Invalid, Primary expression has no token');
    }
    case ExpressionKind.constantExpression:
      return exp.token;
  }
}