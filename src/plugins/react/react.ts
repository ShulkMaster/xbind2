import * as N from 'types/nodes';
import { ConstantExpressionNode, ExpressionKind } from 'types/nodes';
import { Logger, makeDirs, Printer, Writer } from 'utils';
import path from 'path';
import { ComponentTable, Resolver } from 'scope';
import { ReturnType } from 'types/nodes/native';
import { StyleWriter } from 'utils/StyleWriter';
import { Template } from './template';
import { pTag } from '../../bcl/tags';

export class ReactPlugin {
  private readonly outDir: string;
  private resolver: Resolver = {} as Resolver;
  private currentComponent: ComponentTable = {} as ComponentTable;
  private temp: Template = {} as Template;

  constructor(out: string) {
    this.outDir = out;
    Logger.info('React plugin loaded');
  }

  public setResolver(resolver: Resolver): void {
    this.resolver = resolver;
    this.temp = new Template(resolver);
  }

  public writeProgram(program: N.ProgramNode): void {
    const {types, components} = program;
    const baseDir = path.join(this.outDir, ...program.scope);
    const fileName = path.basename(program.sourceFile, '.hbt');
    const printer = new Printer();
    const hasStyles = program.styles.length > 0;

    printer.appendLine('//@ts-nocheck');
    if (hasStyles) {
      printer.appendLine(`import './${fileName}.css';`);
      printer.crlf();
    }

    for (const type of types) {
      printer.printType(type);
    }

    for (const component of components) {
      this.currentComponent = this.resolver.resolveComponent(component.scope, component.name.text);
      this.writeComponent(component, printer);
    }

    const typeFilename = [baseDir, fileName].join(path.sep);
    makeDirs(typeFilename);
    this.writeStyles(program.styles, typeFilename + '.css');
    printer.flushToFile(typeFilename + '.tsx');
  }

  private writeStyles(styles: N.StyleNode[], fileName: string): void {
    const printer = new Printer();
    const writer = new StyleWriter(printer);
    for (const style of styles) {
      writer.writeStyle(style, 0);
    }
    printer.flushToFile(fileName);
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
    const properties = component.properties;
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

    this.temp.writeJsx(component, printer);
  }
}