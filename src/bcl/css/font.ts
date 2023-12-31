import { CssRule, StyleRule } from './types';
import * as Opt from './options';

const fontFamily: StyleRule = {
  name: 'fontFamily',
  alias: 'font-family',
  arguments: [{
    name: 'family',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.fontFamilyOptions}],
  }],
  shorthand: {},
};

const fontSize: StyleRule = {
  name: 'fontSize',
  alias: 'font-size',
  arguments: [{
    name: 'size',
    optional: false,
    alternatives: [{kind: CssRule.cssNumber, unitRequired: true}],
  }],
  shorthand: {},
};

const fontWeight: StyleRule = {
  name: 'fontWeight',
  alias: 'font-weight',
  arguments: [{
    name: 'weight',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.weightOptions}],
  }],
  shorthand: {},
};

export const fontRules = [
  fontFamily,
  fontSize,
  fontWeight,
];