import { ClassNode, StyleNode, UsePath } from 'types/nodes';
import { StyleSymbol, SymbolKind } from 'types/scope';
import { Token } from 'types/token';

export class StyleTable {
  private readonly styles = new Map<string, StyleSymbol>();
  public readonly scope: UsePath;

  constructor(scope: UsePath) {
    this.scope = scope;
  }

  public registerStyle(style: StyleNode): void {
    const styleSymbol: StyleSymbol = {
      fqnd: `${this.scope.join('.')}.${style.name.text}`,
      kind: SymbolKind.Style,
      name: style.name.text,
      declaration: style.name,
      classes: new Map(),
    };
    this.styles.set(styleSymbol.name, styleSymbol);
    for (const subStyle of style.classes) {
      this.registerClass(styleSymbol.classes, subStyle);
    }
  }

  private registerClass(classes: Map<string, Token>, classNode: ClassNode): void {
    if(!classes.has(classNode.name.text)) {
      classes.set(classNode.name.text, classNode.name);
    }
    for (const subStyle of classNode.subClasses) {
      this.registerClass(classes, subStyle);
    }
  }

  public getStyle(name: string): StyleSymbol | undefined {
    return this.styles.get(name);
  }
}