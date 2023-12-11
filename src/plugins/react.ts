import * as N from 'types/nodes';
import { Logger, makeDirs, Printer, Writer } from 'utils';
import path from 'path';
import { ConstantExpressionNode } from 'types/nodes';
import { ComponentTable, Resolver } from 'scope';

export class ReactPlugin {
  private readonly outDir: string;
  private resolver: Resolver = {} as Resolver;
  private currentComponent: ComponentTable = {} as ComponentTable;

  constructor(out: string) {
    this.outDir = out;
    Logger.info('React plugin loaded');
  }

  public setResolver(resolver: Resolver): void {
    this.resolver = resolver;
  }

  public writeProgram(program: N.ProgramNode): void {
    const {types, components} = program;
    const baseDir = path.join(this.outDir, ...program.scope);
    const printer = new Printer();

    for (const type of types) {
      printer.printType(type);

      for (const component of components) {
        this.currentComponent = this.resolver.resolveComponent(component.scope, component.name.text);
        this.writeComponent(component, printer);
      }

      const fileName = path.basename(program.sourceFile, '.hbt');
      const typeFilename = [baseDir, fileName].join(path.sep) + '.tsx';
      makeDirs(typeFilename);
      printer.flushToFile(typeFilename);
    }
  }

  private writeComponent(component: N.ComponentNode, printer: Printer): void {
    const { name, propsTypeName } = component;

    if (propsTypeName) {
      printer.appendLine(`export function ${name.text}(props: ${propsTypeName}) {`);
    } else {
      printer.appendLine(`export function ${name.text}() {`);
    }
    this.writeBody(component, printer);
    printer.appendLine('}');
  }

  private writeBody(component: N.ComponentNode, printer: Printer): void {
    const { properties, template} = component;
    const propsWithDefault = properties.filter(p => p.initializer);
    const propsWithoutDefault = properties.filter(p => !p.initializer);

    for (const prop of propsWithDefault) {
      const propName = prop.name.text;
      const propValue = Writer.writeExpression(prop.initializer!);
      printer.appendLine(`const ${propName} = props.${propName} ?? ${propValue};`, 2);
    }

    if (propsWithoutDefault.length > 0) {
      printer.appendLine(`const { ${propsWithoutDefault.map(p => p.name.text).join(', ')} } = props;`, 2);
    }

    const templateTable = this.currentComponent.templateSymbols;
    for (const pair of templateTable.ifElsePairs.values()) {
      if(pair.areContiguous) continue;
      printer.appendLine(`const ${pair.identifierExpResult} = ${Writer.writeExpression(pair.expression)};`, 2);
    }
    printer.crlf();

    if(template.children.length <= 0) {
      printer.appendLine('return null;');
      return;
    }

    printer.appendLine('return (', 2);
    if(template.children.length > 1) {
      printer.appendLine('<>', 4);
      this.writeTemplate(template.children, printer, 6);
      printer.appendLine('</>', 4);
      printer.appendLine(');', 2);
      return;
    }

    this.writeTemplate(template.children, printer, 4);
    printer.appendLine(');',2);
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

  private writeTag(tag: N.TagNode, printer: Printer, indent: number): void {
    const attribs = tag.properties.filter(p => p.type === 'attribute') as N.AttributeNode[];
    const directives = tag.properties.filter(p => p.type === 'directive') as N.DirectiveNode[];

    const ifDirective = directives.find(d => d.kind === 'if');
    const elseDirective = directives.find(d => d.kind === 'else');
    const templateDirective = directives.find(d => d.kind === 'template');

    if(templateDirective) {
      const exp = templateDirective.value as ConstantExpressionNode;
      this.writeElseTemplate(exp.token.text, tag, printer, indent);
      return;
    }

    if(elseDirective && ifDirective) {
      const exp = elseDirective.value as ConstantExpressionNode;
      this.writeIfPair(exp.token.text, tag, printer, indent);
      return;
    }

    if (ifDirective) {
      printer.append(`{${Writer.writeExpression(ifDirective.value)} && `, indent);
      if(tag.children.length < 1) {
        printer.append(`<${tag.openTag.text} />`);
      } else {
        printer.appendLine('(');
        printer.appendLine(`<${tag.openTag.text}>`, indent + 2);
        this.writeTemplate(tag.children, printer, indent + 4);
        printer.appendLine(`</${tag.openTag.text}>`, indent + 2);
        printer.appendLine(')}', indent);
      }

      return;
    }

    if(tag.children.length < 1) {
      printer.append(`<${tag.openTag.text} />`);
    } else {
      printer.appendLine(`<${tag.openTag.text}>`, indent);
      this.writeTemplate(tag.children, printer, indent + 2);
      printer.appendLine(`</${tag.openTag.text}>`, indent);
    }
  }

  private writeIfPair(templateName: string, tag: N.TagNode, printer: Printer, indent: number): void {
    const templateTable = this.currentComponent.templateSymbols;

    const pair = templateTable.ifElsePairs.get(templateName);
    if (!pair) {
      throw new Error(`Template pair ${templateName} not found`);
    }

    if(pair.areContiguous) {
      const expression = Writer.writeExpression(pair.expression);
      printer.append(`{${expression} ? `, indent);
      if(tag.children.length < 1) {
        printer.appendLine(`<${tag.openTag.text} />`, indent + 2);
        printer.appendLine(' : ', indent + 2);
      } else {
        printer.appendLine('(');
        printer.appendLine(`<${tag.openTag.text}>`, indent + 2);
        this.writeTemplate(tag.children, printer, indent + 4);
        printer.appendLine(`</${tag.openTag.text}>`, indent + 2);
        printer.appendLine(') :', indent);
      }
      return;
    }

    printer.append(`{${pair.identifierExpResult} && `, indent);
    if(tag.children.length < 1) {
      printer.append(`<${tag.openTag.text} />`);
    } else {
      printer.appendLine('(');
      printer.appendLine(`<${tag.openTag.text}>`, indent + 2);
      this.writeTemplate(tag.children, printer, indent + 4);
      printer.appendLine(`</${tag.openTag.text}>`, indent + 2);
      printer.appendLine(')}', indent);
    }
  }

  private writeElseTemplate(templateName: string, tag: N.TagNode, printer: Printer, indent: number): void {
    const pair = this.currentComponent.templateSymbols.ifElsePairs.get(templateName);
    if (!pair) {
      throw new Error(`Template pair ${templateName} not found`);
    }

    if(pair.areContiguous) {
      if(tag.children.length < 1) {
        printer.appendLine(`<${tag.openTag.text} />`);
        printer.appendLine('}', indent);
      } else {
        printer.appendLine('(', indent);
        printer.appendLine(`<${tag.openTag.text}>`, indent + 2);
        this.writeTemplate(tag.children, printer, indent + 4);
        printer.appendLine(`</${tag.openTag.text}>`, indent + 2);
        printer.appendLine(')}', indent);
      }
      return;
    }

    printer.append(`{!${pair.identifierExpResult} && `, indent);
    if(tag.children.length < 1) {
      printer.appendLine(`<${tag.openTag.text} /> }`);
    } else {
      printer.appendLine('(');
      printer.appendLine(`<${tag.openTag.text}>`, indent + 2);
      this.writeTemplate(tag.children, printer, indent + 4);
      printer.appendLine(`</${tag.openTag.text}>`, indent + 2);
      printer.appendLine(')}', indent);
    }
  }
}