import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import * as N from 'types/nodes';
import { symbolToToken } from '../utils/parse';
import { ExpressionVisitor } from './ExpressionVisitor';
import { AttributeVisitor } from './AttributeVisitor';


export class TemplateVisitor extends BaseVisitor<N.TemplateResult> {
  private readonly expVisitor = new ExpressionVisitor();
  private readonly attributeVisitor = new AttributeVisitor();

  visitTemplate = (ctx: H.TemplateContext): N.TagNode[] => {
    if (ctx.getChildCount() < 1) {
      return [];
    }

    const identifier = ctx.Identifier().symbol;
    const follow = ctx.templateFollow();
    const { siblings, children, closeTag} = this.visitTemplateFollow(follow);
    const attributes = ctx.attributes();
    const properties = attributes?.getChildCount() ? this.attributeVisitor.visitAttributes(attributes) : [];

    const currentTag: N.TagNode = {
      type: 'tag',
      openTag: symbolToToken(identifier),
      closeTag,
      attributes: properties.filter((p: N.TagProperty): p is N.AttributeNode => p.type === 'attribute'),
      directives: properties.filter((p: N.TagProperty): p is N.DirectiveNode => p.type === 'directive'),
      children,
    };

    siblings.unshift(currentTag);
    return siblings;
  };

  visitTemplateFollow = (ctx: H.TemplateFollowContext): N.TemplateFollowNode => {
    const closeTag = ctx.Identifier()?.symbol;
    const body = ctx.templateBody();
    const template = ctx.template();
    const siblings = this.visitTemplate(template);
    const bodyResult = this.visitTemplateBody(body);

    let children: N.ChildNode[] = [];
    if (Array.isArray(bodyResult)) {
      children = bodyResult;
    } else if (bodyResult) {
      if('type' in bodyResult) {
        children = [bodyResult];
      } else {
        console.log('bodyResult', bodyResult);
      }
    }

    return {
      closeTag: closeTag ? symbolToToken(closeTag) : undefined,
      children,
      siblings,
    };
  };

  visitTemplateBody = (ctx: H.TemplateBodyContext | null): N.ChildNode[] => {
    const result: N.ChildNode[] = [];
    if(!ctx) return result;

    const template = ctx.template();
    if(template?.getChildCount() > 0) {
      return this.visitTemplate(template);
    }

    const charData = ctx.charData();
    if(charData?.getChildCount() > 0) {
      const charDataNode= this.visitCharData(charData);
      const next = ctx.templateBody();
      const siblings = this.visitTemplateBody(next);

      siblings.unshift(charDataNode);
      return siblings;
    }

    const exp = ctx.expression();
    if(exp?.getChildCount() > 0) {
      const expression = this.expVisitor.visitExpression(exp);
      const next = ctx.templateBody();
      const siblings = this.visitTemplateBody(next);

      siblings.unshift({
        type: 'expression',
        expression,
      });
      return siblings;
    }

    return result;
  };

  visitCharData = (ctx: H.CharDataContext): N.CharDataNode => {
    const children = ctx.children;
    if(!children) return { type: 'charData', contents: [] };

    const contents = children.map((c) => c.getText());

    return {
      type: 'charData',
      contents,
    };
  };
}