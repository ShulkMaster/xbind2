import { CssRule, StyleRule } from './types';
import * as Opt from './options';

function toPascalCase(name: string): string {
  if(!name) return name;
  return name[0].toUpperCase() + name.slice(1);
}

function alias(name: string): string {
  if(!name) return 'border';
  return `border-${name.toLowerCase()}`;
}

function borderWidth(name: string): StyleRule {
  return {
    name: `border${toPascalCase(name)}Width`,
    alias: `${alias(name)}-width`,
    shorthand: {},
    arguments: [
      {
        name: `border${toPascalCase(name)}Width`,
        optional: false,
        alternatives: [
          {kind: CssRule.cssNumber, unitRequired: true},
          {kind: CssRule.cssIdentifier, options: Opt.borderStyleOptions},
        ],
      },
    ],
  };
}

function borderStyleArgs(name: string): StyleRule {
  return {
    name: `border${toPascalCase(name)}Style`,
    alias: `${alias(name)}-style`,
    shorthand: {},
    arguments: [
      {
        name: `border${toPascalCase(name)}Style`,
        optional: false,
        alternatives: [
          {kind: CssRule.cssIdentifier, options: Opt.decorationPatternOptions},
        ],
      },
    ],
  };
}

function borderColorArgs(name: string): StyleRule {
  return {
    name: `border${name}Color`,
    alias: `${alias(name)}-color`,
    shorthand: {},
    arguments: [
      {
        name: `border${name}Color`,
        optional: false,
        alternatives: [{kind: CssRule.cssColor}],
      },
    ],
  };
}

const borderTop: StyleRule = {
  name: 'borderTop',
  alias: 'border-top',
  arguments: [],
  shorthand: {
    borderTopWidth: borderWidth('Top'),
    borderTopStyle: borderStyleArgs('Top'),
    borderTopColor: borderColorArgs('Top'),
  },
};

const borderBottom: StyleRule = {
  name: 'borderBottom',
  alias: 'border-bottom',
  arguments: [],
  shorthand: {
    borderBottomWidth: borderWidth('Bottom'),
    borderBottomStyle: borderStyleArgs('Bottom'),
    borderBottomColor: borderColorArgs('Bottom'),
  },
};

const borderLeft: StyleRule = {
  name: 'borderLeft',
  alias: 'border-left',
  arguments: [],
  shorthand: {
    borderLeftWidth: borderWidth('Left'),
    borderLeftStyle: borderStyleArgs('Left'),
    borderLeftColor: borderColorArgs('Left'),
  },
};

const borderRight: StyleRule = {
  name: 'borderRight',
  alias: 'border-right',
  arguments: [],
  shorthand: {
    borderRightWidth: borderWidth('Right'),
    borderRightStyle: borderStyleArgs('Right'),
    borderRightColor: borderColorArgs('Right'),
  },
};

const border: StyleRule = {
  name: 'border',
  alias: 'border',
  arguments: [],
  shorthand: {
    borderWidth: borderWidth(''),
    borderStyle: borderStyleArgs(''),
    borderColor: borderColorArgs(''),
  },
};

export const borderRules = [
  borderWidth('Top'),
  borderStyleArgs('Top'),
  borderColorArgs('Top'),
  borderTop,
  borderWidth('Bottom'),
  borderStyleArgs('Bottom'),
  borderColorArgs('Bottom'),
  borderBottom,
  borderWidth('Left'),
  borderStyleArgs('Left'),
  borderColorArgs('Left'),
  borderLeft,
  borderWidth('Right'),
  borderStyleArgs('Right'),
  borderColorArgs('Right'),
  borderRight,
  borderWidth(''),
  borderStyleArgs(''),
  borderColorArgs(''),
  border,
];
