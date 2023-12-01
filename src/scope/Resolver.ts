import { HSymbols, TypeRefSymbol } from 'types/symbol';
import { GlobalTable } from './GlobalTable';
import { ReturnType } from '../types/nodes/native';

export class Resolver {
  static resolveIdentifier(name: string, scope: string[], imports: string[]): TypeRefSymbol | ReturnType | undefined {
    const global = GlobalTable.findByName(name);
    if (global) return (global as unknown as ReturnType);

    return undefined;
  }
}