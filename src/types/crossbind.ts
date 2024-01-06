import { SimpleError } from './logging';
import { ProgramContext } from 'parser/Haibt';
import { ProgramNode } from './nodes';
import { HSymbol, LiteralObjectSymbol } from './scope';

export type ExpressionCheckResult = {
  valid: boolean;
  errors: SimpleError[];
  result: HSymbol | LiteralObjectSymbol;
};

export type ParseUnit = {
  program: ProgramContext;
  source: string;
  errors: number;
  fileName: string;
}

export type VisitedUnit = {
  program: ProgramNode;
  source: string;
  fileName: string;
};