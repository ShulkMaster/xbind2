import * as N from 'types/nodes';
import { ConstantExpressionNode, DirectiveType, ExpressionKind, TypeDeclarationNode } from 'types/nodes';
import { Logger, makeDirs, Printer, Writer } from 'utils';
import path from 'path';
import { ComponentTable, Resolver } from 'scope';
import { ReturnType } from 'types/nodes/native';
import { StyleWriter } from 'utils/StyleWriter';

export class VuePlugin {
  public readonly outDir: string;
  private resolver: Resolver = {} as Resolver;
  private currentComponent: ComponentTable = {} as ComponentTable;

  public constructor(dir: string) {
    this.outDir = dir;
    Logger.info('Vue plugin loaded');
  }

  public setResolver(resolver: Resolver): void {
    this.resolver = resolver;
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
    const baseDir = path.join(this.outDir, ...program.scope);
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
    const baseDir = path.join(this.outDir, ...program.scope);
    this.currentComponent = this.resolver.resolveComponent(component.scope, component.name.text);

    this.writeScript(component, imports, printer);
    printer.crlf();
    this.writeTemplate(component, printer);
    this.writeStyles(program.styles, printer);
    const fileName = this.formatName(component.name.text);
    const typeFilename = [baseDir, fileName].join(path.sep);
    printer.flushToFile(typeFilename + '.vue');
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
    this.writeTemplateNodes(template.children, printer, 2, 0);
    printer.crlf();
    printer.appendLine('</template>');
  }

  private writeTemplateNodes(template: N.ChildNode[], printer: Printer, indent: number, lastLine: number): void {
    for (const child of template) {
      switch (child.type) {
          case 'tag': {
            const sameLine = lastLine === child.openTag.line;
            const newPad = Writer.areInSameLine(child) ? 0 : indent;
            printer.crlf(!sameLine);
            if (child.openTag.text === 'children') {
              printer.append('<slot', newPad);
              this.writeAttributes(child.attributes, printer);
              printer.append('></slot>', 0);
              break;
            }
            if(child.children.length < 1) {
              printer.append(`<${child.openTag.text}`, indent);
              this.writeAttributes(child.attributes, printer);
              printer.appendLine('/>', 0);
            } else {
              printer.append(`<${child.openTag.text}`, indent);
              this.writeDirectives(child.directives, printer);
              this.writeAttributes(child.attributes, printer);
              printer.append('>', 0);
              const newIndent = Writer.areInSameLine(child) ? 0 : indent + 2;
              this.writeTemplateNodes(child.children, printer, newIndent, child.openTag.line);
              printer.crlf(!Writer.areInSameLine(child));
              printer.append(`</${child.openTag.text}>`, newPad);
            }
          }
          break;
        case 'charData':
          printer.append(child.contents.join(' '), indent);
          break;
        case 'expression':
          printer.append(`{{ ${Writer.writeExpression(child.expression)} }}`, indent);
          break;
      }
    }
  }

  private writeAttributes(attributes: N.AttributeNode[], printer: Printer): void {
    for (const attribute of attributes) {
      const exp = attribute.value;

      if (!exp) {
        printer.append(` ${attribute.name.text}`);
        continue;
      }

      if (exp.kind === ExpressionKind.constantExpression) {
        const returnType = exp.primitiveType;
        if (returnType === ReturnType.String) {
          printer.append(` ${attribute.name.text}=${exp.token.text}`);
          continue;
        }
      }

      const value = Writer.writeExpression(exp);
      printer.append(` :${attribute.name.text}="${value}"`);
    }
  }

  private writeDirectives(directives: N.DirectiveNode[], printer: Printer): void {
    for (const d of directives) {
      const valueStr = Writer.writeExpression(d.value);
      if (d.kind === DirectiveType.if) {
        printer.append(` v-if="${valueStr}"`);
      }

      if(d.kind === DirectiveType.else) {
        continue;
      }

      if(d.kind === DirectiveType.template) {
        this.writeTemplateDirective(d, printer);
        continue;
      }

      Logger.info(`Unsupported directive: ${d.kind}`);
    }
  }

  private writeTemplateDirective(directive: N.DirectiveNode, printer: Printer): void {
    const templateName = directive.value as ConstantExpressionNode;
    const table = this.currentComponent.templateSymbols;
    const ifPair = table.ifElsePairs.get(templateName.token.text)!;

    if (ifPair.areContiguous) {
      printer.append(' v-else');
      return;
    }

    const valueStr = ifPair.identifierExpResult;
    printer.append(` v-if="!${valueStr}"`);
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

  private writeStyles(styles: N.StyleNode[], printer: Printer) {
    if(styles.length < 1) return;

    printer.crlf();
    const stylePrinter = new Printer();
    const writer = new StyleWriter(stylePrinter);
    for (const style of styles) {
      writer.writeStyle(style, 0);
    }
    const styleText = writer.collectStyleText();
    printer.appendLine('<style scoped>', 0);
    printer.append(styleText, 0);
    printer.appendLine('</style>', 0);
  }
}
