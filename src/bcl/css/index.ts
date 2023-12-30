import { CssRule, StyleRule } from './types';
import { backgroundRules } from './background';
import { marginRules } from './margin';
import { flexRules } from './flex';
import {opacityRules} from "./opacity";

export const styleRules: Map<string, StyleRule> = new Map();

backgroundRules.forEach(r => styleRules.set(r.name, r));
marginRules.forEach(r => styleRules.set(r.name, r));
flexRules.forEach(r  => styleRules.set(r.name, r));
opacityRules.forEach(r => styleRules.set(r.name, r));

styleRules.set('color', {
  name: 'color',
  alias: 'color',
  arguments: [{
    optional: false,
    name: 'color',
    alternatives: [{ kind: CssRule.cssColor }],
  }],
  shorthand: {},
});

styleRules.set('width', {
  name: 'width',
  alias: 'width',
  arguments: [{
    optional: false,
    name: 'width',
    alternatives: [{ kind: CssRule.cssNumber, unitRequired: true }],
  }],
  shorthand: {},
});

styleRules.set('height', {
  name: 'height',
  alias: 'height',
  arguments: [{
    optional: false,
    name: 'height',
    alternatives: [{ kind: CssRule.cssNumber, unitRequired: true }],
  }],
  shorthand: {},
});