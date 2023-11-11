lexer grammar Keywords;

Use: 'use';
Component: 'component';
Style: 'style';
As: 'as';

// variables
Val: 'val';
Var: 'var';
Prop: 'prop';

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
