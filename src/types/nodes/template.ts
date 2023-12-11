import { Token } from 'types/token';
import { ExpressionResult } from './expression';
import { OrArray } from './index';

export enum DirectiveType {
  if = 'if',
  else = 'else',
  switch = 'switch',
  case = 'case',
  template = 'template',
}

export type AttributeNode = {
  type: 'attribute';
  name: Token;
  value: ExpressionResult | undefined;
};

export type DirectiveNode = {
  type: 'directive';
  name: Token;
  kind: DirectiveType;
  value: ExpressionResult;
};

export type TagProperty = AttributeNode | DirectiveNode;

export type CharDataNode = {
  type: 'charData';
  contents: string[];
};

export type TagNode = {
  type: 'tag';
  openTag: Token;
  closeTag: Token | undefined;
  attributes: AttributeNode[];
  directives: DirectiveNode[];
  children: ChildNode[];
};

export type ChildNode = TagNode | CharDataNode | {
  type: 'expression';
  expression: ExpressionResult;
};

export type TemplateNode = {
  type: 'template';
  children: TagNode[];
};

export type TemplateFollowNode = {
  children: ChildNode[];
  closeTag: Token | undefined;
  siblings: TagNode[];
};

export type AttributeBind = {
  identifier: Token;
  expression: ExpressionResult;
}

export type DirectiveBind = {
  token: Token;
  type: DirectiveType;
}

export type TemplateResult = ChildNode[] | CharDataNode | TemplateFollowNode | void;
export type AttributeVisit =
  | OrArray<AttributeNode>
  | OrArray<DirectiveNode>
  | OrArray<TagProperty>
  | AttributeBind
  | DirectiveBind
  | ExpressionResult;