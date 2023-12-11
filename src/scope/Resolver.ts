import { TypeRefSymbol } from 'types/symbol';
import { GlobalTable } from './GlobalTable';
import { ReturnType } from 'types/nodes/native';
import { VisitedUnit } from 'types/crossbind';
import { ModuleTable } from './ModuleTable';
import { UsePath } from '../types/nodes';
import { TemplateSymbols } from './TemplateSymbols';
import { ComponentTable } from './ComponentTable';

export class Resolver {
  public readonly modules = new Map<string, ModuleTable>();

  public registerUnit(unit: VisitedUnit): void {
    const program = unit.program;
    const module = new ModuleTable(program.scope);
    module.registerProgram(program);
    this.modules.set(program.scope.join('.'), module);
  }

  static resolveIdentifier(name: string): TypeRefSymbol | ReturnType | undefined {
    const global = GlobalTable.findByName(name);
    if (global) return (global as unknown as ReturnType);

    return undefined;
  }

  public resolveComponent(scope: UsePath, componentName: string): ComponentTable {
    const scopeString = scope.join('.');
    const module = this.modules.get(scopeString);
    if (!module) {
      throw new Error(`Module ${scope.join('.')} not found`);
    }

    const componentTable = module.components.get(scopeString + '.' + componentName);
    if (!componentTable) {
      throw new Error(`Component ${scope.join('.')} not found`);
    }

    return componentTable;
  }

  public resolveTemplate(scope: UsePath, componentName: string): TemplateSymbols | undefined {
    const componentTable = this.resolveComponent(scope, componentName);

    if (componentTable) {
      return componentTable.templateSymbols;
    }

    // todo: implement imports
    throw new Error('Import components from other modules not implemented yet');
  }
}