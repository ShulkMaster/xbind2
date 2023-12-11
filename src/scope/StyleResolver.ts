import { ClassNode, StyleNode, UsePath } from 'types/nodes';
import { StyleSymbol } from 'types/crossbind';

export class StyleResolver {
  public readonly styles = new Map<string, StyleSymbol>();

  registerStyle(scope: UsePath, style: StyleNode): void {
    const classNames = new Set<string>();
    for (const subStyle of style.classes) {
      this.registerClass(classNames, subStyle);
    }
    this.styles.set(scope.join('.'), {
      name: style.name.text,
      classNames,
      type: 'style',
      scope: scope,
    });
  }

  registerClass(classes: Set<string>, classNode: ClassNode): void {
    classes.add(classNode.name.text);
    for (const subStyle of classNode.subClasses) {
      this.registerClass(classes, subStyle);
    }
  }
}