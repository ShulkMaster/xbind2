import { Token } from './token';

type BaseSymbol = {
  name: Token | string;
  filePath: string;
};

export type TypeRefSymbol = {
  type: 'typeRef';
  name: Token | string;
};

export type TypeMember = { [key: string]: TypeRefSymbol };

export type TypeSymbol = {
  type: 'type';
  members: TypeMember;
} & BaseSymbol;


export type ComponentSymbol = {
  type: 'component';
  propType: TypeRefSymbol | undefined;
} & BaseSymbol;

export type HSymbols = TypeSymbol | ComponentSymbol;