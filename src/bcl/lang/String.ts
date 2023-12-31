import { HSymbol } from 'types/symbol';
import {
  ArgState,
  createMethodFor,
  NativeDataType,
  addMember,
  nativeBool,
  nativeNumber,
  nativeString
} from './lib';

addMember(nativeString, 'length', {readonly: true, ref: NativeDataType.Number});

const concat = createMethodFor(nativeString, 'concat', [{
  name: 'strings',
  variadic: true,
  array: true,
  type: nativeString,
  state: ArgState.Optional,
}], nativeString);

const includes = createMethodFor(nativeString, 'includes', [
  {
    name: 'searchString',
    type: nativeString,
    state: ArgState.Required,
  },
  {
    name: 'position',
    type: nativeNumber,
    state: ArgState.Optional,
  }
], nativeBool);

/*
slice: {
  name: 'slice',
    scope: [],
    fqnd: 'string.slice',
    readonly: true,
    public: true,
},
split: {
  name: 'split',
    scope: [],
    fqnd: 'string.split',
    readonly: true,
    public: true,
},
toLowerCase: {
  name: 'toLowerCase',
    scope: [],
    fqnd: 'string.toLowerCase',
    readonly: true,
    public: true,
},
toUpperCase: {
  name: 'toUpperCase',
    scope: [],
    fqnd: 'string.toUpperCase',
    readonly: true,
    public: true,
},
trim: {
  name: 'trim',
    scope: [],
    fqnd: 'string.trim',
    readonly: true,
    public: true,
},

const concat: NativeFunctionSymbol = {
  kind: NativeSymbolKind.function,
  name: prefix('concat'),
  varArgs: true,
  returnType: {
    type: 'typeRef',
    name: ReturnType.String,
  },
  args: [
    {
      array: true,
      type: {
        type: 'typeRef',
        name: ReturnType.String,
      },
      name: 'strings',
    },
  ],
};

const includes: NativeFunctionSymbol = {
  kind: NativeSymbolKind.function,
  name: prefix('includes'),
  varArgs: false,
  returnType: {
    type: 'typeRef',
    name: ReturnType.Boolean,
  },
  args: [
    {
      name: 'searchString',
      array: false,
      type: {
        type: 'typeRef',
        name: ReturnType.String,
      },
    },
    {
      name: 'position',
      array: false,
      type: {
        type: 'typeRef',
        name: ReturnType.Number,
      },
    }
  ],
};

const slice: NativeFunctionSymbol = {
  kind: NativeSymbolKind.function,
  name: prefix('slice'),
  varArgs: false,
  returnType: {
    type: 'typeRef',
    name: ReturnType.String,
  },
  args: [
    {
      name: 'start',
      array: false,
      type: {
        type: 'typeRef',
        name: ReturnType.Number,
      },
    },
    {
      name: 'end',
      array: false,
      type: {
        type: 'typeRef',
        name: ReturnType.Number,
      },
    }
  ],
};

const split: NativeFunctionSymbol = {
  kind: NativeSymbolKind.function,
  name: prefix('split'),
  varArgs: false,
  returnType: {
    type: 'typeRef',
    name: ReturnType.String,
  },
  args: [
    {
      name: 'separator',
      array: false,
      type: {
        type: 'typeRef',
        name: ReturnType.String,
      },
    },
    {
      name: 'limit',
      array: false,
      type: {
        type: 'typeRef',
        name: ReturnType.Number,
      },
    }
  ],
};

const toLowerCase: NativeFunctionSymbol = {
  kind: NativeSymbolKind.function,
  name: prefix('toLowerCase'),
  varArgs: false,
  returnType: {
    type: 'typeRef',
    name: ReturnType.String,
  },
  args: [],
};

const toUpperCase: NativeFunctionSymbol = {
  kind: NativeSymbolKind.function,
  name: prefix('toUpperCase'),
  varArgs: false,
  returnType: {
    type: 'typeRef',
    name: ReturnType.String,
  },
  args: [],
};

const trim: NativeFunctionSymbol = {
  kind: NativeSymbolKind.function,
  name: prefix('trim'),
  varArgs: false,
  returnType: {
    type: 'typeRef',
    name: ReturnType.String,
  },
  args: [],
};
*/

export const stringSymbols: HSymbol[] = [
  nativeString,
  concat,
  includes,
  // slice,
  // split,
  // toLowerCase,
  // toUpperCase,
  // trim,
];

