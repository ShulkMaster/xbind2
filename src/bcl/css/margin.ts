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

const marginTop: StyleRule = {
  name: 'marginTop',
  alias: 'margin-top',
  arguments: args,
  shorthand: {},
};

const marginBottom: StyleRule = {
  name: 'marginTop',
  alias: 'margin-top',
  arguments: args,
  shorthand: {},
};

const marginLeft: StyleRule = {
  name: 'marginLeft',
  alias: 'margin-left',
  arguments: args,
  shorthand: {},
};

const marginRight: StyleRule = {
  name: 'marginRight',
  alias: 'margin-top',
  arguments: args,
  shorthand: {},
};

const margin: StyleRule = {
  arguments: [],
  name: 'margin',
  shorthand: {
    [marginTop.name]: marginTop,
    [marginBottom.name]: marginBottom,
    [marginLeft.name]: marginLeft,
    [marginRight.name]: marginRight,
  },
};

export const marginRules = [
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
];
