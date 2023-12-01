import * as N from 'types/nodes';
import { Logger, makeDirs, Printer, Writer } from 'utils';
import path from 'path';
import { TypeDeclarationNode } from 'types/nodes';

export class VuePlugin {
  public readonly outDir = 'outdir\\vue\\';

  public constructor() {
    Logger.info('Vue plugin loaded');
  }

  private typesToImport(types: TypeDeclarationNode[]): string[] {
    const imports: string[] = [];
    for (const type of types) {
      const typeName = type.typeName;
      if (typeof typeName === 'string') {
        imports.push(typeName);
        continue;
      }

      imports.push(typeName.text);
    }
    return imports;
  }

  public writeProgram(program: N.ProgramNode): void {
    const { components } = program;
    const baseDir = this.outDir + program.namespace.join(path.sep);
    const printer = new Printer();

    for (const type of program.types) {
      printer.printType(type);
    }
    const typeFilename = baseDir + path.sep + 'types.ts';
    makeDirs(typeFilename);
    printer.flushToFile(typeFilename);

    for (const component of components) {
      this.writeComponent(component, program ,printer);
    }
  }

  private writeComponent(component: N.ComponentNode, program: N.ProgramNode, printer: Printer): void {
    const imports = this.typesToImport(program.types);
    const baseDir = this.outDir + program.namespace.join(path.sep);
    makeDirs(baseDir);

    this.writeScript(component, imports, printer);
    printer.crlf();
    this.writeTemplate(component, printer);
    const fileName = this.formatName(component.name.text);
    const filePath = baseDir + fileName + '.vue';
    printer.flushToFile(filePath);
  }

  private writeScript(component: N.ComponentNode, imports: string[], printer: Printer): void {
    const { propsTypeName } = component;

    printer.appendLine('<script setup lang="ts">');
    printer.appendLine(`import { ${imports.join(', ')} } from './types';`, 2);
    if (propsTypeName) {
      const definition = `defineProps<${propsTypeName}>()`;
      const hasDefaultProps = component.properties.some(p => p.initializer);
      if (hasDefaultProps) {
        printer.appendLine(`const props = withDefaults(${definition}, {`, 2);
        for (const prop of component.properties) {
          if (prop.initializer) {
            const propName = prop.name.text;
            const propValue = Writer.writeExpression(prop.initializer);
            printer.appendLine(`${propName}: ${propValue},`, 4);
          }
        }
        printer.appendLine('});', 2);
      } else {
        printer.appendLine(definition + ';', 2);
      }
    } else {
      printer.appendLine('defineProps<{}>();', 2);
    }
    printer.appendLine('</script>');
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
        case 'expression':
          printer.appendLine(`{{ ${Writer.writeExpression(child.expression)} }}`, indent);
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
