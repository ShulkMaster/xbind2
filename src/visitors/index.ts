import { CharStream, CommonTokenStream } from 'antlr4';
import Lexer from 'parser/HaibtLexer';
import Parser, { ProgramContext } from 'parser/Haibt';
import { ProgramVisitor } from './ProgramVisitor';

export function parseStream(stream: CharStream): ProgramContext {
  const lexer = new Lexer(stream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new Parser(tokenStream);
  return parser.program();
}

export function createVisitor(): ProgramVisitor {
  return new ProgramVisitor();
}