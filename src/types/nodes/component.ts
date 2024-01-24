import { Token } from 'types/token';
import { TemplateNode } from './template';
import { ExpressionResult } from './expression';
import { UsePath } from './uses';

export type PropertyNode = {
  type: 'property';
  property: Token;
  name: Token;
  colon: Token;
  typeAnnotation: Token;
  optional: boolean;
  initializer: ExpressionResult | undefined;
  semicolon: Token;
}

export type ComponentNode = {
  type: 'component';
  name: Token;
  scope: UsePath;
  hasOutlet: boolean;
  properties: PropertyNode[];
  propsTypeName: string | undefined;
  template: TemplateNode;
};

export type ComponentResult = ComponentNode | void;