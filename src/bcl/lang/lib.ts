import {
  ArgList,
  FunctionSymbol,
  HSymbol,
  Member,
  ObjectSymbol,
  SymbolKind,
  SymbolRef,
} from 'types/scope';

export const enum NativeDataType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Array = 'array',
  Undefined = 'undefined',
  Void = 'void',
}

export const enum ArgState {
  Required = 'required',
  Optional = 'optional',
  Default = 'default',
}

export const undefinedSymbol: ObjectSymbol = {
  fqnd: NativeDataType.Undefined,
  name: NativeDataType.Undefined,
  kind: SymbolKind.Object,
  members: {},
  origin: 'object',
};

export const nativeVoid: ObjectSymbol = {
  fqnd: NativeDataType.Void,
  name: NativeDataType.Void,
  kind: SymbolKind.Object,
  members: {},
  origin: 'object',
};

export const nativeBool: ObjectSymbol = {
  fqnd: NativeDataType.Boolean,
  name: NativeDataType.Boolean,
  kind: SymbolKind.Object,
  members: {},
  origin: 'object',
};

export const nativeString: ObjectSymbol = {
  fqnd: NativeDataType.String,
  name: NativeDataType.String,
  kind: SymbolKind.Object,
  members: {},
  origin: 'object',
};

export const nativeNumber: ObjectSymbol = {
  fqnd: NativeDataType.Number,
  name: NativeDataType.Number,
  kind: SymbolKind.Object,
  members: {},
  origin: 'object',
};

export const nativeArray: ObjectSymbol = {
  fqnd: NativeDataType.Array,
  name: NativeDataType.Array,
  kind: SymbolKind.Object,
  members: {},
  origin: 'object',
};

export const toStringSymbol: FunctionSymbol = {
  name: 'toString',
  fqnd: 'toString',
  kind: SymbolKind.Function,
  args: [],
  returnType: {
    symbolName: NativeDataType.String,
    module: [],
  },
};

export function addMember(s: ObjectSymbol, members: Member[]): void {
  for (const member of members) {
    s.members[member.name] = member;
  }
}

export function toSymbolRef(s: HSymbol, module: string[] = []): SymbolRef {
  return {
    module,
    symbolName: s.name,
  };
}

type MethodOptions = Partial<{
  ret: HSymbol;
  readonly: boolean;
  optional: boolean;
}>;

export function createMethodFor(s: ObjectSymbol, name: string, args: ArgList[], opts: MethodOptions = {}): void {
  s.members[name] = {
    args,
    name,
    readonly: opts.readonly ?? true,
    optional: opts.optional ?? false,
    typeRef: toSymbolRef(opts.ret ?? undefinedSymbol),
  };
}
