import * as N from 'types/nodes';
import { DirectiveType, ExpressionKind, TagNode } from 'types/nodes';
import * as E from 'types/nodes/expression';
import { res } from 'scope';
import { ReturnType } from 'types/nodes/native';
import { ExpressionCheck } from './ExpressionCheck';
import { Member, NativeProperty, ObjectSymbol, SymbolKind, TagSymbol } from 'types/scope';
import { getTypeName, isAssignableTo } from './helper';
import { nativeBool } from '../bcl/lang/lib';

export class TemplateChecker {
  private readonly expChecker = new ExpressionCheck();

  checkTemplate(template: N.TemplateNode): void {
    template.children.forEach(child => {
      this.checkTag(child);
    });
  }

  private checkTag(tag: N.TagNode): void {
    const openTag = tag.openTag;
    const closeTag = tag.closeTag;

    if (closeTag && openTag.text !== closeTag.text) {
      res.addError({
        message: `tag ${openTag.text} is not closed`,
        line: openTag.line,
        column: openTag.column,
      });
    }

    this.checkDirectives(tag.directives);

    if (tag.openTag.text === 'children') {
      if (tag.children.length > 0) {
        res.addError({
          message: 'children tag cannot have any children',
          line: tag.openTag.line,
          column: tag.openTag.column,
        });
      }

      if(tag.attributes.length > 0) {
        res.addError({
          message: 'children tag cannot have any attributes',
          line: tag.openTag.line,
          column: tag.openTag.column,
        });

        tag.attributes.forEach(attr => {
          res.addError({
            message: `attribute ${attr.name.text} does not exist on children tag`,
            line: attr.name.line,
            column: attr.name.column,
          });
        });
      }
      return;
    }

    this.checkTagProps(tag, tag.attributes);

    tag.children.forEach(child => {
      switch (child.type) {
        case 'charData':
          break;
        case 'tag':
          this.checkTag(child);
          break;
        case 'expression':
          this.expChecker.checkExpression(child.expression);
          break;
      }
    });
  }

  private checkTagProps(tag: TagNode, props: N.AttributeNode[]): void {
    const tagName = tag.openTag;
    const tagDef = res.resolve({ symbolName: tagName.text });

    if (!tagDef) {
      res.addError({
        message: `Unresolved identifier ${tag.openTag.text}`,
        line: tagName.line,
        column: tagName.column,
      });
      return;
    }

    if (tagDef.kind !== SymbolKind.Tag && tagDef.kind !== SymbolKind.Object) {
      res.addError({
        message: `${tagName.text} its a ${tagDef.kind} but its used as a component or tag`,
        line: tagName.line,
        column: tagName.column,
      });
      return;
    }

    if (tagDef.kind === SymbolKind.Object && tagDef.origin !== 'component') {
      res.addError({
        message: `Object ${tagName.text} its not a component and cannot be used in the template`,
        line: tagName.line,
        column: tagName.column,
      });
      return;
    }

    if (tagDef.kind === SymbolKind.Object) {
      const propsSymbol = tagDef.propertySymbol;
      if (!propsSymbol) {
        if(props.length > 0) {
          res.addError({
            message: `Object ${tagName.text} has no properties and cannot have any attributes`,
            line: tagName.line,
            column: tagName.column,
          });
        }
        return;
      }

      const propsDef = res.resolve(propsSymbol);
      if (!propsDef) {
        res.addError({
          message: `Unresolved properties symbol ${tagName.text}`,
          line: tagName.line,
          column: tagName.column,
        });
        return;
      }

      this.checkPropObject(tagDef, propsDef as ObjectSymbol, props);
    }

    if (tagDef.kind === SymbolKind.Tag) {
      this.checkAttribute(tagDef, props);
    }
  }

  private checkAttribute(symbol: TagSymbol, props: N.AttributeNode[]): void {
    const required = new Map<string, NativeProperty>();
    for (const member of Object.values(symbol.properties)) {
      if (member.required) {
        required.set(member.name, member);
      }
    }

    for (const prop of props) {
      const { name, value } = prop;
      const propSymbol = symbol.properties[name.text];
      if (!propSymbol) {
        res.addError({
          message: `attribute ${name.text} does not exist on ${symbol.name}`,
          line: name.line,
          column: name.column,
        });
        continue;
      }

      if (propSymbol.required) {
        required.delete(propSymbol.name);
      }

      if (propSymbol.returnType.symbolName === nativeBool.name && !value) {
        continue;
      }

      if (!value) {
        res.addError({
          message: `attribute ${name.text} from ${symbol.name} has no value assigned`,
          line: name.line,
          column: name.column,
        });
        continue;
      }

      const expResult = this.expChecker.checkExpression(value);
      if (!expResult.valid) {
        continue;
      }

      const result = expResult.result;
      const expectedType = res.resolve(propSymbol.returnType);
      const assignation = isAssignableTo(expectedType, result, false);
      if (!assignation) {
        const typeName = getTypeName(result);
        res.addError({
          message: `type ${typeName} is not assignable to property ${name.text} type ${expectedType?.name}`,
          line: name.line,
          column: name.column,
        });
      }
    }

    for (const member of required.values()) {
      res.addError({
        message: `${symbol.name} has required attribute ${member.name} missing`,
        line: symbol?.declaration?.line ?? 0,
        column: symbol?.declaration?.column ?? 0,
      });
    }
  }

