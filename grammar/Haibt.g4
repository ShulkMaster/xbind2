parser grammar Haibt;

options {
    tokenVocab=HaibtLexer;
}

program: module EOF;

module: uses | (component | style) module | ;

uses: Use usePath SemiColon module;

usePath: Identifier useSubModule;
useSubModule: Dot Identifier useSubModule | ;

style: Style OBrace CBrace;

component: Component Identifier OBrace componentBody CBrace;
componentBody: (varDeclaration | propDeclaration | render) componentBody | ;

varDeclaration: varMutability Identifier Colon varType SemiColon;
varMutability: Var | Val;
varType: primitiveType | Identifier subType;
primitiveType: Number | String | Boolean | Void | Color | Null;
subType: Dot Identifier subType | ;

propDeclaration: Prop Identifier Colon varType initValue SemiColon;
initValue: Assign expression | ;

render: Render OParen renderFollow;
renderFollow: (Null | template) CParen SemiColon;

expression: logicalOrExpression;

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

constantExpression: NumberValue | StringLiteral | BoolValue | Null;

template: LessThan Identifier attributes templateFollow | ;
templateFollow: (GreaterThan templateBody CloseTag Identifier GreaterThan template) | Slash GreaterThan template;

attributes: attribute attributes | ;
attribute:
  OBrace Identifier CBrace
  | Identifier Assign OBrace expression CBrace
  | Identifier Assign StringLiteral;

templateBody:
  template
  | charData templateBody
  | OBrace expression CBrace templateBody;

charData: ~('<'|'</'|'{')+;

