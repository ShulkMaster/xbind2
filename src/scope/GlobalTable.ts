import { HSymbols } from 'types/symbol';
import { stringSymbol } from 'bcl/String';

export class GlobalTable {
  private static readonly symbols: Map<string, HSymbols> = new Map();

  static init() {
    stringSymbol.forEach(symbol => {
      this.symbols.set(symbol.name, symbol);
    });
  }

  static findByName(name: string): HSymbols | undefined {
    return this.symbols.get(name);
  }
}