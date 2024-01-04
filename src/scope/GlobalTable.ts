import { HSymbol } from 'types/scope';
import { stringSymbols } from 'bcl/lang';

export class GlobalTable {
  private static readonly symbols: Map<string, HSymbol> = new Map();

  static init() {
    this.symbols.set(stringSymbols.fqnd, stringSymbols);
  }

  static findByName(fqnd: string): HSymbol | undefined {
    return this.symbols.get(fqnd);
  }
}