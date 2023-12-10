import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import * as N from 'types/nodes';
import { RuleNode, StyleKind } from 'types/nodes';
import { symbolToToken } from 'utils/parse';
import { Token } from 'types/token';

type StyleChild = N.RuleNode | N.StyleNode;

export class StyleVisitor extends BaseVisitor<N.StyleVisit> {

  visitStyle = (ctx: H.StyleContext): N.StyleNode => {
    const name = ctx.Identifier();
    const combination = ctx.styleCombine();
    const modifiers = this.visitStyleCombine(combination);
    const styleRules = ctx.styleRules();
    const rules = this.visitStyleRules(styleRules);

    return {
      name: symbolToToken(name.symbol),
      type: 'style',
      subStyles: rules.filter(r => r.type === 'style') as N.StyleNode[],
      rules: rules.filter(r => r.type === 'rule') as RuleNode[],
      modifiers,
    };
  };

  visitStyleCombine = (ctx: H.StyleCombineContext): N.ModifierNode[] => {
    const modifiers: N.ModifierNode[] = [];
    let current: H.StyleCombineContext= ctx;

    while(current?.getChildCount()) {
      const modifier = ctx.stlyeModifier();
      const id = ctx.Identifier();
      const gt = modifier.GreaterThan();

      if(gt) {
        modifiers.push({
          modifier: 'gt',
          name: symbolToToken(gt.symbol),
        });
        continue;
      }

      modifiers.push({
        modifier: 'dot',
        name: symbolToToken(id.symbol),
      });

      current = current.styleCombine();
    }
    return modifiers;
  };


  visitStyleRules = (ctx: H.StyleRulesContext): StyleChild[] => {
    const rules: StyleChild[] = [];
    let current: H.StyleRulesContext = ctx;

    while(current?.getChildCount()) {
      const rule = current.styleRule();
      if(!rule) continue;
      rules.push(this.visitStyleRule(rule));
      current = current.styleRules();
    }
    return rules;
  };

  visitStyleRule = (ctx: H.StyleRuleContext): N.RuleNode | N.StyleNode => {
    const subStyle = ctx.style();
    if(subStyle) {
      return this.visitStyle(subStyle);
    }

    const identifier = ctx.Identifier() || ctx.Color();
    const nodeValue = ctx.styleRuleFollow();
    const ruleValues = this.visitRuleFollow(nodeValue);
    return {
      type: 'rule',
      identifier: symbolToToken(identifier.symbol),
      value: ruleValues,
    };
  };

  visitRuleFollow = (ctx: H.StyleRuleFollowContext): N.StyleValueNode[] => {
    let current: H.StyleRuleFollowContext = ctx;
    const values: N.StyleValueNode[] = [];

    while(current?.getChildCount()) {
      const measure = current.measure();
      if (measure) {
        values.push(this.visitMeasure(measure));
        current = current.styleRuleFollow();
        continue;
      }

      const identifier = current.Identifier();
      if(identifier) {
        values.push({
          type: StyleKind.identifier,
          token: symbolToToken(identifier.symbol),
        });
        current = current.styleRuleFollow();
        continue;
      }

      const color = current.HEX_COLOR();
      values.push({
        type: StyleKind.hex,
        value: symbolToToken(color.symbol),
      });
      current = current.styleRuleFollow();
    }

    return values;
  };

  visitMeasure = (ctx: H.MeasureContext): N.MeasureNode => {
    const value = ctx.NumberValue();
    const unitContext = ctx.measureUnit();
    const unit = this.visitMeasureUnit(unitContext);
    return {
      type: StyleKind.measure,
      value: symbolToToken(value.symbol),
      unit,
    };
  };

  visitMeasureUnit = (ctx: H.MeasureUnitContext | null): Token | undefined => {
    if(!ctx) return undefined;

    const unit = ctx.Px() || ctx.Em() || ctx.Rem() || ctx.Mod();
    if(!unit) return undefined;

    return symbolToToken(unit.symbol);
  };
}