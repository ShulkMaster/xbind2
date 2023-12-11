import { TypeRefSymbol } from 'types/symbol';
import { GlobalTable } from './GlobalTable';
import { ReturnType } from 'types/nodes/native';
import { StyleResolver } from './StyleResolver';
import { VisitedUnit } from 'types/crossbind';
import { filePathToScope, Logger } from 'utils';

export class Resolver {
  public readonly styler = new StyleResolver();

  public registerUnit(unit: VisitedUnit): void {
    const file = unit.fileName;
    const program = unit.program;
    const scope = filePathToScope(file);
    program.styles.forEach(style => this.styler.registerStyle(scope, style));
    Logger.debug(file);
    this.styler.styles.forEach(s => {
      Logger.debug(s, 2);
    });
  }

  static resolveIdentifier(name: string, scope: string[], imports: string[]): TypeRefSymbol | ReturnType | undefined {
    const global = GlobalTable.findByName(name);
    if (global) return (global as unknown as ReturnType);

    return undefined;
  }
}