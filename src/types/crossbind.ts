import { SimpleError } from './logging';
import { ProgramContext } from 'parser/Haibt';
import { ProgramNode, UsePath } from './nodes';
import { HSymbol } from './scope';

export type ExpressionCheckResult = {
  valid: boolean;
  errors: SimpleError[];
  result: HSymbol;
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

export type StyleSymbol = {
  type: 'style';
  name: string;
  classNames: Set<string>;
  scope: UsePath;
}