  private checkPropObject(componentSymbol: ObjectSymbol, symbol: ObjectSymbol, props: N.AttributeNode[]): void {
    const required = new Map<string, Member>();
    for (const member of Object.values(symbol.members)) {
      if (!member.optional) {
        required.set(member.name, member);
      }
    }

    for (const prop of props) {
      const { name, value } = prop;
      const propSymbol = symbol.members[name.text];
      if (!propSymbol) {
        res.addError({
          message: `attribute ${name.text} does not exist on ${componentSymbol.name}`,
          line: name.line,
          column: name.column,
        });
        continue;
      }

      if (!propSymbol.optional) {
        required.delete(propSymbol.name);
      }

      if(propSymbol.typeRef.symbolName === nativeBool.name && !value) {
        continue;
      }
      if(!value) {
        res.addError({
          message: `attribute ${name.text} from ${componentSymbol.name} has no value assigned`,
          line: name.line,
          column: name.column,
        });
        continue;
      }

      const expResult = this.expChecker.checkExpression(value);
      if (!expResult.valid) {
        continue;
      }

      const result = expResult.result;
      const expectedType = res.resolve(propSymbol.typeRef);
      const assignation = isAssignableTo(expectedType, result, false);
      if (!assignation) {
        const typeName = getTypeName(result);
        res.addError({
          message: `type ${typeName} is not assignable to property ${name.text} type ${expectedType?.name}`,
          line: name.line,
          column: name.column,
        });
      }
    }

    for (const member of required.values()) {
      res.addError({
        message: `${componentSymbol.name} has required attribute ${member.name} missing`,
        line: componentSymbol?.declaration?.line ?? 0,
        column: componentSymbol?.declaration?.column ?? 0,
      });
    }
  }

  private constanMsg(exp: E.ConstantExpressionNode): string {
    switch (exp.primitiveType) {
      case ReturnType.Void:
        return 'void value is always false';
      case ReturnType.Number:
        return exp.token.text === '0' ?
          '0 is always false' : `number value ${exp.token.text} is always true`;
      case ReturnType.String: {
        const text = exp.token.text;
        return text.length <= 2
          ? 'empty string is always false'
          : `${text} string value is always true`;
      }
      case ReturnType.Boolean:
        return exp.token.text === 'false' ?
          'false is always false' : 'true is always true';
      case ReturnType.Color:
        return 'color value is always interpreted as true';
      case ReturnType.Undefined:
        return 'undefined value is always tread as false';
    }
  }

  private checkConstantDirective(dir: N.DirectiveNode): void {
    const {name, value} = dir;
    const dirName = dir.kind.toUpperCase();
    if (value.kind !== ExpressionKind.constantExpression) {
      res.addError({
        message: `${dirName} directive must have a constant string expression`,
        line: name.line,
        column: name.column,
      });
      return;
    }

    if (value.primitiveType !== ReturnType.String) {
      res.addError({
        message: `${dirName} directive must have a constant string expression`,
        line: name.line,
        column: name.column,
      });
      return;
    }

    const text = value.token.text;
    if (text.length <= 2) {
      res.addError({
        message: `${dirName} directive string value must not be empty and point to a valid template`,
        line: name.line,
        column: name.column,
      });
    }
  }

  private checkDirectives(directives: N.DirectiveNode[]): void {
    const setDirectives = new Set<DirectiveType>();
    for (const directive of directives) {
      if (setDirectives.has(directive.kind)) {
        res.addError({
          message: `Duplicate directive ${directive.kind.toUpperCase()}`,
          line: directive.name.line,
          column: directive.name.column,
        });
      }
      setDirectives.add(directive.kind);
      const {name, value, kind} = directive;
      switch (kind) {
        case DirectiveType.if: {
          if (value.kind === ExpressionKind.constantExpression) {
            const reason = this.constanMsg(value);
            res.addError({
              message: `IF directive has an invalid expression: ${reason}`,
              line: name.line,
              column: name.column,
            });
            return;
          }
          const other = directives.find(d => d.kind !== DirectiveType.if && d.kind !== DirectiveType.else);
          if (other) {
            res.addError({
              message: 'IF directive can only be used with ELSE directive',
              line: name.line,
              column: name.column,
            });
          }
          this.expChecker.checkExpression(value);
        }
          break;
        case DirectiveType.else:
        case DirectiveType.template:
          this.checkConstantDirective(directive);
          return;
        case DirectiveType.switch:
        case DirectiveType.case:
          break;
      }
    }
  }

}
