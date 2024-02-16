// Generated from ./grammar/Haibt.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `Haibt`.
 */
export default class HaibtListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Haibt.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.uses`.
	 * @param ctx the parse tree
	 */
	enterUses?: (ctx: UsesContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.uses`.
	 * @param ctx the parse tree
	 */
	exitUses?: (ctx: UsesContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.usePath`.
	 * @param ctx the parse tree
	 */
	enterUsePath?: (ctx: UsePathContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.usePath`.
	 * @param ctx the parse tree
	 */
	exitUsePath?: (ctx: UsePathContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.useSubModule`.
	 * @param ctx the parse tree
	 */
	enterUseSubModule?: (ctx: UseSubModuleContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.useSubModule`.
	 * @param ctx the parse tree
	 */
	exitUseSubModule?: (ctx: UseSubModuleContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.typeDef`.
	 * @param ctx the parse tree
	 */
	enterTypeDef?: (ctx: TypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.typeDef`.
	 * @param ctx the parse tree
	 */
	exitTypeDef?: (ctx: TypeDefContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.typeDefBody`.
	 * @param ctx the parse tree
	 */
	enterTypeDefBody?: (ctx: TypeDefBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.typeDefBody`.
	 * @param ctx the parse tree
	 */
	exitTypeDefBody?: (ctx: TypeDefBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.optional`.
	 * @param ctx the parse tree
	 */
	enterOptional?: (ctx: OptionalContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.optional`.
	 * @param ctx the parse tree
	 */
	exitOptional?: (ctx: OptionalContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.style`.
	 * @param ctx the parse tree
	 */
	enterStyle?: (ctx: StyleContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.style`.
	 * @param ctx the parse tree
	 */
	exitStyle?: (ctx: StyleContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.styleClasses`.
	 * @param ctx the parse tree
	 */
	enterStyleClasses?: (ctx: StyleClassesContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.styleClasses`.
	 * @param ctx the parse tree
	 */
	exitStyleClasses?: (ctx: StyleClassesContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.styleClass`.
	 * @param ctx the parse tree
	 */
	enterStyleClass?: (ctx: StyleClassContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.styleClass`.
	 * @param ctx the parse tree
	 */
	exitStyleClass?: (ctx: StyleClassContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.styleCombine`.
	 * @param ctx the parse tree
	 */
	enterStyleCombine?: (ctx: StyleCombineContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.styleCombine`.
	 * @param ctx the parse tree
	 */
	exitStyleCombine?: (ctx: StyleCombineContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.stlyeModifier`.
	 * @param ctx the parse tree
	 */
	enterStlyeModifier?: (ctx: StlyeModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.stlyeModifier`.
	 * @param ctx the parse tree
	 */
	exitStlyeModifier?: (ctx: StlyeModifierContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.styleRules`.
	 * @param ctx the parse tree
	 */
	enterStyleRules?: (ctx: StyleRulesContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.styleRules`.
	 * @param ctx the parse tree
	 */
	exitStyleRules?: (ctx: StyleRulesContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.styleRule`.
	 * @param ctx the parse tree
	 */
	enterStyleRule?: (ctx: StyleRuleContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.styleRule`.
	 * @param ctx the parse tree
	 */
	exitStyleRule?: (ctx: StyleRuleContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.styleRuleFollow`.
	 * @param ctx the parse tree
	 */
	enterStyleRuleFollow?: (ctx: StyleRuleFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.styleRuleFollow`.
	 * @param ctx the parse tree
	 */
	exitStyleRuleFollow?: (ctx: StyleRuleFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.measure`.
	 * @param ctx the parse tree
	 */
	enterMeasure?: (ctx: MeasureContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.measure`.
	 * @param ctx the parse tree
	 */
	exitMeasure?: (ctx: MeasureContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.measureUnit`.
	 * @param ctx the parse tree
	 */
	enterMeasureUnit?: (ctx: MeasureUnitContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.measureUnit`.
	 * @param ctx the parse tree
	 */
	exitMeasureUnit?: (ctx: MeasureUnitContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.componentBody`.
	 * @param ctx the parse tree
	 */
	enterComponentBody?: (ctx: ComponentBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.componentBody`.
	 * @param ctx the parse tree
	 */
	exitComponentBody?: (ctx: ComponentBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.varMutability`.
	 * @param ctx the parse tree
	 */
	enterVarMutability?: (ctx: VarMutabilityContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.varMutability`.
	 * @param ctx the parse tree
	 */
	exitVarMutability?: (ctx: VarMutabilityContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.varType`.
	 * @param ctx the parse tree
	 */
	enterVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.varType`.
	 * @param ctx the parse tree
	 */
	exitVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.propDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropDeclaration?: (ctx: PropDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.propDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropDeclaration?: (ctx: PropDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.initValue`.
	 * @param ctx the parse tree
	 */
	enterInitValue?: (ctx: InitValueContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.initValue`.
	 * @param ctx the parse tree
	 */
	exitInitValue?: (ctx: InitValueContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.render`.
	 * @param ctx the parse tree
	 */
	enterRender?: (ctx: RenderContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.render`.
	 * @param ctx the parse tree
	 */
	exitRender?: (ctx: RenderContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.renderFollow`.
	 * @param ctx the parse tree
	 */
	enterRenderFollow?: (ctx: RenderFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.renderFollow`.
	 * @param ctx the parse tree
	 */
	exitRenderFollow?: (ctx: RenderFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.assignmentFollow`.
	 * @param ctx the parse tree
	 */
	enterAssignmentFollow?: (ctx: AssignmentFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.assignmentFollow`.
	 * @param ctx the parse tree
	 */
	exitAssignmentFollow?: (ctx: AssignmentFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.ternaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.ternaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.logicalOrFollow`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrFollow?: (ctx: LogicalOrFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.logicalOrFollow`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrFollow?: (ctx: LogicalOrFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.logicalAndFollow`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndFollow?: (ctx: LogicalAndFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.logicalAndFollow`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndFollow?: (ctx: LogicalAndFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.equalityFollow`.
	 * @param ctx the parse tree
	 */
	enterEqualityFollow?: (ctx: EqualityFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.equalityFollow`.
	 * @param ctx the parse tree
	 */
	exitEqualityFollow?: (ctx: EqualityFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.relationalFollow`.
	 * @param ctx the parse tree
	 */
	enterRelationalFollow?: (ctx: RelationalFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.relationalFollow`.
	 * @param ctx the parse tree
	 */
	exitRelationalFollow?: (ctx: RelationalFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.additiveFollow`.
	 * @param ctx the parse tree
	 */
	enterAdditiveFollow?: (ctx: AdditiveFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.additiveFollow`.
	 * @param ctx the parse tree
	 */
	exitAdditiveFollow?: (ctx: AdditiveFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.multiplicativeFollow`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeFollow?: (ctx: MultiplicativeFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.multiplicativeFollow`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeFollow?: (ctx: MultiplicativeFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.castFollow`.
	 * @param ctx the parse tree
	 */
	enterCastFollow?: (ctx: CastFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.castFollow`.
	 * @param ctx the parse tree
	 */
	exitCastFollow?: (ctx: CastFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.postfixFollow`.
	 * @param ctx the parse tree
	 */
	enterPostfixFollow?: (ctx: PostfixFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.postfixFollow`.
	 * @param ctx the parse tree
	 */
	exitPostfixFollow?: (ctx: PostfixFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.argExpList`.
	 * @param ctx the parse tree
	 */
	enterArgExpList?: (ctx: ArgExpListContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.argExpList`.
	 * @param ctx the parse tree
	 */
	exitArgExpList?: (ctx: ArgExpListContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.argExpListFollow`.
	 * @param ctx the parse tree
	 */
	enterArgExpListFollow?: (ctx: ArgExpListFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.argExpListFollow`.
	 * @param ctx the parse tree
	 */
	exitArgExpListFollow?: (ctx: ArgExpListFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.objectLiteral`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.objectLiteral`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.objectLiteralBody`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteralBody?: (ctx: ObjectLiteralBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.objectLiteralBody`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteralBody?: (ctx: ObjectLiteralBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.objectLiteralBodyFollow`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteralBodyFollow?: (ctx: ObjectLiteralBodyFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.objectLiteralBodyFollow`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteralBodyFollow?: (ctx: ObjectLiteralBodyFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.templateFollow`.
	 * @param ctx the parse tree
	 */
	enterTemplateFollow?: (ctx: TemplateFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.templateFollow`.
	 * @param ctx the parse tree
	 */
	exitTemplateFollow?: (ctx: TemplateFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.attributeBind`.
	 * @param ctx the parse tree
	 */
	enterAttributeBind?: (ctx: AttributeBindContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.attributeBind`.
	 * @param ctx the parse tree
	 */
	exitAttributeBind?: (ctx: AttributeBindContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.attributeBindFollow`.
	 * @param ctx the parse tree
	 */
	enterAttributeBindFollow?: (ctx: AttributeBindFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.attributeBindFollow`.
	 * @param ctx the parse tree
	 */
	exitAttributeBindFollow?: (ctx: AttributeBindFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.directiveName`.
	 * @param ctx the parse tree
	 */
	enterDirectiveName?: (ctx: DirectiveNameContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.directiveName`.
	 * @param ctx the parse tree
	 */
	exitDirectiveName?: (ctx: DirectiveNameContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.attributeValue`.
	 * @param ctx the parse tree
	 */
	enterAttributeValue?: (ctx: AttributeValueContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.attributeValue`.
	 * @param ctx the parse tree
	 */
	exitAttributeValue?: (ctx: AttributeValueContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.templateBody`.
	 * @param ctx the parse tree
	 */
	enterTemplateBody?: (ctx: TemplateBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.templateBody`.
	 * @param ctx the parse tree
	 */
	exitTemplateBody?: (ctx: TemplateBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.charData`.
	 * @param ctx the parse tree
	 */
	enterCharData?: (ctx: CharDataContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.charData`.
	 * @param ctx the parse tree
	 */
	exitCharData?: (ctx: CharDataContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.parameterListFollow`.
	 * @param ctx the parse tree
	 */
	enterParameterListFollow?: (ctx: ParameterListFollowContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.parameterListFollow`.
	 * @param ctx the parse tree
	 */
	exitParameterListFollow?: (ctx: ParameterListFollowContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.result`.
	 * @param ctx the parse tree
	 */
	enterResult?: (ctx: ResultContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.result`.
	 * @param ctx the parse tree
	 */
	exitResult?: (ctx: ResultContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.assigmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssigmentStatement?: (ctx: AssigmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.assigmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssigmentStatement?: (ctx: AssigmentStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.ifBody`.
	 * @param ctx the parse tree
	 */
	enterIfBody?: (ctx: IfBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.ifBody`.
	 * @param ctx the parse tree
	 */
	exitIfBody?: (ctx: IfBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Haibt.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Haibt.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;
}

