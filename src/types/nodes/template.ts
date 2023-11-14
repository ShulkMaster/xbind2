import { Token } from 'types/token';

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
  children: (TagNode | CharDataNode)[];
};

export type ChildNode = TagNode | CharDataNode;

export type TemplateNode = {
  type: 'template';
  children: TagNode[];
};

export type TemplateFollowNode = {
  children: (TagNode | CharDataNode)[];
  closeTag: Token | undefined;
  siblings: TagNode[];
};



export type TemplateResult = ChildNode[] | CharDataNode | TemplateFollowNode | void;