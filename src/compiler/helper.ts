import { ReturnType } from 'types/nodes/native';
import { ConstantExpressionNode, ExpressionKind, ExpressionResult } from 'types/nodes';
import { nativeBool, NativeDataType, nativeNames, nativeNumber, nativeString, undefinedSymbol } from 'bcl/lang/lib';
import {
  HSymbol,
  LiteralObjectSymbol,
  LiteralType,
  ObjectSymbol,
  Resolution,
  SymbolKind,
  TypeSymbol,
} from 'types/scope';
import { Token } from 'types/token';
import { res } from 'scope';

export type Assignor = Resolution | LiteralObjectSymbol;

export function resolveConstantExpression(exp: ConstantExpressionNode): HSymbol {
  switch (exp.primitiveType) {
    case ReturnType.Void:
      return {...undefinedSymbol, declaration: exp.token};
    case ReturnType.Number:
      return {...nativeNumber, declaration: exp.token};
    case ReturnType.String:
      return {...nativeString, declaration: exp.token};
    case ReturnType.Boolean:
      return {...nativeBool, declaration: exp.token};
    case ReturnType.Undefined:
    default:
      return {...undefinedSymbol, declaration: exp.token};
  }
}

export function asName(token: string | Token): string {
  if (typeof token === 'string') {
    return token;
  }
  return token.text;
}

export function isLiteralType(type: HSymbol | LiteralObjectSymbol): type is LiteralObjectSymbol {
  return type.kind === LiteralType.Object;
}

export function getTypeName(type: HSymbol | LiteralObjectSymbol, pad = 0): string {
  if(!isLiteralType(type)) {
    return type.name;
  }

  const members = Object.entries(type.members);
  const limit = Math.min(8, members.length);
  const ss: string[] = [];
  for (let x = 0; x < limit; x++) {
    const [name, member] = members[x];
    const memberPad = ' '.repeat(pad + 2);
    if (member.type.kind === LiteralType.Object) {
      ss.push(`${memberPad}${name}: ${getTypeName(member.type, pad + 2)}\n`);
      continue;
    }
    ss.push(`${memberPad}${name}: ${member.type.name},\n`);
  }
  if(limit < members.length) {
    ss.push(`${' '.repeat(pad + 2)}... and others ${members.length - limit}\n`);
  }
  const closingPad = ' '.repeat(pad);
  return `{\n${ss.join('')}${closingPad}}`;
}

export function isAssignableTo(expected: Resolution, actual: Assignor, report = true): boolean {
  if (!expected || !actual) {
    throw new Error(`Missing symbols actual[${actual}] expected [${expected?.name}]`);
  }

  if(isLiteralType(actual)) {
    return isLiteralObjectAssignableTo(expected, actual);
  }

  if (expected.fqnd === actual.fqnd) {
    return true;
  }

  if (expected.kind !== actual.kind) {
    if (report) {
      res.addError({
        message: `${actual.kind} ${actual.fqnd} is not assignable to ${expected.fqnd}`,
        line: actual.declaration?.line ?? 0,
        column: actual.declaration?.column ?? 0,
      });
    }
    return false;
  }

  switch (expected.kind) {
    case SymbolKind.Object: {
      return isObjectAssignable(expected, actual as ObjectSymbol, report);
    }
    default:
      return false;
  }
}

function isObjectAssignable(exp: ObjectSymbol, actual: ObjectSymbol, report = true): boolean {
  let valid = true;
  const expName = exp.name;
  const actualName = actual.name;
  if (nativeNames.includes(expName as NativeDataType)) {
    if (expName !== actualName) {
      if (report) {
        res.addError({
          message: `${actualName} is not assignable to ${expName}`,
          line: actual.declaration?.line ?? 0,
          column: actual.declaration?.column ?? 0,
        });
      }
      return false;
    }
    return true;
  }

  for (const member of Object.values(exp.members)) {
    const actualMember = actual.members[member.name];
    const line = actual.declaration?.line ?? 0;
    const column = actual.declaration?.column ?? 0;
    let message = '';

    if (!actualMember) {
      message = `Property ${member.name} is missing in type ${actual.name}`;
      res.addError({message, line, column});
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
    case ExpressionKind.PostfixExpression: {
      if (exp.primary) {
        return getTokenFromExp(exp.primary);
      }
      let token = exp.indexed?.open;
      if (token) return token;
      token = exp.member;
      if (token) return token;
      token = exp.operator;
      if (token) return token;
      token = exp.call?.open;
      return token ?? {text: '', line: 0, column: 0} as Token;
    }
    case ExpressionKind.PrimaryExpression: {
      const id = exp.identifier;
      if (id) return id;
      const group = exp.groupExpression?.expression;
      if (group) return getTokenFromExp(group);
      throw new Error('Invalid, Primary expression has no token');
    }
    case ExpressionKind.ArrayLiteralExpression:
    case ExpressionKind.ObjectLiteralExpression:
      return exp.open;
    case ExpressionKind.constantExpression:
      return exp.token;
  }
}

export function isLiteralObjectAssignableTo(expected: Resolution, actual: LiteralObjectSymbol): boolean {
  const line = actual.declaration.line;
  const column = actual.declaration.column;
  let message = '';
  if (!expected) {
    message = 'Missing expected type declaration';
    res.addError({message, line, column});
    return false;
  }

  switch (expected.kind) {
    case SymbolKind.Object: {
      return literalObjectAssignable(expected, actual);
    }
    case SymbolKind.Variable: {
      const ref = res.resolve(expected.typeRef);
      return isLiteralObjectAssignableTo(ref, actual);
    }
    case SymbolKind.Type:
      return literalObjectAssignable(expected, actual);
    case SymbolKind.Function:
      message = 'Literal objects cannot be assigned to functions';
      break;
    case SymbolKind.Style:
      message = 'Literal objects cannot be assigned to styles';
      break;
  }
  res.addError({message, line, column});
  return false;
}

function literalObjectAssignable(expected: ObjectSymbol | TypeSymbol, actual: LiteralObjectSymbol): boolean {
  const line = actual.declaration.line;
  const column = actual.declaration.column;

  let valid = true;
  // members in the literal object that might not exist the expected type
  for (const [name, actualMember] of Object.entries(actual.members)) {
    const expectedMember = expected.members[name];
    if (!expectedMember) {
      res.addError({
        message: `Object should only declare members of type ${expected.name}, and ${name} is not a declared member`,
        line,
        column,
      });
      valid = false;
      continue;
    }

    const expectedType = res.resolve(expectedMember.typeRef);
    const actualType = actualMember.type;
    if (isLiteralType(actualType)) {
      valid = isLiteralObjectAssignableTo(expectedType, actualType) && valid;
      continue;
    }
    valid = isAssignableTo(expectedType, actualType) && valid;
  }

  // members in the expected type that might not exist in the literal object
  for (const [name, expectedMember] of Object.entries(expected.members)) {
    const actualMember = actual.members[name];
    if (!actualMember) {
      res.addError({
        message: `Object it missing member ${name} of type ${expectedMember.name}`,
        line,
        column,
      });
      valid = false;
    }
  }

  return valid;
}
