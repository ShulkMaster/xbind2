import { HSymbol } from 'types/scope';
import {
  addMember,
  ArgState,
  createMethodFor,
  nativeArray,
  nativeBool,
  nativeNumber,
  nativeString,
  toSymbolRef,
} from './lib';

addMember(nativeString, [
  {
    name: 'length',
    typeRef: toSymbolRef(nativeNumber),
    optional: false,
    readonly: true,
  },
]);

createMethodFor(nativeString, 'concat', [{
  name: 'strings',
  state: ArgState.Optional,
  typeRef: toSymbolRef(nativeString),
  variadic: true,
}], {
  ret: nativeString,
});

createMethodFor(nativeString, 'includes', [
  {
    name: 'searchString',
    state: ArgState.Required,
    typeRef: toSymbolRef(nativeString),
    variadic: false,
  },
  {
    name: 'position',
    state: ArgState.Optional,
    typeRef: toSymbolRef(nativeNumber),
    variadic: false,
  },
], {ret: nativeBool});

createMethodFor(nativeString, 'slice', [
  {
    name: 'indexStart',
    state: ArgState.Required,
    typeRef: toSymbolRef(nativeNumber),
    variadic: false,
  },
  {
    name: 'indexEnd',
    state: ArgState.Optional,
    typeRef: toSymbolRef(nativeNumber),
    variadic: false,
  },
], {ret: nativeString});

createMethodFor(nativeString, 'charAt', [
  {
    name: 'charAt',
    state: ArgState.Required,
    typeRef: toSymbolRef(nativeString),
    variadic: false,
  },
], {ret: nativeString});

createMethodFor(nativeString, 'indexOf', [
  {
    name: 'searchString',
    state: ArgState.Required,
    typeRef: toSymbolRef(nativeString),
    variadic: false,
  },
  {
    name: 'position',
    state: ArgState.Optional,
    typeRef: toSymbolRef(nativeNumber),
    variadic: false,
  },
], {ret: nativeNumber});

createMethodFor(nativeString, 'lastIndexOf', [
  {
    name: 'searchString',
    state: ArgState.Required,
    typeRef: toSymbolRef(nativeString),
    variadic: false,
  },
  {
    name: 'position',
    state: ArgState.Optional,
    typeRef: toSymbolRef(nativeNumber),
    variadic: false,
  },
], {ret: nativeNumber});

createMethodFor(nativeString, 'replace', [
    {
      name: 'pattern',
      state: ArgState.Required,
      typeRef: toSymbolRef(nativeString),
      variadic: false,
    },
    {
      name: 'replacement',
      state: ArgState.Required,
      typeRef: toSymbolRef(nativeString),
      variadic: false,
    },
  ], {ret: nativeString},
);
createMethodFor(nativeString, 'split', [
  {
    name: 'separator',
    state: ArgState.Required,
    typeRef: toSymbolRef(nativeString),
    variadic: false,
  },
  {
    name: 'limit',
    state: ArgState.Optional,
    typeRef: toSymbolRef(nativeString),
    variadic: false,
  },
], {ret: nativeArray});

createMethodFor(nativeString, 'substring', [
  {
    name: 'indexStart',
    state: ArgState.Required,
    typeRef: toSymbolRef(nativeString),
    variadic: false,
  },
  {
    name: 'indexEnd',
    state: ArgState.Optional,
    typeRef: toSymbolRef(nativeString),
    variadic: false,
  },
], {ret: nativeString});

createMethodFor(nativeString, 'toLowerCase', [], {ret: nativeString});
createMethodFor(nativeString, 'toUpperCase', [], {ret: nativeString});
createMethodFor(nativeString, 'trim', [], {ret: nativeString});

export const stringSymbols: HSymbol = nativeString;

