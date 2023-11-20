import { UsePath } from './uses';
import { TypeDeclarationNode } from './types';
import { ComponentNode } from './component';

export * from './component';
export * from './template';
export * from './types';

export type ProgramNode = {
  sourceFile: string;
  sourceCode: string;
  namespace: UsePath;
  uses: UsePath[];
  types: TypeDeclarationNode[];
  components: ComponentNode[];
};

export type ProgramResult = ProgramNode | void;