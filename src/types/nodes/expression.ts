import { Token } from 'types/token';
import { ReturnType } from './native';

export enum ExpressionKind {
  AssignmentExpression = 'assigment',
  TernaryExpression = 'ternary',
  ConditionalExpression = 'conditional',
  LogicalOrExpression = 'logical-or',
  LogicalAndExpression = 'logical-and',
  EqualityExpression = 'equality',
  RelationalExpression = 'relational',
  AdditiveExpression = 'additive',
  MultiplicativeExpression = 'multiplicative',
  CastExpression = 'cast',
  UnaryExpression = 'unary',
  PostfixExpression = 'postfix',
  PrimaryExpression = 'primary',
  constantExpression = 'constant',
  ArrayLiteralExpression = 'array-literal',
  ObjectLiteralExpression = 'object-literal',
}

export type AssignmentExpressionNode = {
  kind: ExpressionKind.AssignmentExpression;
  assignee: ExpressionResult;
  assignor: ExpressionResult;
}

export type TernaryExpressionNode = {
  kind: ExpressionKind.TernaryExpression;
  trueBranch: ExpressionResult;
  falseBranch: ExpressionResult;
}

export type ConditionalExpressionNode = {
  kind: ExpressionKind.ConditionalExpression;
  condition: ExpressionResult;
  results: TernaryExpressionNode;
}

export type LogicalOrExpressionNode = {
  kind: ExpressionKind.LogicalOrExpression;
  left: ExpressionResult;
  right: ExpressionResult;
};

export type LogicalAndExpressionNode = {
  kind: ExpressionKind.LogicalAndExpression;
  left: ExpressionResult;
  right: ExpressionResult;
};

export type EqualityExpressionNode = {
  kind: ExpressionKind.EqualityExpression;
  left: ExpressionResult;
  operator: Token;
  right: ExpressionResult;
};

export type RelationalExpressionNode = {
  kind: ExpressionKind.RelationalExpression;
  left: ExpressionResult;
  operator: Token;
  right: ExpressionResult;
};

export type AdditiveExpressionNode = {
  kind: ExpressionKind.AdditiveExpression;
  operator: Token;
  left: ExpressionResult;
  right: ExpressionResult;
};

export type MultiplicativeExpressionNode = {
  kind: ExpressionKind.MultiplicativeExpression;
  operator: Token;
  left: ExpressionResult;
  right: ExpressionResult;
};

export type CastExpressionNode = {
  kind: ExpressionKind.CastExpression;
  left: ExpressionResult;
  as: Token;
};

export type UnaryExpressionNode = {
  kind: ExpressionKind.UnaryExpression;
  operator: Token;
  right: ExpressionResult;
};

export type ArgumentList = {
  open: Token;
  arguments: ExpressionResult[];
  close: Token;
};

export type PostfixExpressionNode = {
  kind: ExpressionKind.PostfixExpression;
  primary: ExpressionResult | undefined;
  operator: Token | undefined;
  call: ArgumentList | undefined;
  member: Token | undefined;
  indexed: {
    open: Token;
    index: ExpressionResult;
    close: Token;
  } | undefined;
  follow: PostfixExpressionNode | undefined;
};

export type PrimaryExpressionNode = {
  kind: ExpressionKind.PrimaryExpression;
  identifier: Token | undefined;
  groupExpression: {
    open: Token;
    expression: ExpressionResult;
    close: Token;
  } | undefined;
};

export type ConstantExpressionNode = {
  kind: ExpressionKind.constantExpression;
  token: Token;
  primitiveType: ReturnType;
};

export type ArrayLiteralExpressionNode = {
  kind: ExpressionKind.ArrayLiteralExpression;
  open: Token;
  elements: ExpressionResult[];
  close: Token;
};

export type ObjectLiteralExpressionNode = {
  kind: ExpressionKind.ObjectLiteralExpression;
  open: Token;
  elements: {
    key: Token;
    value: ExpressionResult;
  }[];
  close: Token;
};

export type ExpressionResult =
  | AssignmentExpressionNode
  | ConditionalExpressionNode
  | TernaryExpressionNode
  | LogicalOrExpressionNode
  | LogicalAndExpressionNode
  | EqualityExpressionNode
  | RelationalExpressionNode
  | AdditiveExpressionNode
  | MultiplicativeExpressionNode
  | CastExpressionNode
  | UnaryExpressionNode
  | PostfixExpressionNode
  | PrimaryExpressionNode
  | ConstantExpressionNode
  | ArrayLiteralExpressionNode
  | ObjectLiteralExpressionNode
  ;
