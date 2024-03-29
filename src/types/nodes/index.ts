import { UsePath } from './uses';
import { TypeDeclarationNode } from './types';
import { ComponentNode } from './component';
import { StyleNode } from './styles';

export * from './component';
export * from './template';
export * from './types';
export * from './expression';
export * from './styles';
export * from './uses';

export type ProgramNode = {
  sourceFile: string;
  sourceCode: string;
  scope: UsePath;
  uses: UsePath[];
  types: TypeDeclarationNode[];
  components: ComponentNode[];
  styles: StyleNode[];
};

export type ProgramResult = ProgramNode | void | null;

export type OrArray<T> = T | T[];
