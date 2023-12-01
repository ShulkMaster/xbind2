import { Token } from 'types/token';
import { ExpressionResult } from './expression';

export type AttributeNode = {
  type: 'attribute';
  name: Token;
  value: Token;
};

export type CharDataNode = {
  type: 'charData';
  contents: string[];
};

export type TagNode = {
  type: 'tag';
  openTag: Token;
  closeTag: Token | undefined;
  properties: AttributeNode[];
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

export type TemplateResult = ChildNode[] | CharDataNode | TemplateFollowNode | void;