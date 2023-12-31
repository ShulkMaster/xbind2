import { Callable, HSymbol, SymbolOps, SymbolRef } from 'types/symbol';

export const enum NativeDataType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Array = 'array',
  Undefined = 'undefined',
}

export const enum ArgState {
  Required = 'required',
  Optional = 'optional',
  Default = 'default',
}

const undefinedSymbol: HSymbol = {
  fqnd: NativeDataType.Undefined,
  name: NativeDataType.Undefined,
  scope: [],
  callable: undefined,
  attributes: undefined,
  members: {},
  methods: {},
};

export const nativeBool: HSymbol = {
  fqnd: 'boolean',
  name: 'boolean',
  scope: [],
  attributes: undefined,
  callable: undefined,
  members: {},
  methods: {},
};

export const nativeString: HSymbol = {
  fqnd: NativeDataType.String,
  name: NativeDataType.String,
  scope: [],
  attributes: undefined,
  callable: undefined,
  members: {},
  methods: {},
};

export const nativeNumber: HSymbol = {
  fqnd: NativeDataType.Number,
  name: NativeDataType.Number,
  scope: [],
  attributes: undefined,
  callable: undefined,
  members: {},
  methods: {},
};

export const nativeArray: HSymbol = {
  fqnd: NativeDataType.Array,
  name: NativeDataType.Array,
  scope: [],
  attributes: undefined,
  callable: undefined,
  members: {},
  methods: {},
};

export const toStringSymbol: HSymbol = {
  name: 'toString',
  fqnd: 'toString',
  attributes: undefined,
  members: {},
  scope: [],
  methods: {},
  callable: {
    returnType: {
      name: NativeDataType.String,
      fqnd: NativeDataType.String,
      scope: [],
      ref: NativeDataType.String,
      public: true,
      readonly: true,
    },
    args: {},
  },
};

export function addMember(s: HSymbol, name: string, sr: Partial<SymbolRef>): void {
  s.members[name] = {
    name,
    ref: sr.ref ?? NativeDataType.Undefined,
    fqnd: sr.fqnd ?? `${s.fqnd}.${name}`,
    readonly: sr.readonly ?? false,
    scope: [...s.scope, s.name],
    public: sr.public ?? true,
  };
}

export function toSymbolRef(s: HSymbol, ops: Partial<SymbolOps> = {}): SymbolRef {
  return {
    name: s.name,
    fqnd: s.fqnd,
    ref: s.fqnd,
    scope: s.scope,
    readonly: ops.readonly ?? false,
    public: ops.public ?? true,
  };
}

type AddMethodArgs = {
  name: string;
  type: HSymbol;
  variadic?: boolean;
  array?: boolean;
  state: ArgState;
};

export function createMethodFor(s: HSymbol, name: string, args: AddMethodArgs[], ret?: HSymbol): HSymbol {
  s.methods[name] = {
    name,
    fqnd: `${s.fqnd}.${name}`,
    scope: [...s.scope, s.name],
    ref: `${s.fqnd}.${name}`,
    public: true,
    readonly: true,
  };

  const retRefSymbol = toSymbolRef(ret ?? undefinedSymbol, { readonly: true });
  const method: Callable = {
    returnType: retRefSymbol,
    args: {},
  };

  for (const arg of args) {
    const { type, variadic, array} = arg;
    method.args[arg.name] = {
      name: arg.name,
      type: toSymbolRef(type, { readonly: true }),
      variadic: Boolean(variadic),
      array: Boolean(array),
    };
  }

  return {
    name,
    fqnd: `${s.fqnd}.${name}`,
    members: {},
    attributes: undefined,
    scope: [...s.scope, s.name],
    methods: {},
    callable: method,
  };
}