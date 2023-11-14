import { Token } from 'types/token';
import { TypeNode } from './types';
import { TemplateNode } from './template';

export type PropertyNode = {
  type: 'property';
  property: Token;
  name: Token;
  colon: Token;
  typeAnnotation: TypeNode;
  optional: boolean;
  initializer: string | undefined;
  semicolon: Token;
}

export type ComponentNode = {
  type: 'component';
  name: Token;
  properties: PropertyNode[];
  template: TemplateNode;
};

export type ComponentResult = ComponentNode | void;