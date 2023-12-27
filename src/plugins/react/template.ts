import { ComponentTable, Resolver } from 'scope';
import { Printer, Writer } from 'utils';
import * as N from 'types/nodes';
import { ConstantExpressionNode, ExpressionKind, TagNode } from 'types/nodes';
import { ReturnType } from 'types/nodes/native';

export class Template {
  private readonly resolver: Resolver;
  private comp: ComponentTable = {} as ComponentTable;
  private compNode: N.ComponentNode = {} as N.ComponentNode;

  constructor(resolver: Resolver) {
    this.resolver = resolver;
  }

  public writeJsx(comp: N.ComponentNode, printer: Printer): void {
    this.comp = this.resolver.resolveComponent(comp.scope, comp.name.text);
    this.compNode = comp;
    const template = comp.template;

    if(template.children.length <= 0) {
      printer.appendLine('return null;');
      return;
    }

    const shouldFragment = this.shouldUseFragment();
    printer.append('return ', 2);
    if(shouldFragment) {
      printer.appendLine('(');
      printer.appendLine('<>', 4);
      this.writeTemplate(template.children, printer, 6);
      printer.appendLine('</>', 4);
      printer.appendLine(');', 2);
      return;
    }

    this.writeTemplate(template.children, printer, 4);
    printer.appendLine(';');
  }

  private shouldUseFragment(): boolean {
    const children = this.compNode.template.children;
    if(children.length > 2) {
      return true;
    }

    if(children.length === 2) {
      const directives = children[0].directives;
      const hasIf = directives.some(d => d.kind === 'if');
      const hasElse = directives.some(d => d.kind === 'else');
      const hasTemplate = children[1].directives.some(d => d.kind === 'template');
      return !(hasIf && hasElse && hasTemplate);
    }

    return children.length !== 1;
  }

  private isRootTag(tag: N.ChildNode): boolean {
    const children = this.compNode.template.children;
    if(children.length > 2) {
      return false;
    }

    if(children.length === 2) {
      const directives = children[0].directives;
      const hasIf = directives.some(d => d.kind === 'if');
      const hasElse = directives.some(d => d.kind === 'else');
      const hasTemplate = children[1].directives.some(d => d.kind === 'template');
      const hasSignature = hasIf && hasElse && hasTemplate;
      return hasSignature && children.includes(tag as TagNode);
    }

    return this.compNode.template.children[0] === tag;
  }

  private writeTemplate(template: N.ChildNode[], printer: Printer, indent: number): void {
    for (const child of template) {
      switch (child.type) {
        case 'tag':
          this.writeTag(child, printer, indent);
          break;
        case 'charData':
          printer.appendLine(child.contents.join(' '), indent);
          break;
        case 'expression':
          printer.appendLine(`{${Writer.writeExpression(child.expression)}}`, indent);
          break;
      }
    }
  }

  private writeConditionalTag(tag: N.TagNode, printer: Printer, indent: number): void {
    const hasChildren = tag.children.length > 0;

    if(hasChildren) {
      printer.appendLine('(');
      printer.append(`<${tag.openTag.text}`, indent);
      this.writeAttributes(tag, printer);
      printer.appendLine('>');
      this.writeTemplate(tag.children, printer, indent + 2);
      printer.appendLine(`</${tag.closeTag?.text}>`, indent);
      printer.append(')', indent - 2);
      return;
    }

    const isInRoot = this.isRootTag(tag);
    const identFor = isInRoot ? indent : 0;
    printer.append(`<${tag.openTag.text}`, identFor);
    this.writeAttributes(tag, printer);
    printer.append(' />');
  }

