import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import * as N from 'types/nodes';
import { ClassChild, StyleKind } from 'types/nodes';
import { symbolToToken } from 'utils/parse';
import { Token } from 'types/token';

export class StyleVisitor extends BaseVisitor<N.StyleVisit> {

  visitStyle = (ctx: H.StyleContext): N.StyleNode => {
    const name = ctx.Identifier();
    const classesContext = ctx.styleClasses();
    const classes = this.visitStyleClasses(classesContext);

    return {
      name: symbolToToken(name.symbol),
      type: 'style',
      classes,
    };
  };

  visitStyleClasses = (ctx: H.StyleClassesContext): N.ClassNode[] => {
    const classes: N.ClassNode[] = [];
    let current: H.StyleClassesContext = ctx;

    while(current?.getChildCount()) {
      const classContext = current.styleClass();
      classes.push(this.visitStyleClass(classContext));
      current = current.styleClasses();
    }
    return classes;
  };

  visitStyleClass = (ctx: H.StyleClassContext): N.ClassNode => {
    const nameToken = ctx.Identifier();
    const rulesContext = ctx.styleRules();
    const modifiersContext = ctx.styleCombine();
    const rules = this.visitStyleRules(rulesContext);
    return {
      type: 'class',
      name: symbolToToken(nameToken.symbol),
      rules: rules.filter((r): r is N.RuleNode => r.type === 'rule'),
      subClasses: rules.filter((r): r is N.ClassNode => r.type === 'class'),
      modifiers: this.visitStyleCombine(modifiersContext),
    };
  };

  visitStyleCombine = (ctx: H.StyleCombineContext): N.ModifierNode[] => {
    const modifiers: N.ModifierNode[] = [];
    let current: H.StyleCombineContext= ctx;

    while(current?.getChildCount() > 0) {
      const modifier = current.stlyeModifier();
      const id = current.Identifier();
      const gt = modifier.GreaterThan();

      if(gt) {
        modifiers.push({
          modifier: 'gt',
          name: symbolToToken(id.symbol),
        });
        current = current.styleCombine();
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


  visitStyleRules = (ctx: H.StyleRulesContext): ClassChild[] => {
    const rules: ClassChild[] = [];
    let current: H.StyleRulesContext = ctx;

    while(current?.getChildCount()) {
      const rule = current.styleRule();
      if(!rule) continue;
      rules.push(this.visitStyleRule(rule));
      current = current.styleRules();
    }
    return rules;
  };

  visitStyleRule = (ctx: H.StyleRuleContext): N.ClassChild => {
    const subStyle = ctx.styleClass();
    if(subStyle) {
      return this.visitStyleClass(subStyle);
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