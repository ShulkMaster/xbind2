import { Token as AntlrToken } from 'antlr4';
import { Token } from 'types/token';
import { LogLevel } from 'types/logging';

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
    case 'performance':
    case 'perf':
      return LogLevel.PERFORMANCE;
    default:
      return LogLevel.ERROR;
  }
}
