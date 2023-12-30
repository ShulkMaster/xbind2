import {CssArgument, CssRule, StyleRule} from './types';
import * as Opt from './options';

const args: CssArgument[] = [{
  name: 'size',
  optional: false,
  alternatives: [
    {kind: CssRule.cssNumber, unitRequired: true},
    {kind: CssRule.cssIdentifier, options: [Opt.unset, Opt.auto,Opt.initial,Opt.none]},
  ],
}];

const overflowX: StyleRule = {
  name: 'overflowX',
  alias: 'overflow-x',
  arguments: args,
  shorthand: {},
};

const overflowY: StyleRule = {
  name: 'overflowY',
  alias: 'overflow-y',
  arguments: args,
  shorthand: {},
};

const overflow: StyleRule = {
  name: 'overflow',
  alias: 'overflow',
  arguments: args,
  shorthand: {
    [overflowX.name]: overflowX,
    [overflowY.name]: overflowY,
  },
};

export const overflowRules =[
    overflowX,
    overflowY,
    overflow,
];