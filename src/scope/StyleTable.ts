import { ClassNode, StyleNode, UsePath } from 'types/nodes';
import { StyleSymbol } from 'types/crossbind';

export class StyleTable {
  public readonly styles = new Map<string, StyleSymbol>();
  public readonly scope: UsePath;

  constructor(scope: UsePath) {
    this.scope = scope;
  }

  public registerStyle(style: StyleNode): void {
    const classNames = new Set<string>();
    for (const subStyle of style.classes) {
      this.registerClass(classNames, subStyle);
    }

    const scope = [...this.scope, style.name.text];
    this.styles.set(scope.join('.'), {
      name: style.name.text,
      classNames,
      type: 'style',
      scope: scope,
    });
  }

  private registerClass(classes: Set<string>, classNode: ClassNode): void {
    classes.add(classNode.name.text);
    for (const subStyle of classNode.subClasses) {
      this.registerClass(classes, subStyle);
    }
  }
}