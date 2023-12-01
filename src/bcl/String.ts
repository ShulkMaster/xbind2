import { NativePropertySymbol, NativeFunctionSymbol, NativeSymbol, NativeSymbolKind } from 'types/symbol';
import { ReturnType } from '../types/nodes/native';

const prefix = (s: string) => `string.${s}`;

const length: NativePropertySymbol = {
  kind: NativeSymbolKind.property,
  name: prefix('length'),
  type: {
    type: 'typeRef',
    name: ReturnType.Number,
  },
  readonly: true,
};

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

export const stringSymbol: NativeSymbol[] = [
  length,
  concat,
  includes,
  slice,
  split,
  toLowerCase,
  toUpperCase,
  trim,
];
