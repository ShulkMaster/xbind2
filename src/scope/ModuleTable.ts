import { ProgramNode, UsePath } from 'types/nodes';
import { ComponentTable } from './ComponentTable';
import { StyleTable } from './StyleTable';

export class ModuleTable {
  public readonly scope: UsePath;
  public readonly components = new Map<string, ComponentTable>();
  public readonly styles = new Map<string, StyleTable>();


  constructor(scope: UsePath) {
    this.scope = scope;
  }

  registerProgram(program: ProgramNode): void {
    for (const component of program.components) {
      const fqName = [...this.scope, component.name.text].join('.');
      this.components.set(fqName, new ComponentTable(component));
    }

    for (const style of program.styles) {
      const fqName = [...this.scope, style.name.text];
      const table = new StyleTable(fqName);
      table.registerStyle(style);
      this.styles.set(fqName.join('.'), table);
    }
  }
}