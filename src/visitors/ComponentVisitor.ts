import BaseVisitor from 'parser/HaibtVisitor';
import { ComponentContext } from 'parser/Haibt';
import { ComponentResult, ComponentNode, PropertyNode } from 'types/nodes/component';
import { symbolToToken } from '../utils/parse';

export class ComponentVisitor extends BaseVisitor<ComponentResult> {

    visitComponent = (ctx: ComponentContext): ComponentNode => {
      const component = ctx.Component().symbol;
      const name = ctx.Identifier().symbol;
      const OBrace = ctx.OBrace().symbol;
      const CBrace = ctx.CBrace().symbol;

      return {
        type: 'component',
        component: symbolToToken(component),
        name: symbolToToken(name),
        OBrace: symbolToToken(OBrace),
        CBrace: symbolToToken(CBrace),
        properties: [],
      };
    };
}