// Generated from ./grammar/Haibt.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./Haibt";
import { ModuleContext } from "./Haibt";
import { UsesContext } from "./Haibt";
import { UsePathContext } from "./Haibt";
import { UseSubModuleContext } from "./Haibt";
import { TypeDefContext } from "./Haibt";
import { TypeDefBodyContext } from "./Haibt";
import { OptionalContext } from "./Haibt";
import { StyleContext } from "./Haibt";
import { StyleClassesContext } from "./Haibt";
import { StyleClassContext } from "./Haibt";
import { StyleCombineContext } from "./Haibt";
import { StlyeModifierContext } from "./Haibt";
import { StyleRulesContext } from "./Haibt";
import { StyleRuleContext } from "./Haibt";
import { StyleRuleFollowContext } from "./Haibt";
import { MeasureContext } from "./Haibt";
import { MeasureUnitContext } from "./Haibt";
import { ComponentContext } from "./Haibt";
import { ComponentBodyContext } from "./Haibt";
import { VarDeclarationContext } from "./Haibt";
import { VarMutabilityContext } from "./Haibt";
import { VarTypeContext } from "./Haibt";
import { ArrayContext } from "./Haibt";
import { PrimitiveTypeContext } from "./Haibt";
import { PropDeclarationContext } from "./Haibt";
import { InitValueContext } from "./Haibt";
import { RenderContext } from "./Haibt";
import { RenderFollowContext } from "./Haibt";
import { ExpressionContext } from "./Haibt";
import { AssignmentExpressionContext } from "./Haibt";
import { AssignmentFollowContext } from "./Haibt";
import { ConditionalExpressionContext } from "./Haibt";
import { TernaryExpressionContext } from "./Haibt";
import { LogicalOrExpressionContext } from "./Haibt";
import { LogicalOrFollowContext } from "./Haibt";
import { LogicalAndExpressionContext } from "./Haibt";
import { LogicalAndFollowContext } from "./Haibt";
import { EqualityExpressionContext } from "./Haibt";
import { EqualityFollowContext } from "./Haibt";
import { RelationalExpressionContext } from "./Haibt";
import { RelationalFollowContext } from "./Haibt";
import { AdditiveExpressionContext } from "./Haibt";
import { AdditiveFollowContext } from "./Haibt";
import { MultiplicativeExpressionContext } from "./Haibt";
import { MultiplicativeFollowContext } from "./Haibt";
import { CastExpressionContext } from "./Haibt";
import { CastFollowContext } from "./Haibt";
import { UnaryExpressionContext } from "./Haibt";
import { UnaryOperatorContext } from "./Haibt";
import { PostfixExpressionContext } from "./Haibt";
import { PostfixFollowContext } from "./Haibt";
import { ArgExpListContext } from "./Haibt";
import { ArgExpListFollowContext } from "./Haibt";
import { PrimaryExpressionContext } from "./Haibt";
import { ArrayLiteralContext } from "./Haibt";
import { ObjectLiteralContext } from "./Haibt";
import { ObjectLiteralBodyContext } from "./Haibt";
import { ObjectLiteralBodyFollowContext } from "./Haibt";
import { ConstantExpressionContext } from "./Haibt";
import { TemplateContext } from "./Haibt";
import { TemplateFollowContext } from "./Haibt";
import { AttributesContext } from "./Haibt";
import { AttributeContext } from "./Haibt";
import { DirectiveContext } from "./Haibt";
import { AttributeBindContext } from "./Haibt";
import { AttributeBindFollowContext } from "./Haibt";
import { DirectiveNameContext } from "./Haibt";
import { AttributeValueContext } from "./Haibt";
import { TemplateBodyContext } from "./Haibt";
import { CharDataContext } from "./Haibt";
import { FunctionDeclarationContext } from "./Haibt";
import { ReturnTypeContext } from "./Haibt";
import { ParameterListContext } from "./Haibt";
import { ParameterContext } from "./Haibt";
import { ParameterListFollowContext } from "./Haibt";
import { FunctionBodyContext } from "./Haibt";
import { StatementListContext } from "./Haibt";
import { StatementContext } from "./Haibt";
import { ReturnStatementContext } from "./Haibt";
import { ResultContext } from "./Haibt";
import { AssigmentStatementContext } from "./Haibt";
import { ExpressionStatementContext } from "./Haibt";
import { IfStatementContext } from "./Haibt";
import { IfBodyContext } from "./Haibt";
import { ElseStatementContext } from "./Haibt";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Haibt`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class HaibtVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Haibt.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.uses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUses?: (ctx: UsesContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.usePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsePath?: (ctx: UsePathContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.useSubModule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseSubModule?: (ctx: UseSubModuleContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDef?: (ctx: TypeDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.typeDefBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefBody?: (ctx: TypeDefBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.optional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional?: (ctx: OptionalContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.style`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyle?: (ctx: StyleContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.styleClasses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyleClasses?: (ctx: StyleClassesContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.styleClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyleClass?: (ctx: StyleClassContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.styleCombine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyleCombine?: (ctx: StyleCombineContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.stlyeModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStlyeModifier?: (ctx: StlyeModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.styleRules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyleRules?: (ctx: StyleRulesContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.styleRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyleRule?: (ctx: StyleRuleContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.styleRuleFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyleRuleFollow?: (ctx: StyleRuleFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.measure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasure?: (ctx: MeasureContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.measureUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasureUnit?: (ctx: MeasureUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.component`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent?: (ctx: ComponentContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.componentBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentBody?: (ctx: ComponentBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.varDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclaration?: (ctx: VarDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.varMutability`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarMutability?: (ctx: VarMutabilityContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.varType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarType?: (ctx: VarTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.propDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropDeclaration?: (ctx: PropDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.initValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitValue?: (ctx: InitValueContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.render`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRender?: (ctx: RenderContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.renderFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenderFollow?: (ctx: RenderFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.assignmentFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentFollow?: (ctx: AssignmentFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.ternaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.logicalOrFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrFollow?: (ctx: LogicalOrFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.logicalAndFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndFollow?: (ctx: LogicalAndFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.equalityFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityFollow?: (ctx: EqualityFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.relationalFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalFollow?: (ctx: RelationalFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.additiveFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveFollow?: (ctx: AdditiveFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.multiplicativeFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeFollow?: (ctx: MultiplicativeFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.castFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastFollow?: (ctx: CastFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.postfixFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixFollow?: (ctx: PostfixFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.argExpList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgExpList?: (ctx: ArgExpListContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.argExpListFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgExpListFollow?: (ctx: ArgExpListFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.objectLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteral?: (ctx: ObjectLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.objectLiteralBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteralBody?: (ctx: ObjectLiteralBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.objectLiteralBodyFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteralBodyFollow?: (ctx: ObjectLiteralBodyFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.template`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate?: (ctx: TemplateContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.templateFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateFollow?: (ctx: TemplateFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.attributeBind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeBind?: (ctx: AttributeBindContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.attributeBindFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeBindFollow?: (ctx: AttributeBindFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.directiveName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectiveName?: (ctx: DirectiveNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.attributeValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValue?: (ctx: AttributeValueContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.templateBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateBody?: (ctx: TemplateBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.charData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharData?: (ctx: CharDataContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.returnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnType?: (ctx: ReturnTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.parameterListFollow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterListFollow?: (ctx: ParameterListFollowContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.assigmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssigmentStatement?: (ctx: AssigmentStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.ifBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBody?: (ctx: IfBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Haibt.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;
}

