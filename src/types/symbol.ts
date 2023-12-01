import { Token } from './token';
import { NativeTag, ReturnType } from './nodes/native';

export const enum NativeSymbolKind {
  function = 'function',
  property = 'property',
  tag = 'tag',
}

export type TypeRefSymbol = {
  type: 'typeRef';
  name: Token | string;
};

export type TagRefSymbol = {
  type: 'tagRef';
  name: Token | string;
};

export type NativeFunctionSymbol = {
  kind: NativeSymbolKind.function;
  name: string;
  returnType: TypeRefSymbol | ReturnType;
  varArgs: boolean;
  args: { name: string; type: TypeRefSymbol; array: boolean }[];
};

export type NativePropertySymbol = {
  kind: NativeSymbolKind.property;
  name: string;
  type: TypeRefSymbol;
  readonly: boolean;
};

export type NativeTagSymbol = {
  kind: NativeSymbolKind.tag;
  name: NativeTag;
  children: boolean;
  events: {
    [key: string]: {
      type: string;
      returnType: TypeRefSymbol;
      args: { name: string; type: TypeRefSymbol }[];
    };
  };
  attributes: {
    [key: string]: {
      type: TypeRefSymbol;
    };
  };
  methods: {
    [key: string]: {
      returnType: TypeRefSymbol;
      args: { name: string; type: TypeRefSymbol; array: boolean }[];
    };
  };
};

export type NativeSymbol = NativeFunctionSymbol | NativePropertySymbol | NativeTagSymbol;

type BaseSymbol = {
  name: Token | string;
  filePath: string;
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

export type HSymbols = TypeSymbol | ComponentSymbol | NativeSymbol;