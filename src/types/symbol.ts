import { UsePath } from './nodes';

export type SymbolOps = {
  readonly: boolean;
  public: boolean;
};

export type SymbolRef = {
  fqnd: string;
  name: string;
  scope: UsePath;
  ref: string;
} & SymbolOps;

export type Callable = {
  returnType: SymbolRef;
  args: {
    [key: string]: {
      name: string;
      type: SymbolRef;
      variadic: boolean;
      array: boolean;
    };
  };
};

export type HSymbol = {
  fqnd: string;
  name: string;
  scope: UsePath;
  callable: Callable | undefined;
  members: { [key: string]: SymbolRef };
  methods: { [key: string]: SymbolRef };
  attributes: {
    [key: string]: SymbolRef;
  } | undefined;
};
