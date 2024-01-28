import { ModuleTable, res } from 'scope';
import { ChildNode, ComponentNode, ExpressionKind, ExpressionResult, ProgramNode } from 'types/nodes';
import { ReturnType } from 'types/nodes/native';

export class TemplateReplacer {

  replaceStyles(program: ProgramNode): void {
    const module = res.getModule(program.scope);
    if(!module) {
      throw new Error(`Module ${program.scope} not found`);
    }

    for (const component of program.components) {
      this.replaceStylesInComp(module, component);
    }
  }

  private replaceStylesInComp(table: ModuleTable, component: ComponentNode): void {
    // todo: replace styles in props and variables
    const template = component.template.children;
    this.replaceStyleInTags(table, template);
  }

  private replaceStyleInTags(table: ModuleTable, tags: ChildNode[]): void {
    for (const tag of tags) {
      if(tag.type !== 'tag') {
        continue;
      }
      tag.attributes.forEach(attr => {
        const value = attr.value;
        if (value) {
          attr.value = this.replaceStylesInExp(table, value);
        }
      });
      this.replaceStyleInTags(table, tag.children);
    }
  }

  private replaceStylesInExp(table: ModuleTable, exp: ExpressionResult): ExpressionResult {
    if(exp.kind === ExpressionKind.PostfixExpression) {
      const { primary, follow, member} = exp;
      if(primary?.kind === ExpressionKind.PrimaryExpression && !follow) {
        const primaryId = primary.identifier;

        if(primaryId && member) {
          // get the fqnd of the style
          const style = table.styles.getStyle(primaryId.text);
          const className = style?.classes.has(member.text);
          if (className) {
            member.text = `"${member.text}"`;
            return {
              kind: ExpressionKind.constantExpression,
              primitiveType: ReturnType.String,
              token: member,
            };
          }
        }
      }

      return exp;
    }

    switch (exp.kind) {
      case ExpressionKind.constantExpression: return exp;
      case ExpressionKind.ObjectLiteralExpression: {
        exp.elements.forEach(prop => {
          prop.value = this.replaceStylesInExp(table, prop.value);
        });
        return exp;
      }
      case ExpressionKind.PrimaryExpression: {
        const { groupExpression } = exp;
        if (groupExpression) {
          groupExpression.expression = this.replaceStylesInExp(table, groupExpression.expression);
        }
        return exp;
      }
      case ExpressionKind.UnaryExpression: {
        exp.right = this.replaceStylesInExp(table, exp.right);
        return exp;
      }
      case ExpressionKind.CastExpression: {
        exp.left = this.replaceStylesInExp(table, exp.left);
        // todo missing the cast typing info
        return exp;
      }
      case ExpressionKind.MultiplicativeExpression: {
        exp.left = this.replaceStylesInExp(table, exp.left);
        exp.right = this.replaceStylesInExp(table, exp.right);
        return exp;
      }
      case ExpressionKind.AdditiveExpression: {
        exp.left = this.replaceStylesInExp(table, exp.left);
        exp.right = this.replaceStylesInExp(table, exp.right);
        return exp;
      }
      case ExpressionKind.AssignmentExpression:
      case ExpressionKind.ConditionalExpression:
      case ExpressionKind.TernaryExpression:
      case ExpressionKind.LogicalOrExpression:
      case ExpressionKind.LogicalAndExpression:
      case ExpressionKind.EqualityExpression:
      case ExpressionKind.RelationalExpression:
      default:
        throw new Error('unimplemented');
    }
  }
}