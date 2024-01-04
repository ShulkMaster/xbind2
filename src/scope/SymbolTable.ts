import { HSymbol, SymbolKind, TypeSymbol } from 'types/scope';
import { ComponentNode, TypeDeclarationNode, UsePath } from 'types/nodes';
import { ComponentTable } from './ComponentTable';

export class SymbolTable {
  private readonly map = new Map<string, HSymbol>();
  public readonly scopeName: string;
  private readonly scope: UsePath;

  constructor(scopeName: UsePath) {
    this.scopeName = scopeName.join('.');
    this.scope = scopeName;
  }

  public add(symbol: HSymbol): void {
    this.map.set(symbol.name, symbol);
  }

  public get(name: string): HSymbol | undefined {
    return this.map.get(name);
  }

  public registerTypes(types: TypeDeclarationNode[]): void {
    for (const type of types) {
      const typeName = typeof type.typeName === 'string' ? type.typeName : type.typeName.text;
      const declaration = typeof type.typeName !== 'string' ? type.typeName : undefined;
      const fqnd = `${this.scopeName}.${typeName}`;
      const meta: TypeSymbol = {
        name: typeName,
        declaration,
        fqnd,
        kind: SymbolKind.Type,
        members: {}
      };

      this.registerMembers(type, meta);
      this.add(meta);
    }
  }

  private registerMembers(type: TypeDeclarationNode, meta: TypeSymbol) {
    for (const member of type.members) {
      meta.members[member.name.text] = {
        name: member.name.text,
        declaration: member.name,
        typeRef: {
          symbolName: member.typeNotation.text,
          module: this.scope,
        },
        optional: member.optional,
        readonly: false,
      };
    }
  }

  public registerComponent(component: ComponentNode): ComponentTable {
    const componentName = component.name.text;
    const table =  new ComponentTable(component);
    const propertySymbol = table.registerComponent();

    this.add({
      name: componentName,
      fqnd: `${this.scopeName}.${componentName}`,
      declaration: component.name,
      kind: SymbolKind.Object,
      propertySymbol,
      members: {},
      origin: 'component',
    });

    return table;
  }
}