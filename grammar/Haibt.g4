parser grammar Haibt;

options {
    tokenVocab=HaibtLexer;
}

program: module EOF;

module: (uses | component | style | typeDef) module | ;

uses: Use usePath SemiColon module;

usePath: Identifier useSubModule;
useSubModule: Dot Identifier useSubModule | ;

typeDef: Type Identifier Assign OBrace typeDefBody CBrace;
typeDefBody: Identifier Colon varType SemiColon typeDefBody | ;

style: Style Identifier OBrace styleClasses CBrace;

styleClasses: styleClass styleClasses | ;

styleClass: Dot Identifier styleCombine OBrace styleRules CBrace;

styleCombine: stlyeModifier Identifier styleCombine | ;
stlyeModifier: Dot | GreaterThan Dot;

styleRules: styleRule styleRules | ;

styleRule: (Identifier | Color) Colon styleRuleFollow SemiColon | styleClass;

styleRuleFollow: (HEX_COLOR | measure | Identifier) styleRuleFollow |;

measure: NumberValue measureUnit;
measureUnit: Px | Rem | Em | Mod |;

component: Component Identifier OBrace componentBody CBrace;
componentBody: (varDeclaration | propDeclaration | render | functionDeclaration) componentBody | ;

varDeclaration: varMutability Identifier Colon varType initValue SemiColon ;
varMutability: Var | Val;
varType: primitiveType | Identifier;
primitiveType: Number | String | Boolean | Void | Color | Undefined;

propDeclaration: Prop Identifier Colon varType initValue SemiColon;
initValue: Assign expression | ;

render: Render OParen renderFollow;
renderFollow: (Undefined | template) CParen SemiColon;

expression: assignmentExpression;

assignmentExpression: conditionalExpression assignmentFollow;
assignmentFollow: Assign assignmentExpression | ;

conditionalExpression: logicalOrExpression ternaryExpression;
ternaryExpression: Question expression Colon conditionalExpression | ;

logicalOrExpression: logicalAndExpression logicalOrFollow;
logicalOrFollow: Or logicalOrExpression | ;

logicalAndExpression: equalityExpression logicalAndFollow;
logicalAndFollow: And logicalAndExpression | ;

equalityExpression: relationalExpression equalityFollow;
equalityFollow: Equal equalityExpression | NotEqual equalityExpression | ;

relationalExpression: additiveExpression relationalFollow;
relationalFollow:
   LessThan relationalExpression
   | LessThanOrEqual relationalExpression
   | GreaterThan relationalExpression
   | GreaterThanOrEqual relationalExpression
   | ;

additiveExpression: multiplicativeExpression additiveFollow;
additiveFollow: Plus additiveExpression | Minus additiveExpression | ;

multiplicativeExpression: castExpression multiplicativeFollow;
multiplicativeFollow: Star multiplicativeExpression | Slash multiplicativeExpression | Mod multiplicativeExpression | ;

castExpression: unaryExpression castFollow;
castFollow: As varType | ;

unaryExpression: postfixExpression | unaryOperator postfixExpression;
unaryOperator: Plus | Minus | Not;

postfixExpression: primaryExpression postfixFollow;
postfixFollow:
  PlusPlus postfixFollow
  | MinusMinus postfixFollow
  | Dot Identifier postfixFollow
  | OParen CParen postfixFollow
  | OBracnk expression CBracnk postfixFollow
  | ;

primaryExpression: Identifier | constantExpression | OParen expression CParen;

constantExpression: NumberValue | StringLiteral | BoolValue | Undefined | HEX_COLOR;

template: LessThan Identifier attributes templateFollow | ;
templateFollow: (GreaterThan templateBody CloseTag Identifier GreaterThan template) | Slash GreaterThan template;

attributes: attribute attributes | ;
attribute:
  OBrace Identifier CBrace
  | directive
  | attributeBind
  ;

directive: directiveName Assign attributeValue;
attributeBind: Identifier attributeBindFollow;

attributeBindFollow: Assign attributeValue | ;

directiveName: If | Else | Switch | Case | Template;
attributeValue: StringLiteral | OBrace expression CBrace;

templateBody:
  template
  | charData templateBody
  | OBrace expression CBrace templateBody;

charData: ~('<'|'</'|'{')+;


functionDeclaration: Function Identifier OParen parameterList CParen returnType functionBody ;

returnType: Colon varType | ;

parameterList: parameter parameterListFollow | ;
parameter: Identifier Colon varType;
parameterListFollow: Comma parameterList | ;

functionBody: OBrace statementList CBrace;

statementList: statement statementList | ;

statement:
  returnStatement |
  assigmentStatement |
  varDeclaration |
  expressionStatement |
  ifStatement ;

returnStatement: Return result SemiColon;
result: expression | ;

assigmentStatement: Identifier Assign expression SemiColon ;
expressionStatement: expression SemiColon;

ifStatement: If OParen expression CParen ifBody elseStatement;
ifBody: OBrace statementList CBrace;
elseStatement: Else ifBody | ;