  private writeTag(tag: N.TagNode, printer: Printer, indent: number): void {
    const isRootTag = this.isRootTag(tag);
    const { directives} = tag;

    const ifDirective = directives.find(d => d.kind === 'if');
    const elseDirective = directives.find(d => d.kind === 'else');
    const templateDirective = directives.find(d => d.kind === 'template');

    if (templateDirective) {
      const exp = templateDirective.value as ConstantExpressionNode;
      this.writeElseTemplate(exp.token.text, tag, printer, indent + 2);
      return;
    }

    if (elseDirective && ifDirective) {
      this.writeIfPair(tag, printer, indent);
      return;
    }

    if (ifDirective) {
      if (isRootTag) {
        printer.append(`${Writer.writeExpression(ifDirective.value)} && `);
        this.writeConditionalTag(tag, printer, indent);
        return;
      }

      printer.append(`{${Writer.writeExpression(ifDirective.value)} && `, indent);
      this.writeConditionalTag(tag, printer, indent + 2);
      printer.appendLine('}');

      return;
    }

    if (isRootTag) {
      printer.appendLine('(');
    }
    printer.append(`<${tag.openTag.text}`, indent);
    this.writeAttributes(tag, printer);
    const hasChildren = tag.children.length > 0;
    if (hasChildren) {
      printer.appendLine('>');
      this.writeTemplate(tag.children, printer, indent + 2);
      printer.appendLine(`</${tag.closeTag?.text}>`, indent);
    } else {
      printer.appendLine(' />');
    }

    if (isRootTag) {
      printer.append(')', indent - 2);
    }
  }

  private writeAttributes(tag: N.TagNode, printer: Printer): void {
    for (const attr of tag.attributes) {
      const { name, value } = attr;
      const attName = name.text === 'class' ? 'className' : name.text;
      if (!value) {
        printer.append(` ${attName}`);
        continue;
      }

      if (value.kind === ExpressionKind.constantExpression && value.primitiveType === ReturnType.String) {
        printer.append(` ${attName}=${value.token.text}`);
        continue;
      }

      printer.append(` ${attName}={${Writer.writeExpression(value)}}`);
    }
  }

  private writeIfPair(tag: N.TagNode, printer: Printer, indent: number): void {
    const directiveElse = tag.directives.find(d => d.kind === 'else')!;
    const templateName = (directiveElse.value as ConstantExpressionNode).token.text;
    const pair = this.comp.templateSymbols.ifElsePairs.get(templateName);

    if (!pair) {
      throw new Error(`Template pair ${templateName} not found`);
    }

    const isRootTag = this.isRootTag(tag);
    if (pair.areContiguous) {
      const expression = Writer.writeExpression(pair.expression);
      if (isRootTag) {
        printer.append(`${expression} ? `);
        this.writeConditionalTag(tag, printer, indent);
        printer.appendLine(' :',);
      } else {
        printer.append(`{${expression} ? `, indent);
        this.writeConditionalTag(tag, printer, indent + 2);
        printer.appendLine(' :',);
        printer.append('', indent);
      }
    }

    // printer.append(`{${pair.identifierExpResult} && `, indent);
    // if(tag.children.length < 1) {
    //   printer.append(`<${tag.openTag.text} />`);
    // } else {
    //   printer.appendLine('(');
    //   printer.appendLine(`<${tag.openTag.text}>`, indent + 2);
    //   this.writeTemplate(tag.children, printer, indent + 4);
    //   printer.appendLine(`</${tag.openTag.text}>`, indent + 2);
    //   printer.appendLine(')}', indent);
    // }
  }

  private writeElseTemplate(templateName: string, tag: N.TagNode, printer: Printer, indent: number): void {
    const pair = this.comp.templateSymbols.ifElsePairs.get(templateName);
    if (!pair) {
      throw new Error(`Template pair ${templateName} not found`);
    }

    const isInRoot =  this.isRootTag(tag);
    if(pair.areContiguous) {
      if(isInRoot) {
        printer.append('', indent - 4);
      }
      this.writeConditionalTag(tag, printer, indent);
      if(!isInRoot) {
        printer.append('}');
        printer.crlf();
      }
      return;
    }

    printer.append(`{!${pair.identifierExpResult} && `, indent);
    this.writeConditionalTag(tag, printer, indent + 2);
    printer.append('}');
  }
}