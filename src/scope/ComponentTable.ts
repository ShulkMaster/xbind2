import { ComponentNode } from 'types/nodes';
import { TemplateSymbols } from './TemplateSymbols';
import { HSymbol, SearchContext, SymbolKind, SymbolRef, VarModifier } from 'types/scope';

export class ComponentTable {
  public readonly componentNode: ComponentNode;
  public readonly templateSymbols: TemplateSymbols;
  private readonly symbols = new Map<string, HSymbol>();

  constructor(component: ComponentNode) {
    this.componentNode = component;
    this.templateSymbols = new TemplateSymbols(component.template);
    this.templateSymbols.fill();
  }

  public resolve(search: SearchContext): HSymbol | undefined {
    return this.symbols.get(search.symbolName);
  }

  public registerComponent(): SymbolRef | undefined {
    const module = this.componentNode.scope;
    for (const prop of this.componentNode.properties) {
      const typeRef: SymbolRef = { module, symbolName: prop.typeAnnotation.text };
      this.symbols.set(prop.name.text, {
        name: prop.name.text,
        fqnd: `${module.join('.')}.${prop.name.text}`,
        declaration: prop.name,
        kind: SymbolKind.Variable,
        modifier: VarModifier.Prop,
        typeRef,
      });
    }

    if (this.componentNode.propsTypeName) {
      return {
        symbolName: this.componentNode.propsTypeName,
        module: this.componentNode.scope,
      };
    }
  }
}