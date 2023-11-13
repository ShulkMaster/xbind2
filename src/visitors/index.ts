import { CharStream, CommonTokenStream } from 'antlr4';
import Lexer from 'parser/HaibtLexer';
import Parser, { ProgramContext } from 'parser/Haibt';
import { ProgramVisitor } from './ProgramVisitor';
import { ComponentVisitor } from './ComponentVisitor';

export function parseStream(stream: CharStream): ProgramContext {
  const lexer = new Lexer(stream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new Parser(tokenStream);
  return parser.program();
}

export function createVisitor(): ProgramVisitor {
  const componentVisitor = new ComponentVisitor();
  return new ProgramVisitor(componentVisitor);
}