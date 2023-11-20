export type ExpressionNode = AssignmentExpressionNode;

export type AssignmentExpressionNode = {
  kind: 'AssignmentExpression';
  assignee: ConditionalExpressionNode;
  assignor: AssignmentExpressionNode | null;
}

export type TernaryExpressionNode = {
  kind: 'TernaryExpression';
  trueBranch: ExpressionNode;
  falseBranch: ConditionalExpressionNode;
}

export type ConditionalExpressionNode = {
  kind: 'ConditionalExpression';
  condition: LogicalOrExpressionNode;
  results: TernaryExpressionNode | null;
}

export type LogicalOrExpressionNode = {
  kind: 'LogicalOrExpression';
  left: LogicalAndExpressionNode;
  right: LogicalOrExpressionNode | null;
};

export type LogicalAndExpressionNode = {
  kind: 'LogicalAndExpression';
  left: EqualityExpressionNode;
  right: LogicalAndExpressionNode | null;
};

export type EqualityExpressionNode = {
  kind: 'EqualityExpression';
  left: RelationalExpressionNode;
  right: EqualityExpressionNode | null;
};

export type RelationalExpressionNode = {
  kind: 'RelationalExpression';
  left: AdditiveExpressionNode;
  right: RelationalExpressionNode | null;
};

export type AdditiveExpressionNode = {
  kind: 'AdditiveExpression';
  left: number;
  right: AdditiveExpressionNode | null;
};