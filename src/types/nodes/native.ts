import { Token } from 'types/token';

export const enum ReturnType {
  Void = 'void',
  Number = 'number',
  String = 'string',
  Boolean = 'boolean',
  Color = 'color',
  Undefined = 'undefined',
}

export const enum EventTarget {
  Self = 'self',
  Parent = 'parent',
  Window = 'window',
  None = 'none',
}

export const enum EvenSource {
  MouseEvent = 'MouseEvent',
  KeyboardEvent = 'KeyboardEvent',
  TouchEvent = 'TouchEvent',
  DomEvent = 'DomEvent',
}

export type EventArgs = {
  name: string;
  target: EventTarget;
  properties: {
    [key: string]: ReturnType;
  };
  methods: {
    [key: string]: {
      returnType: ReturnType;
      args: EventArgs[];
    };
  };
};

export enum NativeTag {
  div = 'div',
  span = 'span',
  button = 'button',
  input = 'input',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  img = 'img',
  a = 'a',
  li = 'li',
  ul = 'ul',
  ol = 'ol',
}

export type TagProperty = {
  name: string;
  returnType: ReturnType | Token;
}

export type TagEvent = {
  name: string;
  type: EvenSource;
  returnType: ReturnType | Token;
  args: EventArgs[];
};

export type BaseTag = {
  name: NativeTag;
  children: boolean;
  events: {
    [key: string]: TagEvent;
  };
  properties: {
    [key: string]: TagProperty;
  };
};
