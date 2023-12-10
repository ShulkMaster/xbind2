import { StyleNode, UsePath } from 'types/nodes';
import { StyleSymbol } from 'types/crossbind';

export class StyleResolver {
  public readonly styles = new Map<string, StyleSymbol>();

  registerStyle(scope: UsePath, style: StyleNode): void {
    const classNames = new Set<string>();
    for (const subStyle of style.subStyles) {
      classNames.add(subStyle.name.text);
    }
    this.styles.set(scope.join('.'), {
      name: style.name.text,
      subStyles: classNames,
      type: 'style',
      scope: scope,
    });
  }
}