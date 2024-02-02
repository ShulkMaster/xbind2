import { UsePath } from './nodes';
import { Token } from './token';
import { ArgState } from 'bcl/lang/lib';
import { EvenSource, NativeTag, EventTarget } from './nodes/native';

export const enum SymbolKind {
  Style = 'style',
  Function = 'function',
  Type = 'type',
  Variable = 'variable',
  Object = 'object',
  Tag = 'tag',
}

export const enum VarModifier {
  val = 'val',
  Var = 'var',
  Prop = 'prop',
}

export type SymbolRef = {
  module: UsePath;
  symbolName: string;
};

export type SearchContext = {
  prefix?: string;
  symbolName: string;
};

export type BaseSymbol = {
  name: string;
  fqnd: string;
  declaration?: Token;
};

export type StyleSymbol = {
  kind: SymbolKind.Style;
  declaration: Token;
  classes: Map<string, Token>;
} & BaseSymbol;

export type ArgList = {
  name: string;
  declaration?: Token;
  typeRef: SymbolRef;
  variadic: boolean;
  state: ArgState;
};

export type FunctionSymbol = {
  kind: SymbolKind.Function;
  args: ArgList[];
  returnType: SymbolRef;
} & BaseSymbol;

export type Member = {
  name: string;
  declaration?: Token;
  optional: boolean;
  readonly: boolean;
  // if it has args then this is the return type
  typeRef: SymbolRef;
  args?: ArgList[];
};

export type TypeSymbol = {
  kind: SymbolKind.Type;
  members: { [member: string]: Member };
} & BaseSymbol;

export type VariableSymbol = {
  kind: SymbolKind.Variable;
  modifier: VarModifier;
  typeRef: SymbolRef;
} & BaseSymbol;

export type ObjectSymbol = {
  kind: SymbolKind.Object;
  origin: 'object' | 'component';
  propertySymbol?: SymbolRef;
  members: { [member: string]: Member };
} & BaseSymbol;


export type NativeProperty = {
  name: string;
  returnType: SymbolRef;
  required?: boolean;
}

export type TagEvent = {
  name: string;
  source: EvenSource;
  target: EventTarget;
  returnType: SymbolRef;
  args: ArgList[];
};

export type TagSymbol = {
  kind: SymbolKind.Tag;
  fqnd: string;
  name: NativeTag;
  children: boolean;
  declaration?: Token;
  events: {
    [key: string]: TagEvent;
  };
  properties: {
    [key: string]: NativeProperty;
  };
};


export const enum LiteralType {
  Object = 'objectLiteral',
  Array = 'arrayLiteral',
}

export type LiteralObjectSymbol = {
  kind: LiteralType.Object;
  declaration: Token;
  members: {
    [member: string]: {
      name: Token;
      // if it has args then this is the return type
      type: HSymbol | LiteralObjectSymbol;
    };
  };
};

export type HSymbol =
  StyleSymbol |
  FunctionSymbol |
  TypeSymbol |
  VariableSymbol |
  ObjectSymbol |
  TagSymbol;

export type Resolution = HSymbol | undefined;
