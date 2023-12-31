import { CssRule, StyleRule } from './types';
import * as Opt from './options';

const alignContent: StyleRule = {
  name: 'alignContent',
  alias: 'align-content',
  arguments: [{
    name: 'flex',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.flexAlignOptions}],
  }],
  shorthand: {},
};

const alignItems: StyleRule = {
  name: 'alignItems',
  alias: 'align-items',
  arguments: [{
    name: 'flex',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.flexAlignOptions}],
  }],
  shorthand: {},
};

const alignSelf: StyleRule = {
  name: 'alignSelf',
  alias: 'align-self',
  arguments: [{
    name: 'flex',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.flexAlignOptions}],
  }],
  shorthand: {},
};

export const alignRules = [
    alignContent,
    alignItems,
    alignSelf,
];