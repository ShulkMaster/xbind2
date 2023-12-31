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

const flexBasis: StyleRule = {
  name: 'flexBasis',
  alias: 'flex-basis',
  arguments: args,
  shorthand: {},
};

const flexShrink: StyleRule = {
  name: 'flexShrink',
  alias: 'flex-shrink',
  arguments: args,
  shorthand: {},
};

const flexGrow: StyleRule = {
  name: 'flexGrow',
  alias: 'flex-grow',
  arguments: args,
  shorthand: {},
};

const flexDirection: StyleRule = {
    name: 'flexDirection',
    alias: 'flex-direction',
    arguments: [{
        name: 'direction',
        optional: false,
        alternatives: [{kind: CssRule.cssIdentifier, options: Opt.flexDirectionOptions}],
    }],
    shorthand: {},
}

const flex: StyleRule = {
  arguments: [],
  name: 'flex',
  shorthand: {
    [flexBasis.name]: flexBasis,
    [flexShrink.name]: flexShrink,
    [flexGrow.name]: flexGrow,
    [flexDirection.name]: flexDirection,
  },
};

export const flexRules =[
  flex,
  flexBasis,
  flexShrink,
  flexGrow,
  flexDirection
];