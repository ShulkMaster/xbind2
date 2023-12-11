import { CompileError } from './logging';
import { TypeRefSymbol } from './symbol';
import { ReturnType } from './nodes/native';
import { ProgramContext } from 'parser/Haibt';
import { ProgramNode, UsePath } from './nodes';

export type ExpressionCheckResult = {
  valid: boolean;
  errors: CompileError[];
  result: TypeRefSymbol | ReturnType;
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