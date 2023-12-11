import { Token as AntlrToken } from 'antlr4';
import { Token } from 'types/token';
import { CompileError, LogLevel } from 'types/logging';
import { TypeNode } from 'types/nodes';
import { ReturnType } from 'types/nodes/native';
import { TypeRefSymbol } from '../types/symbol';
import { Logger } from './logger';

export function symbolToToken(symbol: AntlrToken): Token {
  return {
    channel: symbol.channel,
    column: symbol.column,
    end: symbol.stop,
    line: symbol.line,
    start: symbol.start,
    text: symbol.text,
    tokenIndex: symbol.tokenIndex,
    type: symbol.type,
  };
}

export function asLogLevel(level: string): LogLevel {
  switch (level) {
    case 'error':
      return LogLevel.ERROR;
    case 'warn':
      return LogLevel.WARN;
    case 'info':
      return LogLevel.INFO;
    case 'debug':
      return LogLevel.DEBUG;
    default:
      return LogLevel.ERROR;
  }
}

export function asReturnType(type: TypeNode): TypeRefSymbol | ReturnType {
  if(type.primitive) {
    switch (type.name) {
      case 'string':
        return ReturnType.String;
      case 'number':
        return ReturnType.Number;
      case 'boolean':
        return ReturnType.Boolean;
      case 'void':
        return ReturnType.Void;
      case 'undefined':
        return ReturnType.Undefined;
      case 'color':
        return ReturnType.Color;
      default:
        throw new Error(`Unknown primitive type ${type.name}`);
    }
  }

  return {
    type: 'typeRef',
    name: type.typeName,
  };
}
