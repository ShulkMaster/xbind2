import { Token } from 'types/token';

export type MemberNode = {
  name: Token;
  optional: boolean;
  typeNotation: Token;
}

export type TypeDeclarationNode = {
  typeName: Token | string;
  members: MemberNode[];
};