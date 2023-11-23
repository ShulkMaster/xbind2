lexer grammar HaibtLexer;

import Keywords, Punctuation, Common;

// Operators
Assign: '=';
PlusPlus:                       '++';
MinusMinus:                     '--';
Plus: '+';
Minus: '-';
Not: '!';
Star: '*';
Slash: '/';
Mod: '%';
Power: '**';
LessThan: '<';
LessThanOrEqual: '<=';
GreaterThan: '>';
GreaterThanOrEqual: '>=';
Or: '||';
And: '&&';
Equal: '==';
NotEqual: '!=';
CloseTag: '</';

StringLiteral: '"' DoubleStringCharacter* '"';

HEX_COLOR: Hash HexDigit HexDigit HexDigit (HexDigit HexDigit HexDigit)?;

WhiteSpaces: [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);
LineTerminator: [\r\n\u2028\u2029] -> channel(HIDDEN);


fragment DoubleStringCharacter
    : ~["\\]
    | '\\' EscapeSequence
    | LineContinuation
    ;

fragment EscapeSequence
    : CharacterEscapeSequence
    | '0' // no digit ahead! TODO
    ;

fragment LineContinuation
    : '\\' [\r\n\u2028\u2029]
    ;



fragment CharacterEscapeSequence
    : SingleEscapeCharacter
    | NonEscapeCharacter
    ;

fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;

fragment NonEscapeCharacter
    : ~['"\\bfnrtv0-9xu\r\n]
    ;

fragment DecimalIntegerLiteral
    : '0'
    | [1-9] [0-9_]*
    ;