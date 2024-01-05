import { HSymbol } from 'types/scope';
import { stringSymbols, nativeNumber, nativeBool } from 'bcl/lang';

export class GlobalTable {
  private static readonly symbols: Map<string, HSymbol> = new Map();

  static init() {
    this.symbols.set(stringSymbols.fqnd, stringSymbols);
    this.symbols.set(nativeNumber.fqnd, nativeNumber);
    this.symbols.set(nativeBool.fqnd, nativeBool);
  }

  static findByName(fqnd: string): HSymbol | undefined {
    return this.symbols.get(fqnd);
  }
}