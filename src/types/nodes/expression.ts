import { Token } from 'types/token';

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
  left: number;
  right: ExpressionResult;
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
  ;
