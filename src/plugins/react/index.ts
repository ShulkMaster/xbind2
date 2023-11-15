import * as N from 'types/nodes';
import { Logger, Printer } from 'utils';

export class ReactPlugin {
  public constructor() {
    Logger.info('React plugin loaded');
  }

  public writeProgram(program: N.ProgramNode, printer: Printer): void {
    const { types, components } = program;
    for (const component of components) {
      this.writeComponent(component, printer);
    }
  }

  private writeComponent(component: N.ComponentNode, printer: Printer): void {
    const { name, propsType, properties } = component;

    const propType = propsType.typeName.text;
    printer.appendLine(`export type ${propType} = {`);
    for (const property of properties) {
      const propName = property.name.text;
      const annotation = property.typeAnnotation;
      if (annotation.primitive) {
        const type = annotation.name;
        printer.appendLine(`${propName}: ${type};`, 2);
        continue;
      }
      const typeName = annotation.typeName.text;
      printer.appendLine(`${propName}: ${typeName};`, 2);
    }
    printer.appendLine('};');
    printer.crlf();


    printer.appendLine(`export function ${name.text}(props: ${propType}) {`);
    this.writeBody(component, printer);
    printer.appendLine('}');
  }

  private writeBody(component: N.ComponentNode, printer: Printer): void {
    const { properties, template} = component;
    if (properties.length > 0) {
      printer.appendLine(`const { ${properties.map(p => p.name.text).join(', ')} } = props;`);
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
      }
    }
  }
}