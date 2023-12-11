import { CharStream, CommonTokenStream } from 'antlr4';
import Lexer from 'parser/HaibtLexer';
import Parser from 'parser/Haibt';

export { ProgramVisitor } from './ProgramVisitor';

export function parseStream(stream: CharStream): Parser {
  const lexer = new Lexer(stream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new Parser(tokenStream);
  parser.removeErrorListeners();
  return parser;
}