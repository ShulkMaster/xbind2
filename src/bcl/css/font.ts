import { CssRule, StyleRule } from './types';
import * as Opt from './options';

const alignContent: StyleRule = {
  name: 'alignContent',
  alias: 'align-content',
  arguments: [{
    name: 'alignment',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.flexAlignOptions}],
  }],
  shorthand: {},
};

const alignItems: StyleRule = {
  name: 'alignItems',
  alias: 'align-items',
  arguments: [{
    name: 'alignment',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.flexAlignOptions}],
  }],
  shorthand: {},
};

const alignSelf: StyleRule = {
  name: 'alignSelf',
  alias: 'align-self',
  arguments: [{
    name: 'alignment',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.flexAlignOptions}],
  }],
  shorthand: {},
};


const fontSize: StyleRule = {
  name: 'fontSize',
  alias: 'font-size',
  arguments: [
    {
      name: 'size',
      alternatives: [{kind: CssRule.cssNumber, unitRequired: true}],
      optional: false,
    },
  ],
  shorthand: {},
};

const fontWeight: StyleRule = {
  name: 'fontWeight',
  alias: 'font-weight',
  arguments: [
    {
      name: 'weight',
      alternatives: [
        {kind: CssRule.cssNumber, unitRequired: false},
        {kind: CssRule.cssIdentifier, options: Opt.weightOptions},
      ],
      optional: false,
    },
  ],
  shorthand: {},
};

const fontStyle: StyleRule = {
  name: 'fontStyle',
  alias: 'font-style',
  arguments: [
    {
      name: 'style',
      alternatives: [{kind: CssRule.cssIdentifier, options: Opt.styleOptions}],
      optional: false,
    },
  ],
  shorthand: {},
};

const textAlign: StyleRule = {
  name: 'textAlign',
  alias: 'text-align',
  arguments: [{
    optional: false,
    name: 'alignment',
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.textAlignOptions}],
  }],
  shorthand: {},
};


const textDecorationColor: StyleRule = {
  name: 'textDecorationColor',
  alias: 'text-decoration-color',
  arguments: [
    {
      name: 'color',
      optional: false,
      alternatives: [
        {kind: CssRule.cssColor},
        {kind: CssRule.cssIdentifier, options: Opt.colorOptions},
      ],
    },
  ],
  shorthand: {},
};

const textDecorationLine: StyleRule = {
  name: 'textDecorationLine',
  alias: 'text-decoration-line',
  arguments: [
    {
      name: 'decorationLine',
      optional: false,
      alternatives: [
        {kind: CssRule.cssIdentifier, options: Opt.textDecorationOptions},
      ],
    },
    {
      name: 'decorationLine',
      optional: true,
      alternatives: [
        {kind: CssRule.cssIdentifier, options: Opt.textDecorationOptions},
      ],
    },
    {
      name: 'decorationLine',
      optional: true,
      alternatives: [
        {kind: CssRule.cssIdentifier, options: Opt.textDecorationOptions},
      ],
    },
  ],
  shorthand: {},
};

const textDecorationThickness: StyleRule = {
  name: 'textDecorationThickness',
  alias: 'text-decoration-thickness',
  arguments: [
    {
      name: 'thickness',
      optional: false,
      alternatives: [{kind: CssRule.cssNumber, unitRequired: true}],
    },
  ],
  shorthand: {},
};

const textDecorationStyle: StyleRule = {
  name: 'textDecorationStyle',
  alias: 'text-decoration-style',
  arguments: [
    {
      name: 'style',
      optional: false,
      alternatives: [{kind: CssRule.cssIdentifier, options: Opt.decorationPatternOptions}],
    },
  ],
  shorthand: {},
};

const textDecoration: StyleRule = {
  name: 'textDecoration',
  alias: 'text-decoration',
  arguments: [],
  shorthand: {
    [textDecorationLine.name]: textDecorationLine,
    [textDecorationStyle.name]: textDecorationStyle,
    [textDecorationColor.name]: textDecorationColor,
    [textDecorationThickness.name]: textDecorationThickness,
  },
};


export const fontRules = [
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  alignContent,
  alignItems,
  alignSelf,
  textDecorationColor,
  textDecorationLine,
  textDecorationThickness,
  textDecorationStyle,
  textDecoration,
];
