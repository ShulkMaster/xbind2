lexer grammar Common;

Identifier: IdentifierStart (IdentifierStart | Digit)*;

fragment IdentifierStart: [a-zA-Z_];
fragment HexDigit: [_0-9a-fA-F];
fragment Digit: [0-9];
