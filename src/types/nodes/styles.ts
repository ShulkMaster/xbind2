import { Token } from 'types/token';

export type ModifierNode = {
  modifier: 'dot' | 'gt';
  name: Token;
}

export const enum StyleKind {
  hex= 'hex',
  measure = 'measure',
  identifier = 'identifier',
}

export type HexColorNode = {
  type: StyleKind.hex;
  value: Token;
};

export type MeasureNode = {
  type: StyleKind.measure;
  value: Token;
  unit: Token | undefined;
}

export type IdentifierNode = {
  type: StyleKind.identifier;
  token: Token;
}

export type StyleValueNode = HexColorNode | MeasureNode | IdentifierNode;

export type RuleNode = {
  identifier: Token;
  value: StyleValueNode[];
}

export type StyleNode = {
  type: 'style';
  name: Token;
  modifiers: ModifierNode[];
  rules: RuleNode[];
  subStyles: StyleNode[];
}

export type StyleVisit = StyleNode | ModifierNode[] | RuleNode | StyleValueNode;