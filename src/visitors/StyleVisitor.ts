import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import * as N from 'types/nodes';
import { symbolToToken } from 'utils/parse';

export class StyleVisitor extends BaseVisitor<N.StyleVisit> {

  visitStyle = (ctx: H.StyleContext): N.StyleNode => {
    const name = ctx.Identifier();
    const combination = ctx.styleCombine();
    const modifiers = this.visitStyleCombine(combination);

    return {
      name: symbolToToken(name.symbol),
      type: 'style',
      subStyles: [],
      rules: [],
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
}