import { Token } from 'types/token';
import { OrArray } from './index';
import * as N from './index';

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
  type: 'rule';
  identifier: Token;
  value: StyleValueNode[];
}

export type ClassChild = N.RuleNode | N.ClassNode;

export type ClassNode = {
  type: 'class';
  name: Token;
  rules: RuleNode[];
  subClasses: ClassNode[];
  modifiers: ModifierNode[];
}

export type StyleNode = {
  type: 'style';
  name: Token;
  classes: ClassNode[];
}

export type StyleVisit =
  | OrArray<StyleNode>
  | ModifierNode[]
  | OrArray<RuleNode>
  | OrArray<StyleValueNode>
  | OrArray<ClassNode>
  | OrArray<ClassChild>
  | Token
  | undefined;