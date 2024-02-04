import { CssRule, StyleRule } from './types';
import { backgroundRules } from './background';
import { marginRules } from './margin';
import { fontRules } from './font';
import { borderRules } from './border';

export const styleRules: Map<string, StyleRule> = new Map();

backgroundRules.forEach(r => styleRules.set(r.name, r));
marginRules.forEach(r => styleRules.set(r.name, r));
fontRules.forEach(r => styleRules.set(r.name, r));
borderRules.forEach(r => styleRules.set(r.name, r));

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
