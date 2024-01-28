import { EvenSource, EventTarget, NativeTag } from 'types/nodes/native';
import { ArgList, NativeProperty, SymbolKind, TagSymbol } from 'types/scope';
import { ArgState, nativeBool, nativeNumber, nativeString, nativeVoid, toSymbolRef } from './lang/lib';

const commonProps: NativeProperty[] = [
  {
    name: 'id',
    returnType: toSymbolRef(nativeString),
  },
  {
    name: 'class',
    returnType: toSymbolRef(nativeString),
  },
];

// todo fix this
const clickEventArgs: ArgList[] = [{
  name: 'click',
  typeRef: toSymbolRef(nativeVoid),
  variadic: false,
  state: ArgState.Optional,
  // properties: {
  //   clientX: ReturnType.Number,
  //   clientY: ReturnType.Number,
  //   bubbles: ReturnType.Boolean,
  // },
  // methods: {
  //   preventDefault: {
  //     returnType: ReturnType.Void,
  //     args: [],
  //   },
  //   stopPropagation: {
  //     returnType: ReturnType.Void,
  //     args: [],
  //   },
  // },
}];


function makeNativeTag(name: NativeTag, props: NativeProperty[] = []): TagSymbol {
  const tag: TagSymbol = {
    name,
    fqnd: name,
    children: true,
    events: {
      onClick: {
        name: 'onClick',
        returnType: toSymbolRef(nativeVoid),
        args: clickEventArgs,
        source: EvenSource.MouseEvent,
        target: EventTarget.Self,
      },
    },
    properties: {},
    kind: SymbolKind.Tag,
  };

  for (const prop of commonProps) {
    tag.properties[prop.name] = prop;
  }

  for (const prop of props) {
    tag.properties[prop.name] = prop;
  }

  // for (const event of events) {
  //   tag.events[event.name] = event;
  // }

  return tag;
}

const spanTag = makeNativeTag(NativeTag.span);
const buttonTag = makeNativeTag(NativeTag.button, [
  {
    name: 'disabled',
    returnType: toSymbolRef(nativeBool),
  },
  {
    name: 'type',
    returnType: toSymbolRef(nativeString),
  },
]);

const inputTag = makeNativeTag(NativeTag.input, [
  {
    name: 'value',
    returnType: toSymbolRef(nativeString),
  },
  {
    name: 'type',
    returnType: toSymbolRef(nativeString),
  },
  {
    name: 'placeholder',
    returnType: toSymbolRef(nativeString),
  },
  {
    name: 'checked',
    returnType: toSymbolRef(nativeBool),
  },
  {
    name: 'disabled',
    returnType: toSymbolRef(nativeBool),
  },
]);

const divTag = makeNativeTag(NativeTag.div);
const h1Tag = makeNativeTag(NativeTag.h1);
const h2Tag = makeNativeTag(NativeTag.h2);
const h3Tag = makeNativeTag(NativeTag.h3);
const h4Tag = makeNativeTag(NativeTag.h4);
const h5Tag = makeNativeTag(NativeTag.h5);
const h6Tag = makeNativeTag(NativeTag.h6);
const pTag = makeNativeTag(NativeTag.p);

const imgTag = makeNativeTag(NativeTag.img, [
  {
    name: 'src',
    returnType: toSymbolRef(nativeString),
  }, {
    name: 'alt',
    returnType: toSymbolRef(nativeString),
  },
  {
    name: 'width',
    returnType: toSymbolRef(nativeNumber),
  },
  {
    name: 'height',
    returnType: toSymbolRef(nativeNumber),
  }
]);

const aTag = makeNativeTag(NativeTag.a, [
  {
    name: 'href',
    returnType: toSymbolRef(nativeString),
  },
  {
    name: 'target',
    returnType: toSymbolRef(nativeString),
  },
]);

const liTag = makeNativeTag(NativeTag.li);
const ulTag = makeNativeTag(NativeTag.ul);
const olTag = makeNativeTag(NativeTag.ol);

export const nativeTags = [
  divTag,
  spanTag,
  buttonTag,
  inputTag,
  h1Tag,
  h2Tag,
  h3Tag,
  h4Tag,
  h5Tag,
  h6Tag,
  pTag,
  imgTag,
  aTag,
  liTag,
  ulTag,
  olTag,
];