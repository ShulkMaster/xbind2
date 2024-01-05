import { HSymbol } from 'types/scope';
import { stringSymbols, numberSymbols, valueSymbols } from 'bcl/lang';

export class GlobalTable {
  private static readonly symbols: Map<string, HSymbol> = new Map();

  static init() {
    this.symbols.set(stringSymbols.fqnd, stringSymbols);
    this.symbols.set(numberSymbols.fqnd, numberSymbols);
    valueSymbols.forEach(symbol => this.symbols.set(symbol.fqnd, symbol));
  }

  static findByName(fqnd: string): HSymbol | undefined {
    return this.symbols.get(fqnd);
  }
}