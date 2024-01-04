import BaseVisitor from 'parser/HaibtVisitor';
import { VarTypeContext, PrimitiveTypeContext } from 'parser/Haibt';
import { symbolToToken } from 'utils/parse';
import { Token } from 'types/token';

export class TypeVisitor extends BaseVisitor<Token> {

  visitVarType = (ctx: VarTypeContext): Token => {
    const identifier = ctx.Identifier();

    if (identifier) {
      return symbolToToken(identifier.symbol);
    }

    const primitiveType = ctx.primitiveType();
    return this.visitPrimitiveType(primitiveType);
  };

  visitPrimitiveType = (ctx: PrimitiveTypeContext): Token => {
    return symbolToToken(ctx.start);
  };
}