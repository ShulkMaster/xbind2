import { Token } from 'types/token';
import { TypeNode, TypeRefNode } from './types';
import { TemplateNode } from './template';
import { ExpressionResult } from './expression';

export type PropertyNode = {
  type: 'property';
  property: Token;
  name: Token;
  colon: Token;
  typeAnnotation: TypeNode;
  optional: boolean;
  initializer: ExpressionResult | undefined;
  semicolon: Token;
}

export type ComponentNode = {
  type: 'component';
  name: Token;
  properties: PropertyNode[];
  propsType: TypeRefNode;
  template: TemplateNode;
};

export type ComponentResult = ComponentNode | void;