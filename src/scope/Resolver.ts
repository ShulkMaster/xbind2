import { TypeRefSymbol } from 'types/symbol';
import { GlobalTable } from './GlobalTable';
import { ReturnType } from 'types/nodes/native';
import { VisitedUnit } from 'types/crossbind';
import { ModuleTable } from './ModuleTable';
import { UsePath } from '../types/nodes';
import { TemplateSymbols } from './TemplateSymbols';
import { ComponentTable } from './ComponentTable';
import { asReturnType } from '../utils/parse';

export class Resolver {
  public readonly modules = new Map<string, ModuleTable>();

  public registerUnit(unit: VisitedUnit): void {
    const program = unit.program;
    const module = new ModuleTable(program.scope);
    module.registerProgram(program);
    this.modules.set(program.scope.join('.'), module);
  }

  resolveGlobal(name: string): TypeRefSymbol | ReturnType | undefined {
    const global = GlobalTable.findByName(name);
    if (global) return (global as unknown as ReturnType);

    return undefined;
  }

  public getModule(scope: UsePath): ModuleTable | undefined {
    const scopeString = scope.join('.');
    return this.modules.get(scopeString);
  }

  public resolve(scope: UsePath, identifier: string): TypeRefSymbol | ReturnType | undefined {
    const inComponent = this.resolveInComponents(scope, identifier);
    if (inComponent) {
      return inComponent;
    }

    return this.resolveGlobal(identifier);
  }

  public resolveInComponents(scope: UsePath, identifier: string): TypeRefSymbol | ReturnType | undefined {
    const scopeString = scope.join('.');
    const module = this.modules.get(scopeString);
    if (!module) {
      return undefined;
    }

    for (const comp of module.components.values()) {
      if (comp.componentNode.name.text === identifier) {
        return ReturnType.Component;
      }

      for (const prop of comp.componentNode.properties) {
        if (prop.name.text === identifier) {
          return asReturnType(prop.typeAnnotation);
        }
      }
    }

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