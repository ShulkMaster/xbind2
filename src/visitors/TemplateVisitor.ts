import BaseVisitor from 'parser/HaibtVisitor';
import * as H from 'parser/Haibt';
import { CharDataNode, ChildNode, TagNode, TemplateFollowNode, TemplateResult } from 'types/nodes/template';
import { symbolToToken } from '../utils/parse';


export class TemplateVisitor extends BaseVisitor<TemplateResult> {

  visitTemplate = (ctx: H.TemplateContext): TagNode[] => {
    if (ctx.getChildCount() < 1) {
      return [];
    }

    const identifier = ctx.Identifier().symbol;
    const follow = ctx.templateFollow();
    const { siblings, children, closeTag} = this.visitTemplateFollow(follow);

    const currentTag: TagNode = {
      type: 'tag',
      openTag: symbolToToken(identifier),
      closeTag,
      properties: [],
      children,
    };

    siblings.unshift(currentTag);
    return siblings;
  };

  visitTemplateFollow = (ctx: H.TemplateFollowContext): TemplateFollowNode => {
    const closeTag = ctx.Identifier()?.symbol;
    const body = ctx.templateBody();
    const template = ctx.template();
    const siblings = this.visitTemplate(template);
    const bodyResult = this.visitTemplateBody(body);

    let children: ChildNode[] = [];
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

  visitTemplateBody = (ctx: H.TemplateBodyContext | null): ChildNode[] => {
    const result: ChildNode[] = [];
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

    //todo: implement expression

    return result;
  };

  visitCharData = (ctx: H.CharDataContext): CharDataNode => {
    const children = ctx.children;
    if(!children) return { type: 'charData', contents: [] };

    const contents = children.map((c) => c.getText());

    return {
      type: 'charData',
      contents,
    };
  };
}