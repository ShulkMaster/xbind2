import {
  ChildNode,
  ConstantExpressionNode,
  DirectiveNode,
  ExpressionKind,
  ExpressionResult,
  TagNode,
  TemplateNode,
} from 'types/nodes';
import { getStringText } from 'utils/text';

type IfElsePair = {
  expression: ExpressionResult;
  areContiguous: boolean;
  identifierExpResult: string;
}

export class TemplateSymbols {
  private readonly template: TemplateNode;
  public readonly ifElsePairs = new Map<string, IfElsePair>();

  constructor(n: TemplateNode) {
    this.template = n;
  }

  public fill(): void {
    this.innerFill(this.template.children);
  }

  public innerFill(children: ChildNode[]): void {
    for (const child of children) {
      if (child.type !== 'tag') {
        continue;
      }
      const tag = child;
      const directives = tag.directives;
      this.makePairs(tag, directives as DirectiveNode[]);
      this.innerFill(tag.children);
    }
  }

  private makePairs(tag: TagNode, directives: DirectiveNode[]): void {
    const ifElsePairs = this.ifElsePairs;
    const ifDirective = directives.find(d => d.kind === 'if');
    const elseDirective = directives.find(d => d.kind === 'else');

    if (ifDirective && elseDirective) {
      const expression = ifDirective.value;
      const elseExp = elseDirective.value as ConstantExpressionNode;
      const contiguous = this.isTemplateContiguous(tag, elseExp.token.text);

      let identifierExpResult = `${getStringText(elseExp.token.text)}ExpValue`;
      if (expression.kind === ExpressionKind.constantExpression) {
        identifierExpResult = expression.token.text;
      }

      if (expression.kind === ExpressionKind.PrimaryExpression && expression.identifier) {
        identifierExpResult = expression.identifier.text;
      }

      ifElsePairs.set(elseExp.token.text, {
        expression: expression,
        areContiguous: contiguous,
        identifierExpResult,
      });
    }
  }

  private isTemplateContiguous(tagIf: TagNode, templateName: string): boolean {
    const parentTemplate = this.findParentTemplate(tagIf, this.template.children);
    const tagGroup = parentTemplate.children;

    const tagIfIndex = tagGroup.indexOf(tagIf);
    const previousTag = tagGroup[tagIfIndex - 1];

    if (previousTag?.type === 'tag') {
      const directives = previousTag.directives;
      const templateDirective = directives.find(d => d.kind === 'template');
      if (templateDirective && templateDirective.name.text === templateName) {
        // Swap the previous tag with the tagIf to keep order
        tagGroup[tagIfIndex - 1] = tagGroup[tagIfIndex];
        tagGroup[tagIfIndex] = previousTag;

        return true;
      }
    }

    const tagIfFollow = tagGroup[tagIfIndex + 1];
    if (tagIfFollow?.type === 'tag') {
      const directives = tagIfFollow.directives;
      const templateDirective = directives.find(d => d.kind === 'template');

      if(!templateDirective) {
        return false;
      }

      const templateId = templateDirective.value as ConstantExpressionNode;
      return templateId.token.text === templateName;
    }

    return false;
  }

  private findParentTemplate(tagIf: TagNode, roots: ChildNode[]): TagNode | TemplateNode {
    for (const root of roots) {
      if (root.type !== 'tag') {
        continue;
      }

      const inRoot = root.children.indexOf(tagIf) !== -1;
      if (inRoot) {
        return root;
      }

      const parent = this.findParentTemplate(tagIf, root.children);
      if (parent) {
        return parent;
      }
    }

    return this.template;
  }

}