import { ProgramNode, UsePath } from 'types/nodes';
import { StyleTable } from './StyleTable';
import { HSymbol, Resolution, SearchContext, SymbolKind } from 'types/scope';
import { SymbolTable } from './SymbolTable';
import { Logger } from 'utils';
import { ComponentTable } from './ComponentTable';

export class ModuleTable {
  public readonly scope: UsePath;
  private readonly symbols: SymbolTable;
  public readonly components = new Map<string, ComponentTable>();

  constructor(scope: UsePath) {
    this.scope = scope;
    this.symbols = new SymbolTable(scope);
  }

  registerProgram(program: ProgramNode): void {
    this.symbols.registerTypes(program.types);
    for (const component of program.components) {
      const table = this.symbols.registerComponent(component);
      this.components.set(component.name.text, table);
    }

    for (const style of program.styles) {
      const fqName = [...this.scope, style.name.text];
      const table = new StyleTable(fqName);
      table.registerStyle(style);
      //this.styles.set(fqName.join('.'), table);
    }
  }

  public getLocalStyle(name: string): StyleTable | undefined {
    return new StyleTable([...this.scope, name]);
  }

  public resolve(search: SearchContext): HSymbol | undefined {
    const { prefix } = search;
    if (!prefix) {
      return this.resolveAll(search);
    }

    const kind = this.symbols.get(prefix)?.kind;
    switch (kind) {
      case SymbolKind.Object:
        return this.resolveComponent(prefix, search);
      case SymbolKind.Style:
      case SymbolKind.Function:
      case SymbolKind.Type:
      default:
        return undefined;
    }
  }

  private resolveAll(search: SearchContext): Resolution {
    const resolveLocal = this.symbols.get(search.symbolName);
    if (resolveLocal) {
      return resolveLocal;
    }

    const wasInComponents = this.resolveInComponents(search);
    if (wasInComponents) {
      return wasInComponents;
    }
  }

  private resolveInComponents(search: SearchContext): Resolution {
    for (const componentTable of this.components.values()) {
      const resolution = componentTable.resolve(search);
      if (resolution) {
        return resolution;
      }
    }
  }

  private resolveComponent(component: string, search: SearchContext): Resolution {
    const componentTable = this.components.get(component);
    if (!componentTable) {
      Logger.error(`Cannot find component ${component} table`);
      return undefined;
    }

    return componentTable.resolve(search);
  }
}