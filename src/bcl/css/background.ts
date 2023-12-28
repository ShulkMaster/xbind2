import { CssRule, StyleRule } from './types';
import * as Opt from './options';

const bgColor: StyleRule = {
  name: 'backgroundColor',
  alias: 'background-color',
  arguments: [{
    name: 'color',
    optional: false,
    alternatives: [{kind: CssRule.cssColor}],
  }],
  shorthand: {},
};

const bgPosition: StyleRule = {
  name: 'backgroundPosition',
  alias: 'background-position',
  arguments: [
    {
      name: 'position',
      optional: false,
      alternatives: [{kind: CssRule.cssIdentifier, options: Opt.bgPositionOptions}],
    },
    {
      name: 'position offset',
      optional: true,
      alternatives: [{kind: CssRule.cssNumber, unitRequired: true}],
    }],
  shorthand: {},
};

const bgRepeat: StyleRule = {
  name: 'backgroundRepeat',
  alias: 'background-repeat',
  arguments: [{
    name: 'repeat',
    optional: false,
    alternatives: [{kind: CssRule.cssIdentifier, options: Opt.bgRepeatOptions}],
  }],
  shorthand: {},
};

const bgSize: StyleRule = {
  name: 'backgroundSize',
  alias: 'background-size',
  arguments: [{
    name: 'size',
    optional: false,
    alternatives: [
      {kind: CssRule.cssIdentifier, options: Opt.bgSizeOptions},
      {kind: CssRule.cssNumber, unitRequired: true},
    ],
  }],
  shorthand: {},
};

const background: StyleRule = {
  arguments: [],
  name: 'background',
  shorthand: {
    [bgColor.name]: bgColor,
    [bgPosition.name]: bgPosition,
    [bgRepeat.name]: bgRepeat,
    [bgSize.name]: bgSize,
  },
};

export const backgroundRules =[
  bgColor,
  bgPosition,
  bgRepeat,
  bgSize,
  background,
];