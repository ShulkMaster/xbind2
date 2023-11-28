import { Token } from 'types/token';

export type PrimitiveTypeNode = {
  primitive: true;
  name:  'color' | 'string' | 'number' | 'boolean' | 'undefined' | 'void';
  token: Token;
}

export type TypeRefNode = {
  primitive: false;
  typeName: Token;
}

export type TypeNode = PrimitiveTypeNode | TypeRefNode;

export type MemberNode = {
  name: Token;
  optional: boolean;
  type: TypeNode;
}

export type TypeDeclarationNode = {
  typeName: Token | string;
  members: MemberNode[];
};