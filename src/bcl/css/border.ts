import { CssRule, StyleRule } from './types';
import * as Opt from './options';

const borderRadius: StyleRule = {
  name: 'borderRadius',
  alias: 'border-radius',
  arguments: [{
    name: 'radius',
    optional: false,
    alternatives: [{kind: CssRule.cssNumber, unitRequired: true}],
  }],
  shorthand: {},
};

const borderWidth: StyleRule = {
  name: 'borderWidth',
  alias: 'border-width',
  arguments: [{
    name: 'width',
    optional: false,
    alternatives: [{kind: CssRule.cssNumber, unitRequired: true}],
  }],
  shorthand: {},
};

const borderColor: StyleRule = {
  name: 'borderColor',
  alias: 'border-color',
  arguments: [{
    name: 'color',
    optional: false,
    alternatives: [{kind: CssRule.cssColor}],
  }],
  shorthand: {},
};

const borderStyle: StyleRule = {
    name: 'borderStyle',
    alias: 'border-style',
    arguments: [{
        name: 'style',
        optional: false,
        alternatives: [{kind: CssRule.cssIdentifier, options: Opt.decorationPatternOptions}],
    }],
    shorthand: {},
}

const border: StyleRule = {
    arguments: [],
    name: 'border',
    shorthand: {
        [borderWidth.name]: borderWidth,
        [borderColor.name]: borderColor,
        [borderStyle.name]: borderStyle,
    },
};

export const borderRules = [
  border,
  borderRadius,
  borderWidth,
  borderColor,
  borderStyle,
];
