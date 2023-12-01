import * as N from 'types/nodes';
import { Logger, makeDirs, Printer, Writer } from 'utils';
import path from 'path';

export class ReactPlugin {
  public readonly outDir = 'outdir\\react\\';
  public constructor() {
    Logger.info('React plugin loaded');
  }

  public writeProgram(program: N.ProgramNode): void {
    const {types, components} = program;
    const baseDir = this.outDir + program.namespace.join(path.sep);
    const printer = new Printer();

    for (const type of types) {
      printer.printType(type);

      for (const component of components) {
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
      printer.appendLine(`const { ${propsWithoutDefault.map(p => p.name.text).join(', ')} } = props;`);
    }

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
          if(child.children.length < 1) {
            printer.appendLine(`<${child.openTag.text} />`, indent);
          } else {
            printer.appendLine(`<${child.openTag.text}>`, indent);
            this.writeTemplate(child.children, printer, indent + 2);
            printer.appendLine(`</${child.openTag.text}>`, indent);
          }
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
}