import { Token } from 'types/token';
import { ExpressionResult } from 'types/nodes';
import * as S from 'types/scope';
import { HSymbol, Resolution, SymbolKind } from 'types/scope';
import { res } from 'scope';
import { ExpressionCheck } from './ExpressionCheck';
import { getTypeName, isAssignableTo } from './helper';
import { ArgState } from 'bcl/lang/lib';

function checkCompMember(member: Token, symbol: S.ObjectSymbol): Resolution {
  const symbolMember = symbol.members[member.text];
  if (!symbolMember) {
    res.addError({
      message: `${symbol.fqnd} does not have a member called ${member.text}`,
      column: member.column,
      line: member.line,
    });
    return undefined;
  }

  const { name, typeRef, declaration, args} = symbolMember;
  if (args) {
    return {
      kind: SymbolKind.Function,
      name,
      args,
      declaration,
      returnType: typeRef,
      fqnd: `${symbol.fqnd}.${name}`,
    };
  }

  return res.resolve(typeRef);
}

export function expCheckMember(member: Token, symbol: HSymbol): Resolution {
  switch (symbol.kind) {
    case SymbolKind.Object:
      return checkCompMember(member, symbol);
    case SymbolKind.Variable: {
      const refSymbol = res.resolve(symbol.typeRef);
      if (!refSymbol) {
        res.addError({
          message: `Unable to resolve variable ${symbol.name} type`,
          column: member.column,
          line: member.line,
        });
        return undefined;
      }
      return expCheckMember(member, refSymbol);
    }
    case SymbolKind.Style:
      res.addError({
        message: 'CSS styles do not have members',
        column: member.column,
        line: member.line,
      });
      return undefined;
    case SymbolKind.Function:
      res.addError({
        message: `${symbol.name}${member.text} its a function and has no members`,
        column: member.column,
        line: member.line,
      });
      return undefined;
    case SymbolKind.Type:
      res.addError({
        message: `${symbol.name} its a type and has no members`,
        column: member.column,
        line: member.line,
      });
      return undefined;
    default:
      throw new Error(`Unknown symbol kind for ${symbol}`);
  }
}

export function checkCallArgs(args: ExpressionResult[], symbol: S.FunctionSymbol): Resolution {
  const checker = new ExpressionCheck();
  for (let i = 0; i < symbol.args.length; i++) {
    const expArg = symbol.args[i];
    const arg = args[i];
    if (!arg && expArg.state === ArgState.Required) {
      res.addError({
        message: `${symbol.name} has missing argument ${expArg.name} of type ${expArg.typeRef.symbolName}`,
        column: symbol.declaration?.column ?? 0,
        line: symbol.declaration?.line ?? 0,
      });
      continue;
    }
    const resolveExp = res.resolve(expArg.typeRef);
    const {valid, result} = checker.checkExpression(arg);
    if (!valid) {
      continue;
    }

    const line = result.declaration?.line ?? 0;
    const column = result.declaration?.column ?? 0;
    if (expArg.variadic) {
      isVariadicAssignable(resolveExp, args);
      return res.resolve(symbol.returnType);
    }

    const isAssignable = isAssignableTo(resolveExp, result, false);
    if (!isAssignable) {
      const typeName = getTypeName(result);
      res.addError({
        message: `Argument ${expArg.name} of type ${typeName} is not assignable to ${expArg.typeRef.symbolName}`,
        column,
        line,
      });
    }
  }
  return res.resolve(symbol.returnType);
}

function isVariadicAssignable(expected: Resolution, args: ExpressionResult[]): void {
  const checker = new ExpressionCheck();
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    // todo allow array of variadic to be allowed
    const {valid, result} = checker.checkExpression(arg);
    if (!valid) {
      continue;
    }

    isAssignableTo(expected, result);
  }
}

export function expCheckCall(start: Token, args: ExpressionResult[], called: HSymbol): Resolution {
  const line = called?.declaration?.line ?? start.line;
  const column = called?.declaration?.column ?? start.column;
  let message = '';

  switch (called.kind) {
    case SymbolKind.Object:
    case SymbolKind.Style:
      message = `${called.name} does not have a call signature, its object`;
      res.addError({message, line, column});
      return undefined;
    case SymbolKind.Function:
      return checkCallArgs(args, called);
    case SymbolKind.Type:
      message = `Type ${called.name} its a type and cannot be used as a function`;
      res.addError({message, line, column});
      return undefined;
    case SymbolKind.Variable: {
      const refSymbol = res.resolve(called.typeRef);
      if (!refSymbol) {
        message = `Unable to resolve variable ${called.name} type`;
        res.addError({message, line, column});
        return undefined;
      }
      return expCheckCall(start, args, refSymbol);
    }
    default:
      throw new Error(`Unknown symbol kind for ${called}`);
  }
}
