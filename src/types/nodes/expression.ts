import { Token } from 'types/token';
import { TypeNode } from './types';
import { ReturnType } from './native';

export type ExpressionNode = AssignmentExpressionNode;

export enum ExpressionKind {
  AssignmentExpression,
  TernaryExpression,
  ConditionalExpression,
  LogicalOrExpression,
  LogicalAndExpression,
  EqualityExpression,
  RelationalExpression,
  AdditiveExpression,
  MultiplicativeExpression,
  CastExpression,
  UnaryExpression,
  PostfixExpression,
  PrimaryExpression,
  constantExpression,
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
  as: TypeNode;
};

export type UnaryExpressionNode = {
  kind: ExpressionKind.UnaryExpression;
  operator: Token;
  right: ExpressionResult;
};

export type PostfixExpressionNode = {
  kind: ExpressionKind.PostfixExpression;
  primary: ExpressionResult;
  operator: Token | undefined;
  call: [Token, Token] | undefined;
  indexed: {
    open: Token;
    index: ExpressionResult;
    close: Token;
  } | undefined;
  follow: ExpressionResult | undefined;
};

export type PrimaryExpressionNode = {
  kind: ExpressionKind.PrimaryExpression;
  identifier: Token | undefined;
  constantExpression: ConstantExpressionNode | undefined;
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
  ;
