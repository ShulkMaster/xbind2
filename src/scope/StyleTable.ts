import { ClassNode, StyleNode, UsePath } from 'types/nodes';
import { StyleSymbol } from 'types/crossbind';

export class StyleTable {
  public readonly styles: StyleSymbol;
  public readonly scope: UsePath;

  constructor(scope: UsePath) {
    this.scope = scope;
    const last = scope[scope.length - 1];
    this.styles = {
      name: last,
      classNames: new Set<string>(),
      type: 'style',
      scope: scope,
    };
  }

  public registerStyle(style: StyleNode): void {
    for (const subStyle of style.classes) {
      this.registerClass(this.styles.classNames, subStyle);
    }
  }

  private registerClass(classes: Set<string>, classNode: ClassNode): void {
    classes.add(classNode.name.text);
    for (const subStyle of classNode.subClasses) {
      this.registerClass(classes, subStyle);
    }
  }
}