import {CssArgument, CssRule, StyleRule} from './types';
import * as Opt from './options';

const args: CssArgument[] = [{
  name: 'size',
  optional: false,
  alternatives: [
    {kind: CssRule.cssNumber, unitRequired: true},
    {kind: CssRule.cssIdentifier, options: [Opt.unset]},
  ],
}];


const opacity: StyleRule = {
  name: 'opacity',
  arguments: args,
  shorthand: {}
};

export const opacityRules =[
  opacity
];