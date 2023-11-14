import BaseVisitor from 'parser/HaibtVisitor';
import { VarTypeContext, PrimitiveTypeContext } from 'parser/Haibt';
import { PrimitiveTypeNode, TypeNode } from 'types/nodes/types';
import { symbolToToken } from 'utils/parse';

export class TypeVisitor extends BaseVisitor<TypeNode> {

  visitVarType = (ctx: VarTypeContext): TypeNode => {
    const identifier = ctx.Identifier();

    if (identifier) {
      return {
        primitive: false,
        typeName: symbolToToken(identifier.symbol),
      };
    }

    const primitiveType = ctx.primitiveType();
    return this.visitPrimitiveType(primitiveType);
  };

  visitPrimitiveType = (ctx: PrimitiveTypeContext): PrimitiveTypeNode => {
    const token = ctx.start;

    switch (token.text) {
      case 'color':
      case 'string':
      case 'number':
      case 'boolean':
      case 'undefined':
      case 'void':
        return {
          primitive: true,
          name: token.text,
          token: symbolToToken(token),
        };
      default:
        throw new Error(`Unexpected primitive type ${token.text} at ${token.line}:${token.column}`);
    }
  };
}