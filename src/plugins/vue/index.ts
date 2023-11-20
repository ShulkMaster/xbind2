import * as N from 'types/nodes';
import { Logger, Printer } from 'utils';

export class VuePlugin {
  public constructor() {
    Logger.info('Vue plugin loaded');
  }

  public writeProgram(program: N.ProgramNode, printer: Printer): void {
    const { types, components } = program;
    for (const component of components) {
      this.writeComponent(component, printer);
    }
  }

  private writeComponent(component: N.ComponentNode, printer: Printer): void {
    this.writeScript(component, printer);
    printer.crlf();
    this.writeTemplate(component, printer);
  }

  private writeScript(component: N.ComponentNode, printer: Printer): void {
    const { propsType, properties } = component;

    printer.appendLine('<script setup lang="ts">');

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
    printer.appendLine(`defineProps<${propType}>();`);
    printer.appendLine('</script>');
  }

  private writeSetup(component: N.ComponentNode, printer: Printer): void {
    const { properties, template } = component;

    printer.appendLine('setup(props) {', 2);
    printer.appendLine('return {', 4);

    for (const property of properties) {
      const propName = property.name.text;
      printer.appendLine(`${propName}: toRef(props, '${propName}'),`, 6);
    }

    printer.appendLine('};', 4);
    printer.appendLine('},', 2);
  }

  private writeTemplate(component: N.ComponentNode, printer: Printer): void {
    const { template } = component;
    printer.appendLine('<template>');
    this.writeTemplateNodes(template.children, printer, 2);
    printer.appendLine('</template>');
  }

  private writeTemplateNodes(template: N.ChildNode[], printer: Printer, indent: number): void {
    for (const child of template) {
      switch (child.type) {
        case 'tag':
          if(child.children.length < 1) {
            printer.appendLine(`<${child.openTag.text} />`, indent);
          } else {
            printer.appendLine(`<${child.openTag.text}>`, indent);
            this.writeTemplateNodes(child.children, printer, indent + 2);
            printer.appendLine(`</${child.openTag.text}>`, indent);
          }
          break;
        case 'charData':
          printer.appendLine(child.contents.join(' '), indent);
          break;
      }
    }
  }

  private formatName(name: string): string {
    // Regular expression to match camelCase or PascalCase
    const camelOrPascalCaseRegex = /^[A-Z]?[a-z]+[A-Z][a-zA-Z]*$/;

    if (camelOrPascalCaseRegex.test(name)) {
      return name;
    } else {
      return `The${name}`;
    }
  }
}
