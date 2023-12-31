import { CssArgument, CssRule, StyleRule } from './types';
import * as Opt from './options';

const args: CssArgument[] = [{
  name: 'size',
  optional: false,
  alternatives: [
    {kind: CssRule.cssNumber, unitRequired: true},
    {kind: CssRule.cssIdentifier, options: [Opt.unset, Opt.auto]},
  ],
}];

const paddingTop: StyleRule = {
  name: 'paddingTop',
  alias: 'padding-top',
  arguments: args,
  shorthand: {},
};

const paddingBottom: StyleRule = {
  name: 'paddingTop',
  alias: 'padding-top',
  arguments: args,
  shorthand: {},
};

const paddingLeft: StyleRule = {
  name: 'paddingLeft',
  alias: 'padding-left',
  arguments: args,
  shorthand: {},
};

const paddingRight: StyleRule = {
  name: 'paddingRight',
  alias: 'padding-top',
  arguments: args,
  shorthand: {},
};

const padding: StyleRule = {
  arguments: [],
  name: 'padding',
  shorthand: {
    [paddingTop.name]: paddingTop,
    [paddingBottom.name]: paddingBottom,
    [paddingLeft.name]: paddingLeft,
    [paddingRight.name]: paddingRight,
  },
};

export const paddingRules = [
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  padding,
];