import { anySymbol, ArgState, createMethodFor, nativeBool, nativeNumber, nativeString, toSymbolRef } from './lib';
import { ObjectSymbol, SymbolKind } from 'types/scope';

createMethodFor(nativeNumber, 'toFixed', [
    {
      name: 'digits',
      state: ArgState.Optional,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeString},
);

createMethodFor(nativeNumber, 'valueOf', [], {ret: nativeNumber});

createMethodFor(nativeNumber, 'toExponential', [
    {
      name: 'toExponential',
      state: ArgState.Required,

      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
    {
      name: 'fractionDigits',
      state: ArgState.Optional,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeString},
);

createMethodFor(nativeNumber, 'toString', [
    {
      name: 'radix',
      state: ArgState.Optional,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeString},
);

createMethodFor(nativeNumber, 'toPrecision', [
    {
      name: 'precision',
      state: ArgState.Optional,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeString},
);

const objectNumber: ObjectSymbol = {
  fqnd: 'Number',
  name: 'Number',
  kind: SymbolKind.Object,
  members: {},
  origin: 'object',
};

createMethodFor(objectNumber, 'isFinite', [
    {
      name: 'value',
      state: ArgState.Required,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeBool},
);

createMethodFor(objectNumber, 'isInteger', [
    {
      name: 'value',
      state: ArgState.Required,
      typeRef: toSymbolRef(anySymbol),
      variadic: false,
    },
  ], {ret: nativeBool},
);

createMethodFor(objectNumber, 'isNaN', [
    {
      name: 'value',
      state: ArgState.Required,
      typeRef: toSymbolRef(anySymbol),
      variadic: false,
    },
  ], {ret: nativeBool},
);

createMethodFor(objectNumber, 'parseFloat', [
    {
      name: 'string',
      state: ArgState.Required,
      typeRef: toSymbolRef(nativeString),
      variadic: false,
    },
  ], {ret: nativeNumber},
);

createMethodFor(objectNumber, 'parseInt', [
    {
      name: 'string',
      state: ArgState.Required,
      typeRef: toSymbolRef(nativeString),
      variadic: false,
    },
    {
      name: 'radix',
      state: ArgState.Optional,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeNumber},
);

createMethodFor(objectNumber, 'toFixed', [
    {
      name: 'digits',
      state: ArgState.Optional,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeString},
);

createMethodFor(objectNumber, 'toPrecision', [
    {
      name: 'precision',
      state: ArgState.Optional,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeString},
);

createMethodFor(objectNumber, 'toString', [
    {
      name: 'radix',
      state: ArgState.Optional,
      typeRef: toSymbolRef(nativeNumber),
      variadic: false,
    },
  ], {ret: nativeString},
);

export const numberSymbols = [nativeNumber, objectNumber];
