import { Token as AntlrToken } from 'antlr4';
import { Token } from 'types/token';

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