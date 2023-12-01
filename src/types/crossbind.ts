import { CompileError } from './logging';
import { TypeRefSymbol } from './symbol';
import { ReturnType } from './nodes/native';

export type ExpressionCheckResult = {
  valid: boolean;
  errors: CompileError[];
  result: TypeRefSymbol | ReturnType;
};