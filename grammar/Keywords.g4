lexer grammar Keywords;

Use: 'use';
Component: 'component';
Style: 'style';
Template: 'template';
As: 'as';

// staments
If: 'if';
Else: 'else';
While: 'while';
Return: 'return';
Switch: 'switch';
Case: 'case';

// variables
Val: 'val';
Var: 'var';
Prop: 'prop';

// css
Em: 'em';
Rem: 'rem';
Px: 'px';

// types
Function: 'fun';
Type: 'type';
Number: 'number';
String: 'string';
Boolean: 'boolean';
Void: 'void';
Color: 'color';

// values
Undefined: 'undefined';
BoolValue: 'true' | 'false';
NumberValue: [0-9_]+('.'[0-9_]+)?;


// modifiers
Inline: 'inline';

// hooks
Render: 'render';
Init: 'init';
Mount: 'mount';
Unmount: 'unmount';
