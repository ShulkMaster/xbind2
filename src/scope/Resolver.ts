import { GlobalTable } from './GlobalTable';
import { VisitedUnit } from 'types/crossbind';
import { ModuleTable } from './ModuleTable';
import { UsePath } from 'types/nodes';
import { SearchContext, Resolution } from 'types/scope';
import { filePathToScope, Logger } from 'utils';
import { ComponentTable } from './ComponentTable';
import { CompileError, SimpleError } from 'types/logging';

export class Resolver {
  public readonly modules = new Map<string, ModuleTable>();
  private filename: string = '';
  private scope: UsePath = [];
  public checkErrors: CompileError[] = [];

  constructor() {
    GlobalTable.init();
  }

  public addError(err: SimpleError): void {
    this.checkErrors.push({
      ...err,
      file: this.filename,
    });
  }

  public setFilename(filename: string): void {
    this.filename = filename;
    this.scope = filePathToScope(filename);
  }

  public registerUnit(unit: VisitedUnit): void {
    const program = unit.program;
    const module = new ModuleTable(program.scope);
    module.registerProgram(program);
    this.modules.set(program.scope.join('.'), module);
  }

  private resolveGlobal(search: SearchContext): Resolution {
    const {symbolName, prefix} = search;

    if (prefix) {
      return GlobalTable.findByName(`${prefix}.${symbolName}`);
    }

    return GlobalTable.findByName(symbolName);
  }

  public getModule(scope: UsePath): ModuleTable | undefined {
    const scopeString = scope.join('.');
    return this.modules.get(scopeString);
  }


  public resolve(search: SearchContext): Resolution {
    const global = this.resolveGlobal(search);
    if (global) {
      return global;
    }

    const module = this.getModule(this.scope);
    if (!module) {
      Logger.error(`Module ${this.scope.join('.')} not found`);
      return undefined;
    }

    return module.resolve(search);
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
}

export const res = new Resolver();