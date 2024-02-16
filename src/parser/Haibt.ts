// Generated from ./grammar/Haibt.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import HaibtListener from "./HaibtListener.js";
import HaibtVisitor from "./HaibtVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class Haibt extends Parser {
	public static readonly Assign = 1;
	public static readonly PlusPlus = 2;
	public static readonly MinusMinus = 3;
	public static readonly Plus = 4;
	public static readonly Minus = 5;
	public static readonly Not = 6;
	public static readonly Star = 7;
	public static readonly Slash = 8;
	public static readonly Mod = 9;
	public static readonly Power = 10;
	public static readonly LessThan = 11;
	public static readonly LessThanOrEqual = 12;
	public static readonly GreaterThan = 13;
	public static readonly GreaterThanOrEqual = 14;
	public static readonly Or = 15;
	public static readonly And = 16;
	public static readonly Equal = 17;
	public static readonly NotEqual = 18;
	public static readonly CloseTag = 19;
	public static readonly StringLiteral = 20;
	public static readonly HEX_COLOR = 21;
	public static readonly WhiteSpaces = 22;
	public static readonly LineTerminator = 23;
	public static readonly Use = 24;
	public static readonly Component = 25;
	public static readonly Style = 26;
	public static readonly Template = 27;
	public static readonly As = 28;
	public static readonly If = 29;
	public static readonly Else = 30;
	public static readonly While = 31;
	public static readonly Return = 32;
	public static readonly Switch = 33;
	public static readonly Case = 34;
	public static readonly Val = 35;
	public static readonly Var = 36;
	public static readonly Prop = 37;
	public static readonly Em = 38;
	public static readonly Rem = 39;
	public static readonly Px = 40;
	public static readonly Function = 41;
	public static readonly Type = 42;
	public static readonly Number = 43;
	public static readonly String = 44;
	public static readonly Boolean = 45;
	public static readonly Void = 46;
	public static readonly Color = 47;
	public static readonly Undefined = 48;
	public static readonly BoolValue = 49;
	public static readonly NumberValue = 50;
	public static readonly Inline = 51;
	public static readonly Render = 52;
	public static readonly Init = 53;
	public static readonly Mount = 54;
	public static readonly Unmount = 55;
	public static readonly OBracnk = 56;
	public static readonly CBracnk = 57;
	public static readonly OParen = 58;
	public static readonly CParen = 59;
	public static readonly OBrace = 60;
	public static readonly CBrace = 61;
	public static readonly SemiColon = 62;
	public static readonly Comma = 63;
	public static readonly Question = 64;
	public static readonly Colon = 65;
	public static readonly Dot = 66;
	public static readonly Ellipsis = 67;
	public static readonly Hash = 68;
	public static readonly Identifier = 69;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_uses = 2;
	public static readonly RULE_usePath = 3;
	public static readonly RULE_useSubModule = 4;
	public static readonly RULE_typeDef = 5;
	public static readonly RULE_typeDefBody = 6;
	public static readonly RULE_optional = 7;
	public static readonly RULE_style = 8;
	public static readonly RULE_styleClasses = 9;
	public static readonly RULE_styleClass = 10;
	public static readonly RULE_styleCombine = 11;
	public static readonly RULE_stlyeModifier = 12;
	public static readonly RULE_styleRules = 13;
	public static readonly RULE_styleRule = 14;
	public static readonly RULE_styleRuleFollow = 15;
	public static readonly RULE_measure = 16;
	public static readonly RULE_measureUnit = 17;
	public static readonly RULE_component = 18;
	public static readonly RULE_componentBody = 19;
	public static readonly RULE_varDeclaration = 20;
	public static readonly RULE_varMutability = 21;
	public static readonly RULE_varType = 22;
	public static readonly RULE_array = 23;
	public static readonly RULE_primitiveType = 24;
	public static readonly RULE_propDeclaration = 25;
	public static readonly RULE_initValue = 26;
	public static readonly RULE_render = 27;
	public static readonly RULE_renderFollow = 28;
	public static readonly RULE_expression = 29;
	public static readonly RULE_assignmentExpression = 30;
	public static readonly RULE_assignmentFollow = 31;
	public static readonly RULE_conditionalExpression = 32;
	public static readonly RULE_ternaryExpression = 33;
	public static readonly RULE_logicalOrExpression = 34;
	public static readonly RULE_logicalOrFollow = 35;
	public static readonly RULE_logicalAndExpression = 36;
	public static readonly RULE_logicalAndFollow = 37;
	public static readonly RULE_equalityExpression = 38;
	public static readonly RULE_equalityFollow = 39;
	public static readonly RULE_relationalExpression = 40;
	public static readonly RULE_relationalFollow = 41;
	public static readonly RULE_additiveExpression = 42;
	public static readonly RULE_additiveFollow = 43;
	public static readonly RULE_multiplicativeExpression = 44;
	public static readonly RULE_multiplicativeFollow = 45;
	public static readonly RULE_castExpression = 46;
	public static readonly RULE_castFollow = 47;
	public static readonly RULE_unaryExpression = 48;
	public static readonly RULE_unaryOperator = 49;
	public static readonly RULE_postfixExpression = 50;
	public static readonly RULE_postfixFollow = 51;
	public static readonly RULE_argExpList = 52;
	public static readonly RULE_argExpListFollow = 53;
	public static readonly RULE_primaryExpression = 54;
	public static readonly RULE_arrayLiteral = 55;
	public static readonly RULE_objectLiteral = 56;
	public static readonly RULE_objectLiteralBody = 57;
	public static readonly RULE_objectLiteralBodyFollow = 58;
	public static readonly RULE_constantExpression = 59;
	public static readonly RULE_template = 60;
	public static readonly RULE_templateFollow = 61;
	public static readonly RULE_attributes = 62;
	public static readonly RULE_attribute = 63;
	public static readonly RULE_directive = 64;
	public static readonly RULE_attributeBind = 65;
	public static readonly RULE_attributeBindFollow = 66;
	public static readonly RULE_directiveName = 67;
	public static readonly RULE_attributeValue = 68;
	public static readonly RULE_templateBody = 69;
	public static readonly RULE_charData = 70;
	public static readonly RULE_functionDeclaration = 71;
	public static readonly RULE_returnType = 72;
	public static readonly RULE_parameterList = 73;
	public static readonly RULE_parameter = 74;
	public static readonly RULE_parameterListFollow = 75;
	public static readonly RULE_functionBody = 76;
	public static readonly RULE_statementList = 77;
	public static readonly RULE_statement = 78;
	public static readonly RULE_returnStatement = 79;
	public static readonly RULE_result = 80;
	public static readonly RULE_assigmentStatement = 81;
	public static readonly RULE_expressionStatement = 82;
	public static readonly RULE_ifStatement = 83;
	public static readonly RULE_ifBody = 84;
	public static readonly RULE_elseStatement = 85;
	public static readonly literalNames: (string | null)[] = [ null, "'='", 
                                                            "'++'", "'--'", 
                                                            "'+'", "'-'", 
                                                            "'!'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'**'", "'<'", 
                                                            "'<='", "'>'", 
                                                            "'>='", "'||'", 
                                                            "'&&'", "'=='", 
                                                            "'!='", "'</'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'use'", "'component'", 
                                                            "'style'", "'template'", 
                                                            "'as'", "'if'", 
                                                            "'else'", "'while'", 
                                                            "'return'", 
                                                            "'switch'", 
                                                            "'case'", "'val'", 
                                                            "'var'", "'prop'", 
                                                            "'em'", "'rem'", 
                                                            "'px'", "'fun'", 
                                                            "'type'", "'number'", 
                                                            "'string'", 
                                                            "'boolean'", 
                                                            "'void'", "'color'", 
                                                            "'undefined'", 
                                                            null, null, 
                                                            "'inline'", 
                                                            "'render'", 
                                                            "'init'", "'mount'", 
                                                            "'unmount'", 
                                                            "'['", "']'", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "';'", "','", 
                                                            "'?'", "':'", 
                                                            "'.'", "'...'", 
                                                            "'#'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Assign", 
                                                             "PlusPlus", 
                                                             "MinusMinus", 
                                                             "Plus", "Minus", 
                                                             "Not", "Star", 
                                                             "Slash", "Mod", 
                                                             "Power", "LessThan", 
                                                             "LessThanOrEqual", 
                                                             "GreaterThan", 
                                                             "GreaterThanOrEqual", 
                                                             "Or", "And", 
                                                             "Equal", "NotEqual", 
                                                             "CloseTag", 
                                                             "StringLiteral", 
                                                             "HEX_COLOR", 
                                                             "WhiteSpaces", 
                                                             "LineTerminator", 
                                                             "Use", "Component", 
                                                             "Style", "Template", 
                                                             "As", "If", 
                                                             "Else", "While", 
                                                             "Return", "Switch", 
                                                             "Case", "Val", 
                                                             "Var", "Prop", 
                                                             "Em", "Rem", 
                                                             "Px", "Function", 
                                                             "Type", "Number", 
                                                             "String", "Boolean", 
                                                             "Void", "Color", 
                                                             "Undefined", 
                                                             "BoolValue", 
                                                             "NumberValue", 
                                                             "Inline", "Render", 
                                                             "Init", "Mount", 
                                                             "Unmount", 
                                                             "OBracnk", 
                                                             "CBracnk", 
                                                             "OParen", "CParen", 
                                                             "OBrace", "CBrace", 
                                                             "SemiColon", 
                                                             "Comma", "Question", 
                                                             "Colon", "Dot", 
                                                             "Ellipsis", 
                                                             "Hash", "Identifier" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "module", "uses", "usePath", "useSubModule", "typeDef", "typeDefBody", 
		"optional", "style", "styleClasses", "styleClass", "styleCombine", "stlyeModifier", 
		"styleRules", "styleRule", "styleRuleFollow", "measure", "measureUnit", 
		"component", "componentBody", "varDeclaration", "varMutability", "varType", 
		"array", "primitiveType", "propDeclaration", "initValue", "render", "renderFollow", 
		"expression", "assignmentExpression", "assignmentFollow", "conditionalExpression", 
		"ternaryExpression", "logicalOrExpression", "logicalOrFollow", "logicalAndExpression", 
		"logicalAndFollow", "equalityExpression", "equalityFollow", "relationalExpression", 
		"relationalFollow", "additiveExpression", "additiveFollow", "multiplicativeExpression", 
		"multiplicativeFollow", "castExpression", "castFollow", "unaryExpression", 
		"unaryOperator", "postfixExpression", "postfixFollow", "argExpList", "argExpListFollow", 
		"primaryExpression", "arrayLiteral", "objectLiteral", "objectLiteralBody", 
		"objectLiteralBodyFollow", "constantExpression", "template", "templateFollow", 
		"attributes", "attribute", "directive", "attributeBind", "attributeBindFollow", 
		"directiveName", "attributeValue", "templateBody", "charData", "functionDeclaration", 
		"returnType", "parameterList", "parameter", "parameterListFollow", "functionBody", 
		"statementList", "statement", "returnStatement", "result", "assigmentStatement", 
		"expressionStatement", "ifStatement", "ifBody", "elseStatement",
	];
	public get grammarFileName(): string { return "Haibt.g4"; }
	public get literalNames(): (string | null)[] { return Haibt.literalNames; }
	public get symbolicNames(): (string | null)[] { return Haibt.symbolicNames; }
	public get ruleNames(): string[] { return Haibt.ruleNames; }
	public get serializedATN(): number[] { return Haibt._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, Haibt._ATN, Haibt.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, Haibt.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
			this.module_();
			this.state = 173;
			this.match(Haibt.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_(): ModuleContext {
		let localctx: ModuleContext = new ModuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, Haibt.RULE_module);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 179;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 24:
					{
					this.state = 175;
					this.uses();
					}
					break;
				case 25:
					{
					this.state = 176;
					this.component();
					}
					break;
				case 26:
					{
					this.state = 177;
					this.style();
					}
					break;
				case 42:
					{
					this.state = 178;
					this.typeDef();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 181;
				this.module_();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uses(): UsesContext {
		let localctx: UsesContext = new UsesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, Haibt.RULE_uses);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			this.match(Haibt.Use);
			this.state = 187;
			this.usePath();
			this.state = 188;
			this.match(Haibt.SemiColon);
			this.state = 189;
			this.module_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public usePath(): UsePathContext {
		let localctx: UsePathContext = new UsePathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, Haibt.RULE_usePath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 191;
			this.match(Haibt.Identifier);
			this.state = 192;
			this.useSubModule();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public useSubModule(): UseSubModuleContext {
		let localctx: UseSubModuleContext = new UseSubModuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, Haibt.RULE_useSubModule);
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 66:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 194;
				this.match(Haibt.Dot);
				this.state = 195;
				this.match(Haibt.Identifier);
				this.state = 196;
				this.useSubModule();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeDef(): TypeDefContext {
		let localctx: TypeDefContext = new TypeDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, Haibt.RULE_typeDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this.match(Haibt.Type);
			this.state = 201;
			this.match(Haibt.Identifier);
			this.state = 202;
			this.match(Haibt.Assign);
			this.state = 203;
			this.match(Haibt.OBrace);
			this.state = 204;
			this.typeDefBody();
			this.state = 205;
			this.match(Haibt.CBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeDefBody(): TypeDefBodyContext {
		let localctx: TypeDefBodyContext = new TypeDefBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, Haibt.RULE_typeDefBody);
		try {
			this.state = 215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 207;
				this.match(Haibt.Identifier);
				this.state = 208;
				this.optional();
				this.state = 209;
				this.match(Haibt.Colon);
				this.state = 210;
				this.varType();
				this.state = 211;
				this.match(Haibt.SemiColon);
				this.state = 212;
				this.typeDefBody();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optional(): OptionalContext {
		let localctx: OptionalContext = new OptionalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, Haibt.RULE_optional);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 217;
				this.match(Haibt.Question);
				}
				break;
			case 65:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public style(): StyleContext {
		let localctx: StyleContext = new StyleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, Haibt.RULE_style);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this.match(Haibt.Style);
			this.state = 222;
			this.match(Haibt.Identifier);
			this.state = 223;
			this.match(Haibt.OBrace);
			this.state = 224;
			this.styleClasses();
			this.state = 225;
			this.match(Haibt.CBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public styleClasses(): StyleClassesContext {
		let localctx: StyleClassesContext = new StyleClassesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, Haibt.RULE_styleClasses);
		try {
			this.state = 231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 66:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 227;
				this.styleClass();
				this.state = 228;
				this.styleClasses();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public styleClass(): StyleClassContext {
		let localctx: StyleClassContext = new StyleClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, Haibt.RULE_styleClass);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 233;
			this.match(Haibt.Dot);
			this.state = 234;
			this.match(Haibt.Identifier);
			this.state = 235;
			this.styleCombine();
			this.state = 236;
			this.match(Haibt.OBrace);
			this.state = 237;
			this.styleRules();
			this.state = 238;
			this.match(Haibt.CBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public styleCombine(): StyleCombineContext {
		let localctx: StyleCombineContext = new StyleCombineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, Haibt.RULE_styleCombine);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
			case 66:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 240;
				this.stlyeModifier();
				this.state = 241;
				this.match(Haibt.Identifier);
				this.state = 242;
				this.styleCombine();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stlyeModifier(): StlyeModifierContext {
		let localctx: StlyeModifierContext = new StlyeModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, Haibt.RULE_stlyeModifier);
		try {
			this.state = 250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 66:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 247;
				this.match(Haibt.Dot);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 248;
				this.match(Haibt.GreaterThan);
				this.state = 249;
				this.match(Haibt.Dot);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public styleRules(): StyleRulesContext {
		let localctx: StyleRulesContext = new StyleRulesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, Haibt.RULE_styleRules);
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
			case 66:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 252;
				this.styleRule();
				this.state = 253;
				this.styleRules();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public styleRule(): StyleRuleContext {
		let localctx: StyleRuleContext = new StyleRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, Haibt.RULE_styleRule);
		let _la: number;
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 258;
				_la = this._input.LA(1);
				if(!(_la===47 || _la===69)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 259;
				this.match(Haibt.Colon);
				this.state = 260;
				this.styleRuleFollow();
				this.state = 261;
				this.match(Haibt.SemiColon);
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 263;
				this.styleClass();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public styleRuleFollow(): StyleRuleFollowContext {
		let localctx: StyleRuleFollowContext = new StyleRuleFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, Haibt.RULE_styleRuleFollow);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 50:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 269;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 21:
					{
					this.state = 266;
					this.match(Haibt.HEX_COLOR);
					}
					break;
				case 50:
					{
					this.state = 267;
					this.measure();
					}
					break;
				case 69:
					{
					this.state = 268;
					this.match(Haibt.Identifier);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 271;
				this.styleRuleFollow();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public measure(): MeasureContext {
		let localctx: MeasureContext = new MeasureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, Haibt.RULE_measure);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this.match(Haibt.NumberValue);
			this.state = 276;
			this.measureUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public measureUnit(): MeasureUnitContext {
		let localctx: MeasureUnitContext = new MeasureUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, Haibt.RULE_measureUnit);
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 278;
				this.match(Haibt.Px);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 279;
				this.match(Haibt.Rem);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 280;
				this.match(Haibt.Em);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 281;
				this.match(Haibt.Mod);
				}
				break;
			case 21:
			case 50:
			case 62:
			case 69:
				this.enterOuterAlt(localctx, 5);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public component(): ComponentContext {
		let localctx: ComponentContext = new ComponentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, Haibt.RULE_component);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 285;
			this.match(Haibt.Component);
			this.state = 286;
			this.match(Haibt.Identifier);
			this.state = 287;
			this.match(Haibt.OBrace);
			this.state = 288;
			this.componentBody();
			this.state = 289;
			this.match(Haibt.CBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentBody(): ComponentBodyContext {
		let localctx: ComponentBodyContext = new ComponentBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, Haibt.RULE_componentBody);
		try {
			this.state = 300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
			case 36:
			case 37:
			case 41:
			case 52:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 295;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 35:
				case 36:
					{
					this.state = 291;
					this.varDeclaration();
					}
					break;
				case 37:
					{
					this.state = 292;
					this.propDeclaration();
					}
					break;
				case 52:
					{
					this.state = 293;
					this.render();
					}
					break;
				case 41:
					{
					this.state = 294;
					this.functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 297;
				this.componentBody();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDeclaration(): VarDeclarationContext {
		let localctx: VarDeclarationContext = new VarDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, Haibt.RULE_varDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this.varMutability();
			this.state = 303;
			this.match(Haibt.Identifier);
			this.state = 304;
			this.match(Haibt.Colon);
			this.state = 305;
			this.varType();
			this.state = 306;
			this.initValue();
			this.state = 307;
			this.match(Haibt.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varMutability(): VarMutabilityContext {
		let localctx: VarMutabilityContext = new VarMutabilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, Haibt.RULE_varMutability);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			_la = this._input.LA(1);
			if(!(_la===35 || _la===36)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varType(): VarTypeContext {
		let localctx: VarTypeContext = new VarTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, Haibt.RULE_varType);
		try {
			this.state = 316;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 311;
				this.primitiveType();
				this.state = 312;
				this.array();
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 314;
				this.match(Haibt.Identifier);
				this.state = 315;
				this.array();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let localctx: ArrayContext = new ArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, Haibt.RULE_array);
		try {
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 318;
				this.match(Haibt.OBracnk);
				this.state = 319;
				this.match(Haibt.CBracnk);
				}
				break;
			case 1:
			case 4:
			case 5:
			case 7:
			case 8:
			case 9:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 57:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, Haibt.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 323;
			_la = this._input.LA(1);
			if(!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 63) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propDeclaration(): PropDeclarationContext {
		let localctx: PropDeclarationContext = new PropDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, Haibt.RULE_propDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 325;
			this.match(Haibt.Prop);
			this.state = 326;
			this.match(Haibt.Identifier);
			this.state = 327;
			this.match(Haibt.Colon);
			this.state = 328;
			this.varType();
			this.state = 329;
			this.initValue();
			this.state = 330;
			this.match(Haibt.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initValue(): InitValueContext {
		let localctx: InitValueContext = new InitValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, Haibt.RULE_initValue);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 332;
				this.match(Haibt.Assign);
				this.state = 333;
				this.expression();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public render(): RenderContext {
		let localctx: RenderContext = new RenderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, Haibt.RULE_render);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 337;
			this.match(Haibt.Render);
			this.state = 338;
			this.match(Haibt.OParen);
			this.state = 339;
			this.renderFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public renderFollow(): RenderFollowContext {
		let localctx: RenderFollowContext = new RenderFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, Haibt.RULE_renderFollow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 343;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				{
				this.state = 341;
				this.match(Haibt.Undefined);
				}
				break;
			case 11:
			case 59:
				{
				this.state = 342;
				this.template();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 345;
			this.match(Haibt.CParen);
			this.state = 346;
			this.match(Haibt.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, Haibt.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.assignmentExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, Haibt.RULE_assignmentExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.conditionalExpression();
			this.state = 351;
			this.assignmentFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentFollow(): AssignmentFollowContext {
		let localctx: AssignmentFollowContext = new AssignmentFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, Haibt.RULE_assignmentFollow);
		try {
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 353;
				this.match(Haibt.Assign);
				this.state = 354;
				this.assignmentExpression();
				}
				break;
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 65:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, Haibt.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.logicalOrExpression();
			this.state = 359;
			this.ternaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ternaryExpression(): TernaryExpressionContext {
		let localctx: TernaryExpressionContext = new TernaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, Haibt.RULE_ternaryExpression);
		try {
			this.state = 367;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 361;
				this.match(Haibt.Question);
				this.state = 362;
				this.expression();
				this.state = 363;
				this.match(Haibt.Colon);
				this.state = 364;
				this.conditionalExpression();
				}
				break;
			case 1:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 65:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, Haibt.RULE_logicalOrExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.logicalAndExpression();
			this.state = 370;
			this.logicalOrFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalOrFollow(): LogicalOrFollowContext {
		let localctx: LogicalOrFollowContext = new LogicalOrFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, Haibt.RULE_logicalOrFollow);
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 372;
				this.match(Haibt.Or);
				this.state = 373;
				this.logicalOrExpression();
				}
				break;
			case 1:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, Haibt.RULE_logicalAndExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 377;
			this.equalityExpression();
			this.state = 378;
			this.logicalAndFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalAndFollow(): LogicalAndFollowContext {
		let localctx: LogicalAndFollowContext = new LogicalAndFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, Haibt.RULE_logicalAndFollow);
		try {
			this.state = 383;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 380;
				this.match(Haibt.And);
				this.state = 381;
				this.logicalAndExpression();
				}
				break;
			case 1:
			case 15:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, Haibt.RULE_equalityExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 385;
			this.relationalExpression();
			this.state = 386;
			this.equalityFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equalityFollow(): EqualityFollowContext {
		let localctx: EqualityFollowContext = new EqualityFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, Haibt.RULE_equalityFollow);
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 388;
				this.match(Haibt.Equal);
				this.state = 389;
				this.equalityExpression();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 390;
				this.match(Haibt.NotEqual);
				this.state = 391;
				this.equalityExpression();
				}
				break;
			case 1:
			case 15:
			case 16:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, Haibt.RULE_relationalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 395;
			this.additiveExpression();
			this.state = 396;
			this.relationalFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationalFollow(): RelationalFollowContext {
		let localctx: RelationalFollowContext = new RelationalFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, Haibt.RULE_relationalFollow);
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 398;
				this.match(Haibt.LessThan);
				this.state = 399;
				this.relationalExpression();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 400;
				this.match(Haibt.LessThanOrEqual);
				this.state = 401;
				this.relationalExpression();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 402;
				this.match(Haibt.GreaterThan);
				this.state = 403;
				this.relationalExpression();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 404;
				this.match(Haibt.GreaterThanOrEqual);
				this.state = 405;
				this.relationalExpression();
				}
				break;
			case 1:
			case 15:
			case 16:
			case 17:
			case 18:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 5);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, Haibt.RULE_additiveExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 409;
			this.multiplicativeExpression();
			this.state = 410;
			this.additiveFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additiveFollow(): AdditiveFollowContext {
		let localctx: AdditiveFollowContext = new AdditiveFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, Haibt.RULE_additiveFollow);
		try {
			this.state = 417;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 412;
				this.match(Haibt.Plus);
				this.state = 413;
				this.additiveExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 414;
				this.match(Haibt.Minus);
				this.state = 415;
				this.additiveExpression();
				}
				break;
			case 1:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, Haibt.RULE_multiplicativeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 419;
			this.castExpression();
			this.state = 420;
			this.multiplicativeFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplicativeFollow(): MultiplicativeFollowContext {
		let localctx: MultiplicativeFollowContext = new MultiplicativeFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, Haibt.RULE_multiplicativeFollow);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 422;
				this.match(Haibt.Star);
				this.state = 423;
				this.multiplicativeExpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 424;
				this.match(Haibt.Slash);
				this.state = 425;
				this.multiplicativeExpression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 426;
				this.match(Haibt.Mod);
				this.state = 427;
				this.multiplicativeExpression();
				}
				break;
			case 1:
			case 4:
			case 5:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 4);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let localctx: CastExpressionContext = new CastExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, Haibt.RULE_castExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 431;
			this.unaryExpression();
			this.state = 432;
			this.castFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public castFollow(): CastFollowContext {
		let localctx: CastFollowContext = new CastFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, Haibt.RULE_castFollow);
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 434;
				this.match(Haibt.As);
				this.state = 435;
				this.varType();
				}
				break;
			case 1:
			case 4:
			case 5:
			case 7:
			case 8:
			case 9:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, Haibt.RULE_unaryExpression);
		try {
			this.state = 443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
			case 21:
			case 48:
			case 49:
			case 50:
			case 56:
			case 58:
			case 60:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 439;
				this.postfixExpression();
				}
				break;
			case 4:
			case 5:
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 440;
				this.unaryOperator();
				this.state = 441;
				this.postfixExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, Haibt.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 445;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, Haibt.RULE_postfixExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 447;
			this.primaryExpression();
			this.state = 448;
			this.postfixFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfixFollow(): PostfixFollowContext {
		let localctx: PostfixFollowContext = new PostfixFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, Haibt.RULE_postfixFollow);
		try {
			this.state = 468;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 450;
				this.match(Haibt.PlusPlus);
				this.state = 451;
				this.postfixFollow();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 452;
				this.match(Haibt.MinusMinus);
				this.state = 453;
				this.postfixFollow();
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 454;
				this.match(Haibt.Dot);
				this.state = 455;
				this.match(Haibt.Identifier);
				this.state = 456;
				this.postfixFollow();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 457;
				this.match(Haibt.OParen);
				this.state = 458;
				this.argExpList();
				this.state = 459;
				this.match(Haibt.CParen);
				this.state = 460;
				this.postfixFollow();
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 462;
				this.match(Haibt.OBracnk);
				this.state = 463;
				this.expression();
				this.state = 464;
				this.match(Haibt.CBracnk);
				this.state = 465;
				this.postfixFollow();
				}
				break;
			case 1:
			case 4:
			case 5:
			case 7:
			case 8:
			case 9:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 28:
			case 57:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 6);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argExpList(): ArgExpListContext {
		let localctx: ArgExpListContext = new ArgExpListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, Haibt.RULE_argExpList);
		try {
			this.state = 474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 5:
			case 6:
			case 20:
			case 21:
			case 48:
			case 49:
			case 50:
			case 56:
			case 58:
			case 60:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 470;
				this.expression();
				this.state = 471;
				this.argExpListFollow();
				}
				break;
			case 57:
			case 59:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argExpListFollow(): ArgExpListFollowContext {
		let localctx: ArgExpListFollowContext = new ArgExpListFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, Haibt.RULE_argExpListFollow);
		try {
			this.state = 479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 63:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 476;
				this.match(Haibt.Comma);
				this.state = 477;
				this.argExpList();
				}
				break;
			case 57:
			case 59:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, Haibt.RULE_primaryExpression);
		try {
			this.state = 489;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 481;
				this.match(Haibt.Identifier);
				}
				break;
			case 20:
			case 21:
			case 48:
			case 49:
			case 50:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 482;
				this.constantExpression();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 483;
				this.match(Haibt.OParen);
				this.state = 484;
				this.expression();
				this.state = 485;
				this.match(Haibt.CParen);
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 487;
				this.objectLiteral();
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 488;
				this.arrayLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let localctx: ArrayLiteralContext = new ArrayLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, Haibt.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 491;
			this.match(Haibt.OBracnk);
			this.state = 492;
			this.argExpList();
			this.state = 493;
			this.match(Haibt.CBracnk);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let localctx: ObjectLiteralContext = new ObjectLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, Haibt.RULE_objectLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 495;
			this.match(Haibt.OBrace);
			this.state = 496;
			this.objectLiteralBody();
			this.state = 497;
			this.match(Haibt.CBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectLiteralBody(): ObjectLiteralBodyContext {
		let localctx: ObjectLiteralBodyContext = new ObjectLiteralBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, Haibt.RULE_objectLiteralBody);
		try {
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 499;
				this.match(Haibt.Identifier);
				this.state = 500;
				this.match(Haibt.Colon);
				this.state = 501;
				this.expression();
				this.state = 502;
				this.objectLiteralBodyFollow();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectLiteralBodyFollow(): ObjectLiteralBodyFollowContext {
		let localctx: ObjectLiteralBodyFollowContext = new ObjectLiteralBodyFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, Haibt.RULE_objectLiteralBodyFollow);
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 63:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 507;
				this.match(Haibt.Comma);
				this.state = 508;
				this.objectLiteralBody();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let localctx: ConstantExpressionContext = new ConstantExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, Haibt.RULE_constantExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 512;
			_la = this._input.LA(1);
			if(!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 1879048195) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public template(): TemplateContext {
		let localctx: TemplateContext = new TemplateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, Haibt.RULE_template);
		try {
			this.state = 520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 514;
				this.match(Haibt.LessThan);
				this.state = 515;
				this.match(Haibt.Identifier);
				this.state = 516;
				this.attributes();
				this.state = 517;
				this.templateFollow();
				}
				break;
			case 19:
			case 59:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateFollow(): TemplateFollowContext {
		let localctx: TemplateFollowContext = new TemplateFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, Haibt.RULE_templateFollow);
		try {
			this.state = 532;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 522;
				this.match(Haibt.GreaterThan);
				this.state = 523;
				this.templateBody();
				this.state = 524;
				this.match(Haibt.CloseTag);
				this.state = 525;
				this.match(Haibt.Identifier);
				this.state = 526;
				this.match(Haibt.GreaterThan);
				this.state = 527;
				this.template();
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 529;
				this.match(Haibt.Slash);
				this.state = 530;
				this.match(Haibt.GreaterThan);
				this.state = 531;
				this.template();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attributes(): AttributesContext {
		let localctx: AttributesContext = new AttributesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, Haibt.RULE_attributes);
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 27:
			case 29:
			case 30:
			case 33:
			case 34:
			case 60:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 534;
				this.attribute();
				this.state = 535;
				this.attributes();
				}
				break;
			case 8:
			case 13:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let localctx: AttributeContext = new AttributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, Haibt.RULE_attribute);
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 60:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 540;
				this.match(Haibt.OBrace);
				this.state = 541;
				this.match(Haibt.Identifier);
				this.state = 542;
				this.match(Haibt.CBrace);
				}
				break;
			case 27:
			case 29:
			case 30:
			case 33:
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 543;
				this.directive();
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 544;
				this.attributeBind();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let localctx: DirectiveContext = new DirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, Haibt.RULE_directive);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 547;
			this.directiveName();
			this.state = 548;
			this.match(Haibt.Assign);
			this.state = 549;
			this.attributeValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attributeBind(): AttributeBindContext {
		let localctx: AttributeBindContext = new AttributeBindContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, Haibt.RULE_attributeBind);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 551;
			this.match(Haibt.Identifier);
			this.state = 552;
			this.attributeBindFollow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attributeBindFollow(): AttributeBindFollowContext {
		let localctx: AttributeBindFollowContext = new AttributeBindFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, Haibt.RULE_attributeBindFollow);
		try {
			this.state = 557;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 554;
				this.match(Haibt.Assign);
				this.state = 555;
				this.attributeValue();
				}
				break;
			case 8:
			case 13:
			case 27:
			case 29:
			case 30:
			case 33:
			case 34:
			case 60:
			case 69:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public directiveName(): DirectiveNameContext {
		let localctx: DirectiveNameContext = new DirectiveNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, Haibt.RULE_directiveName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 559;
			_la = this._input.LA(1);
			if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 205) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attributeValue(): AttributeValueContext {
		let localctx: AttributeValueContext = new AttributeValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, Haibt.RULE_attributeValue);
		try {
			this.state = 566;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 561;
				this.match(Haibt.StringLiteral);
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 562;
				this.match(Haibt.OBrace);
				this.state = 563;
				this.expression();
				this.state = 564;
				this.match(Haibt.CBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateBody(): TemplateBodyContext {
		let localctx: TemplateBodyContext = new TemplateBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, Haibt.RULE_templateBody);
		try {
			this.state = 577;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 568;
				this.template();
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 569;
				this.charData();
				this.state = 570;
				this.templateBody();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 572;
				this.match(Haibt.OBrace);
				this.state = 573;
				this.expression();
				this.state = 574;
				this.match(Haibt.CBrace);
				this.state = 575;
				this.templateBody();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charData(): CharDataContext {
		let localctx: CharDataContext = new CharDataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, Haibt.RULE_charData);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 580;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 579;
					_la = this._input.LA(1);
					if(_la<=0 || _la===11 || _la===19 || _la===60) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 582;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, Haibt.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 584;
			this.match(Haibt.Function);
			this.state = 585;
			this.match(Haibt.Identifier);
			this.state = 586;
			this.match(Haibt.OParen);
			this.state = 587;
			this.parameterList();
			this.state = 588;
			this.match(Haibt.CParen);
			this.state = 589;
			this.returnType();
			this.state = 590;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnType(): ReturnTypeContext {
		let localctx: ReturnTypeContext = new ReturnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, Haibt.RULE_returnType);
		try {
			this.state = 595;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 65:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 592;
				this.match(Haibt.Colon);
				this.state = 593;
				this.varType();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, Haibt.RULE_parameterList);
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 597;
				this.parameter();
				this.state = 598;
				this.parameterListFollow();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, Haibt.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 603;
			this.match(Haibt.Identifier);
			this.state = 604;
			this.match(Haibt.Colon);
			this.state = 605;
			this.varType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterListFollow(): ParameterListFollowContext {
		let localctx: ParameterListFollowContext = new ParameterListFollowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, Haibt.RULE_parameterListFollow);
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 63:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 607;
				this.match(Haibt.Comma);
				this.state = 608;
				this.parameterList();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let localctx: FunctionBodyContext = new FunctionBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, Haibt.RULE_functionBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 612;
			this.match(Haibt.OBrace);
			this.state = 613;
			this.statementList();
			this.state = 614;
			this.match(Haibt.CBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let localctx: StatementListContext = new StatementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, Haibt.RULE_statementList);
		try {
			this.state = 620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 5:
			case 6:
			case 20:
			case 21:
			case 29:
			case 32:
			case 35:
			case 36:
			case 48:
			case 49:
			case 50:
			case 56:
			case 58:
			case 60:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 616;
				this.statement();
				this.state = 617;
				this.statementList();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, Haibt.RULE_statement);
		try {
			this.state = 627;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 622;
				this.returnStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 623;
				this.assigmentStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 624;
				this.varDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 625;
				this.expressionStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 626;
				this.ifStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, Haibt.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 629;
			this.match(Haibt.Return);
			this.state = 630;
			this.result();
			this.state = 631;
			this.match(Haibt.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let localctx: ResultContext = new ResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, Haibt.RULE_result);
		try {
			this.state = 635;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 5:
			case 6:
			case 20:
			case 21:
			case 48:
			case 49:
			case 50:
			case 56:
			case 58:
			case 60:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 633;
				this.expression();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assigmentStatement(): AssigmentStatementContext {
		let localctx: AssigmentStatementContext = new AssigmentStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, Haibt.RULE_assigmentStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 637;
			this.match(Haibt.Identifier);
			this.state = 638;
			this.match(Haibt.Assign);
			this.state = 639;
			this.expression();
			this.state = 640;
			this.match(Haibt.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, Haibt.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 642;
			this.expression();
			this.state = 643;
			this.match(Haibt.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, Haibt.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 645;
			this.match(Haibt.If);
			this.state = 646;
			this.match(Haibt.OParen);
			this.state = 647;
			this.expression();
			this.state = 648;
			this.match(Haibt.CParen);
			this.state = 649;
			this.ifBody();
			this.state = 650;
			this.elseStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifBody(): IfBodyContext {
		let localctx: IfBodyContext = new IfBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, Haibt.RULE_ifBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 652;
			this.match(Haibt.OBrace);
			this.state = 653;
			this.statementList();
			this.state = 654;
			this.match(Haibt.CBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elseStatement(): ElseStatementContext {
		let localctx: ElseStatementContext = new ElseStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, Haibt.RULE_elseStatement);
		try {
			this.state = 659;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 656;
				this.match(Haibt.Else);
				this.state = 657;
				this.ifBody();
				}
				break;
			case 4:
			case 5:
			case 6:
			case 20:
			case 21:
			case 29:
			case 32:
			case 35:
			case 36:
			case 48:
			case 49:
			case 50:
			case 56:
			case 58:
			case 60:
			case 61:
			case 69:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,69,662,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,
	2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,
	68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,
	7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,
	82,2,83,7,83,2,84,7,84,2,85,7,85,1,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,180,8,
	1,1,1,1,1,1,1,3,1,185,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,
	4,3,4,199,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,3,6,216,8,6,1,7,1,7,3,7,220,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,
	9,3,9,232,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,
	11,3,11,246,8,11,1,12,1,12,1,12,3,12,251,8,12,1,13,1,13,1,13,1,13,3,13,
	257,8,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,265,8,14,1,15,1,15,1,15,3,15,
	270,8,15,1,15,1,15,3,15,274,8,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,
	3,17,284,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,3,19,296,
	8,19,1,19,1,19,1,19,3,19,301,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
	21,1,21,1,22,1,22,1,22,1,22,1,22,3,22,317,8,22,1,23,1,23,1,23,3,23,322,
	8,23,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,3,26,336,
	8,26,1,27,1,27,1,27,1,27,1,28,1,28,3,28,344,8,28,1,28,1,28,1,28,1,29,1,
	29,1,30,1,30,1,30,1,31,1,31,1,31,3,31,357,8,31,1,32,1,32,1,32,1,33,1,33,
	1,33,1,33,1,33,1,33,3,33,368,8,33,1,34,1,34,1,34,1,35,1,35,1,35,3,35,376,
	8,35,1,36,1,36,1,36,1,37,1,37,1,37,3,37,384,8,37,1,38,1,38,1,38,1,39,1,
	39,1,39,1,39,1,39,3,39,394,8,39,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,
	1,41,1,41,1,41,1,41,3,41,408,8,41,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,
	43,3,43,418,8,43,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,
	430,8,45,1,46,1,46,1,46,1,47,1,47,1,47,3,47,438,8,47,1,48,1,48,1,48,1,48,
	3,48,444,8,48,1,49,1,49,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,
	51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,469,8,51,
	1,52,1,52,1,52,1,52,3,52,475,8,52,1,53,1,53,1,53,3,53,480,8,53,1,54,1,54,
	1,54,1,54,1,54,1,54,1,54,1,54,3,54,490,8,54,1,55,1,55,1,55,1,55,1,56,1,
	56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,3,57,506,8,57,1,58,1,58,1,58,
	3,58,511,8,58,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,60,521,8,60,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,533,8,61,1,62,1,62,1,
	62,1,62,3,62,539,8,62,1,63,1,63,1,63,1,63,1,63,3,63,546,8,63,1,64,1,64,
	1,64,1,64,1,65,1,65,1,65,1,66,1,66,1,66,3,66,558,8,66,1,67,1,67,1,68,1,
	68,1,68,1,68,1,68,3,68,567,8,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,
	1,69,3,69,578,8,69,1,70,4,70,581,8,70,11,70,12,70,582,1,71,1,71,1,71,1,
	71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,3,72,596,8,72,1,73,1,73,1,73,1,73,
	3,73,602,8,73,1,74,1,74,1,74,1,74,1,75,1,75,1,75,3,75,611,8,75,1,76,1,76,
	1,76,1,76,1,77,1,77,1,77,1,77,3,77,621,8,77,1,78,1,78,1,78,1,78,1,78,3,
	78,628,8,78,1,79,1,79,1,79,1,79,1,80,1,80,3,80,636,8,80,1,81,1,81,1,81,
	1,81,1,81,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,
	84,1,84,1,85,1,85,1,85,3,85,660,8,85,1,85,0,0,86,0,2,4,6,8,10,12,14,16,
	18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
	66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
	110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
	146,148,150,152,154,156,158,160,162,164,166,168,170,0,7,2,0,47,47,69,69,
	1,0,35,36,1,0,43,48,1,0,4,6,2,0,20,21,48,50,3,0,27,27,29,30,33,34,3,0,11,
	11,19,19,60,60,652,0,172,1,0,0,0,2,184,1,0,0,0,4,186,1,0,0,0,6,191,1,0,
	0,0,8,198,1,0,0,0,10,200,1,0,0,0,12,215,1,0,0,0,14,219,1,0,0,0,16,221,1,
	0,0,0,18,231,1,0,0,0,20,233,1,0,0,0,22,245,1,0,0,0,24,250,1,0,0,0,26,256,
	1,0,0,0,28,264,1,0,0,0,30,273,1,0,0,0,32,275,1,0,0,0,34,283,1,0,0,0,36,
	285,1,0,0,0,38,300,1,0,0,0,40,302,1,0,0,0,42,309,1,0,0,0,44,316,1,0,0,0,
	46,321,1,0,0,0,48,323,1,0,0,0,50,325,1,0,0,0,52,335,1,0,0,0,54,337,1,0,
	0,0,56,343,1,0,0,0,58,348,1,0,0,0,60,350,1,0,0,0,62,356,1,0,0,0,64,358,
	1,0,0,0,66,367,1,0,0,0,68,369,1,0,0,0,70,375,1,0,0,0,72,377,1,0,0,0,74,
	383,1,0,0,0,76,385,1,0,0,0,78,393,1,0,0,0,80,395,1,0,0,0,82,407,1,0,0,0,
	84,409,1,0,0,0,86,417,1,0,0,0,88,419,1,0,0,0,90,429,1,0,0,0,92,431,1,0,
	0,0,94,437,1,0,0,0,96,443,1,0,0,0,98,445,1,0,0,0,100,447,1,0,0,0,102,468,
	1,0,0,0,104,474,1,0,0,0,106,479,1,0,0,0,108,489,1,0,0,0,110,491,1,0,0,0,
	112,495,1,0,0,0,114,505,1,0,0,0,116,510,1,0,0,0,118,512,1,0,0,0,120,520,
	1,0,0,0,122,532,1,0,0,0,124,538,1,0,0,0,126,545,1,0,0,0,128,547,1,0,0,0,
	130,551,1,0,0,0,132,557,1,0,0,0,134,559,1,0,0,0,136,566,1,0,0,0,138,577,
	1,0,0,0,140,580,1,0,0,0,142,584,1,0,0,0,144,595,1,0,0,0,146,601,1,0,0,0,
	148,603,1,0,0,0,150,610,1,0,0,0,152,612,1,0,0,0,154,620,1,0,0,0,156,627,
	1,0,0,0,158,629,1,0,0,0,160,635,1,0,0,0,162,637,1,0,0,0,164,642,1,0,0,0,
	166,645,1,0,0,0,168,652,1,0,0,0,170,659,1,0,0,0,172,173,3,2,1,0,173,174,
	5,0,0,1,174,1,1,0,0,0,175,180,3,4,2,0,176,180,3,36,18,0,177,180,3,16,8,
	0,178,180,3,10,5,0,179,175,1,0,0,0,179,176,1,0,0,0,179,177,1,0,0,0,179,
	178,1,0,0,0,180,181,1,0,0,0,181,182,3,2,1,0,182,185,1,0,0,0,183,185,1,0,
	0,0,184,179,1,0,0,0,184,183,1,0,0,0,185,3,1,0,0,0,186,187,5,24,0,0,187,
	188,3,6,3,0,188,189,5,62,0,0,189,190,3,2,1,0,190,5,1,0,0,0,191,192,5,69,
	0,0,192,193,3,8,4,0,193,7,1,0,0,0,194,195,5,66,0,0,195,196,5,69,0,0,196,
	199,3,8,4,0,197,199,1,0,0,0,198,194,1,0,0,0,198,197,1,0,0,0,199,9,1,0,0,
	0,200,201,5,42,0,0,201,202,5,69,0,0,202,203,5,1,0,0,203,204,5,60,0,0,204,
	205,3,12,6,0,205,206,5,61,0,0,206,11,1,0,0,0,207,208,5,69,0,0,208,209,3,
	14,7,0,209,210,5,65,0,0,210,211,3,44,22,0,211,212,5,62,0,0,212,213,3,12,
	6,0,213,216,1,0,0,0,214,216,1,0,0,0,215,207,1,0,0,0,215,214,1,0,0,0,216,
	13,1,0,0,0,217,220,5,64,0,0,218,220,1,0,0,0,219,217,1,0,0,0,219,218,1,0,
	0,0,220,15,1,0,0,0,221,222,5,26,0,0,222,223,5,69,0,0,223,224,5,60,0,0,224,
	225,3,18,9,0,225,226,5,61,0,0,226,17,1,0,0,0,227,228,3,20,10,0,228,229,
	3,18,9,0,229,232,1,0,0,0,230,232,1,0,0,0,231,227,1,0,0,0,231,230,1,0,0,
	0,232,19,1,0,0,0,233,234,5,66,0,0,234,235,5,69,0,0,235,236,3,22,11,0,236,
	237,5,60,0,0,237,238,3,26,13,0,238,239,5,61,0,0,239,21,1,0,0,0,240,241,
	3,24,12,0,241,242,5,69,0,0,242,243,3,22,11,0,243,246,1,0,0,0,244,246,1,
	0,0,0,245,240,1,0,0,0,245,244,1,0,0,0,246,23,1,0,0,0,247,251,5,66,0,0,248,
	249,5,13,0,0,249,251,5,66,0,0,250,247,1,0,0,0,250,248,1,0,0,0,251,25,1,
	0,0,0,252,253,3,28,14,0,253,254,3,26,13,0,254,257,1,0,0,0,255,257,1,0,0,
	0,256,252,1,0,0,0,256,255,1,0,0,0,257,27,1,0,0,0,258,259,7,0,0,0,259,260,
	5,65,0,0,260,261,3,30,15,0,261,262,5,62,0,0,262,265,1,0,0,0,263,265,3,20,
	10,0,264,258,1,0,0,0,264,263,1,0,0,0,265,29,1,0,0,0,266,270,5,21,0,0,267,
	270,3,32,16,0,268,270,5,69,0,0,269,266,1,0,0,0,269,267,1,0,0,0,269,268,
	1,0,0,0,270,271,1,0,0,0,271,274,3,30,15,0,272,274,1,0,0,0,273,269,1,0,0,
	0,273,272,1,0,0,0,274,31,1,0,0,0,275,276,5,50,0,0,276,277,3,34,17,0,277,
	33,1,0,0,0,278,284,5,40,0,0,279,284,5,39,0,0,280,284,5,38,0,0,281,284,5,
	9,0,0,282,284,1,0,0,0,283,278,1,0,0,0,283,279,1,0,0,0,283,280,1,0,0,0,283,
	281,1,0,0,0,283,282,1,0,0,0,284,35,1,0,0,0,285,286,5,25,0,0,286,287,5,69,
	0,0,287,288,5,60,0,0,288,289,3,38,19,0,289,290,5,61,0,0,290,37,1,0,0,0,
	291,296,3,40,20,0,292,296,3,50,25,0,293,296,3,54,27,0,294,296,3,142,71,
	0,295,291,1,0,0,0,295,292,1,0,0,0,295,293,1,0,0,0,295,294,1,0,0,0,296,297,
	1,0,0,0,297,298,3,38,19,0,298,301,1,0,0,0,299,301,1,0,0,0,300,295,1,0,0,
	0,300,299,1,0,0,0,301,39,1,0,0,0,302,303,3,42,21,0,303,304,5,69,0,0,304,
	305,5,65,0,0,305,306,3,44,22,0,306,307,3,52,26,0,307,308,5,62,0,0,308,41,
	1,0,0,0,309,310,7,1,0,0,310,43,1,0,0,0,311,312,3,48,24,0,312,313,3,46,23,
	0,313,317,1,0,0,0,314,315,5,69,0,0,315,317,3,46,23,0,316,311,1,0,0,0,316,
	314,1,0,0,0,317,45,1,0,0,0,318,319,5,56,0,0,319,322,5,57,0,0,320,322,1,
	0,0,0,321,318,1,0,0,0,321,320,1,0,0,0,322,47,1,0,0,0,323,324,7,2,0,0,324,
	49,1,0,0,0,325,326,5,37,0,0,326,327,5,69,0,0,327,328,5,65,0,0,328,329,3,
	44,22,0,329,330,3,52,26,0,330,331,5,62,0,0,331,51,1,0,0,0,332,333,5,1,0,
	0,333,336,3,58,29,0,334,336,1,0,0,0,335,332,1,0,0,0,335,334,1,0,0,0,336,
	53,1,0,0,0,337,338,5,52,0,0,338,339,5,58,0,0,339,340,3,56,28,0,340,55,1,
	0,0,0,341,344,5,48,0,0,342,344,3,120,60,0,343,341,1,0,0,0,343,342,1,0,0,
	0,344,345,1,0,0,0,345,346,5,59,0,0,346,347,5,62,0,0,347,57,1,0,0,0,348,
	349,3,60,30,0,349,59,1,0,0,0,350,351,3,64,32,0,351,352,3,62,31,0,352,61,
	1,0,0,0,353,354,5,1,0,0,354,357,3,60,30,0,355,357,1,0,0,0,356,353,1,0,0,
	0,356,355,1,0,0,0,357,63,1,0,0,0,358,359,3,68,34,0,359,360,3,66,33,0,360,
	65,1,0,0,0,361,362,5,64,0,0,362,363,3,58,29,0,363,364,5,65,0,0,364,365,
	3,64,32,0,365,368,1,0,0,0,366,368,1,0,0,0,367,361,1,0,0,0,367,366,1,0,0,
	0,368,67,1,0,0,0,369,370,3,72,36,0,370,371,3,70,35,0,371,69,1,0,0,0,372,
	373,5,15,0,0,373,376,3,68,34,0,374,376,1,0,0,0,375,372,1,0,0,0,375,374,
	1,0,0,0,376,71,1,0,0,0,377,378,3,76,38,0,378,379,3,74,37,0,379,73,1,0,0,
	0,380,381,5,16,0,0,381,384,3,72,36,0,382,384,1,0,0,0,383,380,1,0,0,0,383,
	382,1,0,0,0,384,75,1,0,0,0,385,386,3,80,40,0,386,387,3,78,39,0,387,77,1,
	0,0,0,388,389,5,17,0,0,389,394,3,76,38,0,390,391,5,18,0,0,391,394,3,76,
	38,0,392,394,1,0,0,0,393,388,1,0,0,0,393,390,1,0,0,0,393,392,1,0,0,0,394,
	79,1,0,0,0,395,396,3,84,42,0,396,397,3,82,41,0,397,81,1,0,0,0,398,399,5,
	11,0,0,399,408,3,80,40,0,400,401,5,12,0,0,401,408,3,80,40,0,402,403,5,13,
	0,0,403,408,3,80,40,0,404,405,5,14,0,0,405,408,3,80,40,0,406,408,1,0,0,
	0,407,398,1,0,0,0,407,400,1,0,0,0,407,402,1,0,0,0,407,404,1,0,0,0,407,406,
	1,0,0,0,408,83,1,0,0,0,409,410,3,88,44,0,410,411,3,86,43,0,411,85,1,0,0,
	0,412,413,5,4,0,0,413,418,3,84,42,0,414,415,5,5,0,0,415,418,3,84,42,0,416,
	418,1,0,0,0,417,412,1,0,0,0,417,414,1,0,0,0,417,416,1,0,0,0,418,87,1,0,
	0,0,419,420,3,92,46,0,420,421,3,90,45,0,421,89,1,0,0,0,422,423,5,7,0,0,
	423,430,3,88,44,0,424,425,5,8,0,0,425,430,3,88,44,0,426,427,5,9,0,0,427,
	430,3,88,44,0,428,430,1,0,0,0,429,422,1,0,0,0,429,424,1,0,0,0,429,426,1,
	0,0,0,429,428,1,0,0,0,430,91,1,0,0,0,431,432,3,96,48,0,432,433,3,94,47,
	0,433,93,1,0,0,0,434,435,5,28,0,0,435,438,3,44,22,0,436,438,1,0,0,0,437,
	434,1,0,0,0,437,436,1,0,0,0,438,95,1,0,0,0,439,444,3,100,50,0,440,441,3,
	98,49,0,441,442,3,100,50,0,442,444,1,0,0,0,443,439,1,0,0,0,443,440,1,0,
	0,0,444,97,1,0,0,0,445,446,7,3,0,0,446,99,1,0,0,0,447,448,3,108,54,0,448,
	449,3,102,51,0,449,101,1,0,0,0,450,451,5,2,0,0,451,469,3,102,51,0,452,453,
	5,3,0,0,453,469,3,102,51,0,454,455,5,66,0,0,455,456,5,69,0,0,456,469,3,
	102,51,0,457,458,5,58,0,0,458,459,3,104,52,0,459,460,5,59,0,0,460,461,3,
	102,51,0,461,469,1,0,0,0,462,463,5,56,0,0,463,464,3,58,29,0,464,465,5,57,
	0,0,465,466,3,102,51,0,466,469,1,0,0,0,467,469,1,0,0,0,468,450,1,0,0,0,
	468,452,1,0,0,0,468,454,1,0,0,0,468,457,1,0,0,0,468,462,1,0,0,0,468,467,
	1,0,0,0,469,103,1,0,0,0,470,471,3,58,29,0,471,472,3,106,53,0,472,475,1,
	0,0,0,473,475,1,0,0,0,474,470,1,0,0,0,474,473,1,0,0,0,475,105,1,0,0,0,476,
	477,5,63,0,0,477,480,3,104,52,0,478,480,1,0,0,0,479,476,1,0,0,0,479,478,
	1,0,0,0,480,107,1,0,0,0,481,490,5,69,0,0,482,490,3,118,59,0,483,484,5,58,
	0,0,484,485,3,58,29,0,485,486,5,59,0,0,486,490,1,0,0,0,487,490,3,112,56,
	0,488,490,3,110,55,0,489,481,1,0,0,0,489,482,1,0,0,0,489,483,1,0,0,0,489,
	487,1,0,0,0,489,488,1,0,0,0,490,109,1,0,0,0,491,492,5,56,0,0,492,493,3,
	104,52,0,493,494,5,57,0,0,494,111,1,0,0,0,495,496,5,60,0,0,496,497,3,114,
	57,0,497,498,5,61,0,0,498,113,1,0,0,0,499,500,5,69,0,0,500,501,5,65,0,0,
	501,502,3,58,29,0,502,503,3,116,58,0,503,506,1,0,0,0,504,506,1,0,0,0,505,
	499,1,0,0,0,505,504,1,0,0,0,506,115,1,0,0,0,507,508,5,63,0,0,508,511,3,
	114,57,0,509,511,1,0,0,0,510,507,1,0,0,0,510,509,1,0,0,0,511,117,1,0,0,
	0,512,513,7,4,0,0,513,119,1,0,0,0,514,515,5,11,0,0,515,516,5,69,0,0,516,
	517,3,124,62,0,517,518,3,122,61,0,518,521,1,0,0,0,519,521,1,0,0,0,520,514,
	1,0,0,0,520,519,1,0,0,0,521,121,1,0,0,0,522,523,5,13,0,0,523,524,3,138,
	69,0,524,525,5,19,0,0,525,526,5,69,0,0,526,527,5,13,0,0,527,528,3,120,60,
	0,528,533,1,0,0,0,529,530,5,8,0,0,530,531,5,13,0,0,531,533,3,120,60,0,532,
	522,1,0,0,0,532,529,1,0,0,0,533,123,1,0,0,0,534,535,3,126,63,0,535,536,
	3,124,62,0,536,539,1,0,0,0,537,539,1,0,0,0,538,534,1,0,0,0,538,537,1,0,
	0,0,539,125,1,0,0,0,540,541,5,60,0,0,541,542,5,69,0,0,542,546,5,61,0,0,
	543,546,3,128,64,0,544,546,3,130,65,0,545,540,1,0,0,0,545,543,1,0,0,0,545,
	544,1,0,0,0,546,127,1,0,0,0,547,548,3,134,67,0,548,549,5,1,0,0,549,550,
	3,136,68,0,550,129,1,0,0,0,551,552,5,69,0,0,552,553,3,132,66,0,553,131,
	1,0,0,0,554,555,5,1,0,0,555,558,3,136,68,0,556,558,1,0,0,0,557,554,1,0,
	0,0,557,556,1,0,0,0,558,133,1,0,0,0,559,560,7,5,0,0,560,135,1,0,0,0,561,
	567,5,20,0,0,562,563,5,60,0,0,563,564,3,58,29,0,564,565,5,61,0,0,565,567,
	1,0,0,0,566,561,1,0,0,0,566,562,1,0,0,0,567,137,1,0,0,0,568,578,3,120,60,
	0,569,570,3,140,70,0,570,571,3,138,69,0,571,578,1,0,0,0,572,573,5,60,0,
	0,573,574,3,58,29,0,574,575,5,61,0,0,575,576,3,138,69,0,576,578,1,0,0,0,
	577,568,1,0,0,0,577,569,1,0,0,0,577,572,1,0,0,0,578,139,1,0,0,0,579,581,
	8,6,0,0,580,579,1,0,0,0,581,582,1,0,0,0,582,580,1,0,0,0,582,583,1,0,0,0,
	583,141,1,0,0,0,584,585,5,41,0,0,585,586,5,69,0,0,586,587,5,58,0,0,587,
	588,3,146,73,0,588,589,5,59,0,0,589,590,3,144,72,0,590,591,3,152,76,0,591,
	143,1,0,0,0,592,593,5,65,0,0,593,596,3,44,22,0,594,596,1,0,0,0,595,592,
	1,0,0,0,595,594,1,0,0,0,596,145,1,0,0,0,597,598,3,148,74,0,598,599,3,150,
	75,0,599,602,1,0,0,0,600,602,1,0,0,0,601,597,1,0,0,0,601,600,1,0,0,0,602,
	147,1,0,0,0,603,604,5,69,0,0,604,605,5,65,0,0,605,606,3,44,22,0,606,149,
	1,0,0,0,607,608,5,63,0,0,608,611,3,146,73,0,609,611,1,0,0,0,610,607,1,0,
	0,0,610,609,1,0,0,0,611,151,1,0,0,0,612,613,5,60,0,0,613,614,3,154,77,0,
	614,615,5,61,0,0,615,153,1,0,0,0,616,617,3,156,78,0,617,618,3,154,77,0,
	618,621,1,0,0,0,619,621,1,0,0,0,620,616,1,0,0,0,620,619,1,0,0,0,621,155,
	1,0,0,0,622,628,3,158,79,0,623,628,3,162,81,0,624,628,3,40,20,0,625,628,
	3,164,82,0,626,628,3,166,83,0,627,622,1,0,0,0,627,623,1,0,0,0,627,624,1,
	0,0,0,627,625,1,0,0,0,627,626,1,0,0,0,628,157,1,0,0,0,629,630,5,32,0,0,
	630,631,3,160,80,0,631,632,5,62,0,0,632,159,1,0,0,0,633,636,3,58,29,0,634,
	636,1,0,0,0,635,633,1,0,0,0,635,634,1,0,0,0,636,161,1,0,0,0,637,638,5,69,
	0,0,638,639,5,1,0,0,639,640,3,58,29,0,640,641,5,62,0,0,641,163,1,0,0,0,
	642,643,3,58,29,0,643,644,5,62,0,0,644,165,1,0,0,0,645,646,5,29,0,0,646,
	647,5,58,0,0,647,648,3,58,29,0,648,649,5,59,0,0,649,650,3,168,84,0,650,
	651,3,170,85,0,651,167,1,0,0,0,652,653,5,60,0,0,653,654,3,154,77,0,654,
	655,5,61,0,0,655,169,1,0,0,0,656,657,5,30,0,0,657,660,3,168,84,0,658,660,
	1,0,0,0,659,656,1,0,0,0,659,658,1,0,0,0,660,171,1,0,0,0,50,179,184,198,
	215,219,231,245,250,256,264,269,273,283,295,300,316,321,335,343,356,367,
	375,383,393,407,417,429,437,443,468,474,479,489,505,510,520,532,538,545,
	557,566,577,582,595,601,610,620,627,635,659];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Haibt.__ATN) {
			Haibt.__ATN = new ATNDeserializer().deserialize(Haibt._serializedATN);
		}

		return Haibt.__ATN;
	}


	static DecisionsToDFA = Haibt._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public module_(): ModuleContext {
		return this.getTypedRuleContext(ModuleContext, 0) as ModuleContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(Haibt.EOF, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_program;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public module_(): ModuleContext {
		return this.getTypedRuleContext(ModuleContext, 0) as ModuleContext;
	}
	public uses(): UsesContext {
		return this.getTypedRuleContext(UsesContext, 0) as UsesContext;
	}
	public component(): ComponentContext {
		return this.getTypedRuleContext(ComponentContext, 0) as ComponentContext;
	}
	public style(): StyleContext {
		return this.getTypedRuleContext(StyleContext, 0) as StyleContext;
	}
	public typeDef(): TypeDefContext {
		return this.getTypedRuleContext(TypeDefContext, 0) as TypeDefContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_module;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterModule) {
	 		listener.enterModule(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitModule) {
	 		listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsesContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Use(): TerminalNode {
		return this.getToken(Haibt.Use, 0);
	}
	public usePath(): UsePathContext {
		return this.getTypedRuleContext(UsePathContext, 0) as UsePathContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
	public module_(): ModuleContext {
		return this.getTypedRuleContext(ModuleContext, 0) as ModuleContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_uses;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterUses) {
	 		listener.enterUses(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitUses) {
	 		listener.exitUses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitUses) {
			return visitor.visitUses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsePathContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public useSubModule(): UseSubModuleContext {
		return this.getTypedRuleContext(UseSubModuleContext, 0) as UseSubModuleContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_usePath;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterUsePath) {
	 		listener.enterUsePath(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitUsePath) {
	 		listener.exitUsePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitUsePath) {
			return visitor.visitUsePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseSubModuleContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Dot(): TerminalNode {
		return this.getToken(Haibt.Dot, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public useSubModule(): UseSubModuleContext {
		return this.getTypedRuleContext(UseSubModuleContext, 0) as UseSubModuleContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_useSubModule;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterUseSubModule) {
	 		listener.enterUseSubModule(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitUseSubModule) {
	 		listener.exitUseSubModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitUseSubModule) {
			return visitor.visitUseSubModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Type(): TerminalNode {
		return this.getToken(Haibt.Type, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public Assign(): TerminalNode {
		return this.getToken(Haibt.Assign, 0);
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public typeDefBody(): TypeDefBodyContext {
		return this.getTypedRuleContext(TypeDefBodyContext, 0) as TypeDefBodyContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_typeDef;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterTypeDef) {
	 		listener.enterTypeDef(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitTypeDef) {
	 		listener.exitTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitTypeDef) {
			return visitor.visitTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefBodyContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public optional(): OptionalContext {
		return this.getTypedRuleContext(OptionalContext, 0) as OptionalContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(Haibt.Colon, 0);
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
	public typeDefBody(): TypeDefBodyContext {
		return this.getTypedRuleContext(TypeDefBodyContext, 0) as TypeDefBodyContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_typeDefBody;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterTypeDefBody) {
	 		listener.enterTypeDefBody(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitTypeDefBody) {
	 		listener.exitTypeDefBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitTypeDefBody) {
			return visitor.visitTypeDefBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Question(): TerminalNode {
		return this.getToken(Haibt.Question, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_optional;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterOptional) {
	 		listener.enterOptional(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitOptional) {
	 		listener.exitOptional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitOptional) {
			return visitor.visitOptional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Style(): TerminalNode {
		return this.getToken(Haibt.Style, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public styleClasses(): StyleClassesContext {
		return this.getTypedRuleContext(StyleClassesContext, 0) as StyleClassesContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_style;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStyle) {
	 		listener.enterStyle(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStyle) {
	 		listener.exitStyle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStyle) {
			return visitor.visitStyle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleClassesContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public styleClass(): StyleClassContext {
		return this.getTypedRuleContext(StyleClassContext, 0) as StyleClassContext;
	}
	public styleClasses(): StyleClassesContext {
		return this.getTypedRuleContext(StyleClassesContext, 0) as StyleClassesContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_styleClasses;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStyleClasses) {
	 		listener.enterStyleClasses(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStyleClasses) {
	 		listener.exitStyleClasses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStyleClasses) {
			return visitor.visitStyleClasses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleClassContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Dot(): TerminalNode {
		return this.getToken(Haibt.Dot, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public styleCombine(): StyleCombineContext {
		return this.getTypedRuleContext(StyleCombineContext, 0) as StyleCombineContext;
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public styleRules(): StyleRulesContext {
		return this.getTypedRuleContext(StyleRulesContext, 0) as StyleRulesContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_styleClass;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStyleClass) {
	 		listener.enterStyleClass(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStyleClass) {
	 		listener.exitStyleClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStyleClass) {
			return visitor.visitStyleClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleCombineContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stlyeModifier(): StlyeModifierContext {
		return this.getTypedRuleContext(StlyeModifierContext, 0) as StlyeModifierContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public styleCombine(): StyleCombineContext {
		return this.getTypedRuleContext(StyleCombineContext, 0) as StyleCombineContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_styleCombine;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStyleCombine) {
	 		listener.enterStyleCombine(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStyleCombine) {
	 		listener.exitStyleCombine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStyleCombine) {
			return visitor.visitStyleCombine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StlyeModifierContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Dot(): TerminalNode {
		return this.getToken(Haibt.Dot, 0);
	}
	public GreaterThan(): TerminalNode {
		return this.getToken(Haibt.GreaterThan, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_stlyeModifier;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStlyeModifier) {
	 		listener.enterStlyeModifier(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStlyeModifier) {
	 		listener.exitStlyeModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStlyeModifier) {
			return visitor.visitStlyeModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleRulesContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public styleRule(): StyleRuleContext {
		return this.getTypedRuleContext(StyleRuleContext, 0) as StyleRuleContext;
	}
	public styleRules(): StyleRulesContext {
		return this.getTypedRuleContext(StyleRulesContext, 0) as StyleRulesContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_styleRules;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStyleRules) {
	 		listener.enterStyleRules(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStyleRules) {
	 		listener.exitStyleRules(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStyleRules) {
			return visitor.visitStyleRules(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleRuleContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Colon(): TerminalNode {
		return this.getToken(Haibt.Colon, 0);
	}
	public styleRuleFollow(): StyleRuleFollowContext {
		return this.getTypedRuleContext(StyleRuleFollowContext, 0) as StyleRuleFollowContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public Color(): TerminalNode {
		return this.getToken(Haibt.Color, 0);
	}
	public styleClass(): StyleClassContext {
		return this.getTypedRuleContext(StyleClassContext, 0) as StyleClassContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_styleRule;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStyleRule) {
	 		listener.enterStyleRule(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStyleRule) {
	 		listener.exitStyleRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStyleRule) {
			return visitor.visitStyleRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleRuleFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public styleRuleFollow(): StyleRuleFollowContext {
		return this.getTypedRuleContext(StyleRuleFollowContext, 0) as StyleRuleFollowContext;
	}
	public HEX_COLOR(): TerminalNode {
		return this.getToken(Haibt.HEX_COLOR, 0);
	}
	public measure(): MeasureContext {
		return this.getTypedRuleContext(MeasureContext, 0) as MeasureContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_styleRuleFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStyleRuleFollow) {
	 		listener.enterStyleRuleFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStyleRuleFollow) {
	 		listener.exitStyleRuleFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStyleRuleFollow) {
			return visitor.visitStyleRuleFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasureContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NumberValue(): TerminalNode {
		return this.getToken(Haibt.NumberValue, 0);
	}
	public measureUnit(): MeasureUnitContext {
		return this.getTypedRuleContext(MeasureUnitContext, 0) as MeasureUnitContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_measure;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterMeasure) {
	 		listener.enterMeasure(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitMeasure) {
	 		listener.exitMeasure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitMeasure) {
			return visitor.visitMeasure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasureUnitContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Px(): TerminalNode {
		return this.getToken(Haibt.Px, 0);
	}
	public Rem(): TerminalNode {
		return this.getToken(Haibt.Rem, 0);
	}
	public Em(): TerminalNode {
		return this.getToken(Haibt.Em, 0);
	}
	public Mod(): TerminalNode {
		return this.getToken(Haibt.Mod, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_measureUnit;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterMeasureUnit) {
	 		listener.enterMeasureUnit(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitMeasureUnit) {
	 		listener.exitMeasureUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitMeasureUnit) {
			return visitor.visitMeasureUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Component(): TerminalNode {
		return this.getToken(Haibt.Component, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public componentBody(): ComponentBodyContext {
		return this.getTypedRuleContext(ComponentBodyContext, 0) as ComponentBodyContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_component;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterComponent) {
	 		listener.enterComponent(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitComponent) {
	 		listener.exitComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentBodyContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public componentBody(): ComponentBodyContext {
		return this.getTypedRuleContext(ComponentBodyContext, 0) as ComponentBodyContext;
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public propDeclaration(): PropDeclarationContext {
		return this.getTypedRuleContext(PropDeclarationContext, 0) as PropDeclarationContext;
	}
	public render(): RenderContext {
		return this.getTypedRuleContext(RenderContext, 0) as RenderContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_componentBody;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterComponentBody) {
	 		listener.enterComponentBody(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitComponentBody) {
	 		listener.exitComponentBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitComponentBody) {
			return visitor.visitComponentBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclarationContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varMutability(): VarMutabilityContext {
		return this.getTypedRuleContext(VarMutabilityContext, 0) as VarMutabilityContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(Haibt.Colon, 0);
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
	public initValue(): InitValueContext {
		return this.getTypedRuleContext(InitValueContext, 0) as InitValueContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_varDeclaration;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterVarDeclaration) {
	 		listener.enterVarDeclaration(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitVarDeclaration) {
	 		listener.exitVarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitVarDeclaration) {
			return visitor.visitVarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarMutabilityContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Var(): TerminalNode {
		return this.getToken(Haibt.Var, 0);
	}
	public Val(): TerminalNode {
		return this.getToken(Haibt.Val, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_varMutability;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterVarMutability) {
	 		listener.enterVarMutability(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitVarMutability) {
	 		listener.exitVarMutability(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitVarMutability) {
			return visitor.visitVarMutability(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarTypeContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public array(): ArrayContext {
		return this.getTypedRuleContext(ArrayContext, 0) as ArrayContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_varType;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterVarType) {
	 		listener.enterVarType(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitVarType) {
	 		listener.exitVarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitVarType) {
			return visitor.visitVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBracnk(): TerminalNode {
		return this.getToken(Haibt.OBracnk, 0);
	}
	public CBracnk(): TerminalNode {
		return this.getToken(Haibt.CBracnk, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_array;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterArray) {
	 		listener.enterArray(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitArray) {
	 		listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number(): TerminalNode {
		return this.getToken(Haibt.Number, 0);
	}
	public String(): TerminalNode {
		return this.getToken(Haibt.String, 0);
	}
	public Boolean(): TerminalNode {
		return this.getToken(Haibt.Boolean, 0);
	}
	public Void(): TerminalNode {
		return this.getToken(Haibt.Void, 0);
	}
	public Color(): TerminalNode {
		return this.getToken(Haibt.Color, 0);
	}
	public Undefined(): TerminalNode {
		return this.getToken(Haibt.Undefined, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_primitiveType;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterPrimitiveType) {
	 		listener.enterPrimitiveType(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitPrimitiveType) {
	 		listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropDeclarationContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Prop(): TerminalNode {
		return this.getToken(Haibt.Prop, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(Haibt.Colon, 0);
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
	public initValue(): InitValueContext {
		return this.getTypedRuleContext(InitValueContext, 0) as InitValueContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_propDeclaration;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterPropDeclaration) {
	 		listener.enterPropDeclaration(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitPropDeclaration) {
	 		listener.exitPropDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitPropDeclaration) {
			return visitor.visitPropDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitValueContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Assign(): TerminalNode {
		return this.getToken(Haibt.Assign, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_initValue;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterInitValue) {
	 		listener.enterInitValue(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitInitValue) {
	 		listener.exitInitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitInitValue) {
			return visitor.visitInitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenderContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Render(): TerminalNode {
		return this.getToken(Haibt.Render, 0);
	}
	public OParen(): TerminalNode {
		return this.getToken(Haibt.OParen, 0);
	}
	public renderFollow(): RenderFollowContext {
		return this.getTypedRuleContext(RenderFollowContext, 0) as RenderFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_render;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterRender) {
	 		listener.enterRender(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitRender) {
	 		listener.exitRender(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitRender) {
			return visitor.visitRender(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenderFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CParen(): TerminalNode {
		return this.getToken(Haibt.CParen, 0);
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
	public Undefined(): TerminalNode {
		return this.getToken(Haibt.Undefined, 0);
	}
	public template(): TemplateContext {
		return this.getTypedRuleContext(TemplateContext, 0) as TemplateContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_renderFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterRenderFollow) {
	 		listener.enterRenderFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitRenderFollow) {
	 		listener.exitRenderFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitRenderFollow) {
			return visitor.visitRenderFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_expression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public assignmentFollow(): AssignmentFollowContext {
		return this.getTypedRuleContext(AssignmentFollowContext, 0) as AssignmentFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_assignmentExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAssignmentExpression) {
	 		listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAssignmentExpression) {
	 		listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Assign(): TerminalNode {
		return this.getToken(Haibt.Assign, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_assignmentFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAssignmentFollow) {
	 		listener.enterAssignmentFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAssignmentFollow) {
	 		listener.exitAssignmentFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAssignmentFollow) {
			return visitor.visitAssignmentFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getTypedRuleContext(LogicalOrExpressionContext, 0) as LogicalOrExpressionContext;
	}
	public ternaryExpression(): TernaryExpressionContext {
		return this.getTypedRuleContext(TernaryExpressionContext, 0) as TernaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_conditionalExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterConditionalExpression) {
	 		listener.enterConditionalExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitConditionalExpression) {
	 		listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TernaryExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Question(): TerminalNode {
		return this.getToken(Haibt.Question, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(Haibt.Colon, 0);
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_ternaryExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterTernaryExpression) {
	 		listener.enterTernaryExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitTernaryExpression) {
	 		listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getTypedRuleContext(LogicalAndExpressionContext, 0) as LogicalAndExpressionContext;
	}
	public logicalOrFollow(): LogicalOrFollowContext {
		return this.getTypedRuleContext(LogicalOrFollowContext, 0) as LogicalOrFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_logicalOrExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterLogicalOrExpression) {
	 		listener.enterLogicalOrExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitLogicalOrExpression) {
	 		listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Or(): TerminalNode {
		return this.getToken(Haibt.Or, 0);
	}
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getTypedRuleContext(LogicalOrExpressionContext, 0) as LogicalOrExpressionContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_logicalOrFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterLogicalOrFollow) {
	 		listener.enterLogicalOrFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitLogicalOrFollow) {
	 		listener.exitLogicalOrFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitLogicalOrFollow) {
			return visitor.visitLogicalOrFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public logicalAndFollow(): LogicalAndFollowContext {
		return this.getTypedRuleContext(LogicalAndFollowContext, 0) as LogicalAndFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_logicalAndExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterLogicalAndExpression) {
	 		listener.enterLogicalAndExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitLogicalAndExpression) {
	 		listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public And(): TerminalNode {
		return this.getToken(Haibt.And, 0);
	}
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getTypedRuleContext(LogicalAndExpressionContext, 0) as LogicalAndExpressionContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_logicalAndFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterLogicalAndFollow) {
	 		listener.enterLogicalAndFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitLogicalAndFollow) {
	 		listener.exitLogicalAndFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitLogicalAndFollow) {
			return visitor.visitLogicalAndFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public equalityFollow(): EqualityFollowContext {
		return this.getTypedRuleContext(EqualityFollowContext, 0) as EqualityFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_equalityExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Equal(): TerminalNode {
		return this.getToken(Haibt.Equal, 0);
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public NotEqual(): TerminalNode {
		return this.getToken(Haibt.NotEqual, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_equalityFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterEqualityFollow) {
	 		listener.enterEqualityFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitEqualityFollow) {
	 		listener.exitEqualityFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitEqualityFollow) {
			return visitor.visitEqualityFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public relationalFollow(): RelationalFollowContext {
		return this.getTypedRuleContext(RelationalFollowContext, 0) as RelationalFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_relationalExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LessThan(): TerminalNode {
		return this.getToken(Haibt.LessThan, 0);
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public LessThanOrEqual(): TerminalNode {
		return this.getToken(Haibt.LessThanOrEqual, 0);
	}
	public GreaterThan(): TerminalNode {
		return this.getToken(Haibt.GreaterThan, 0);
	}
	public GreaterThanOrEqual(): TerminalNode {
		return this.getToken(Haibt.GreaterThanOrEqual, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_relationalFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterRelationalFollow) {
	 		listener.enterRelationalFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitRelationalFollow) {
	 		listener.exitRelationalFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitRelationalFollow) {
			return visitor.visitRelationalFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public additiveFollow(): AdditiveFollowContext {
		return this.getTypedRuleContext(AdditiveFollowContext, 0) as AdditiveFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_additiveExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Plus(): TerminalNode {
		return this.getToken(Haibt.Plus, 0);
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public Minus(): TerminalNode {
		return this.getToken(Haibt.Minus, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_additiveFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAdditiveFollow) {
	 		listener.enterAdditiveFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAdditiveFollow) {
	 		listener.exitAdditiveFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAdditiveFollow) {
			return visitor.visitAdditiveFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
	public multiplicativeFollow(): MultiplicativeFollowContext {
		return this.getTypedRuleContext(MultiplicativeFollowContext, 0) as MultiplicativeFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_multiplicativeExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Star(): TerminalNode {
		return this.getToken(Haibt.Star, 0);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public Slash(): TerminalNode {
		return this.getToken(Haibt.Slash, 0);
	}
	public Mod(): TerminalNode {
		return this.getToken(Haibt.Mod, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_multiplicativeFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterMultiplicativeFollow) {
	 		listener.enterMultiplicativeFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitMultiplicativeFollow) {
	 		listener.exitMultiplicativeFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitMultiplicativeFollow) {
			return visitor.visitMultiplicativeFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public castFollow(): CastFollowContext {
		return this.getTypedRuleContext(CastFollowContext, 0) as CastFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_castExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public As(): TerminalNode {
		return this.getToken(Haibt.As, 0);
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_castFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterCastFollow) {
	 		listener.enterCastFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitCastFollow) {
	 		listener.exitCastFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitCastFollow) {
			return visitor.visitCastFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public unaryOperator(): UnaryOperatorContext {
		return this.getTypedRuleContext(UnaryOperatorContext, 0) as UnaryOperatorContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_unaryExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Plus(): TerminalNode {
		return this.getToken(Haibt.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(Haibt.Minus, 0);
	}
	public Not(): TerminalNode {
		return this.getToken(Haibt.Not, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_unaryOperator;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterUnaryOperator) {
	 		listener.enterUnaryOperator(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitUnaryOperator) {
	 		listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public postfixFollow(): PostfixFollowContext {
		return this.getTypedRuleContext(PostfixFollowContext, 0) as PostfixFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_postfixExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterPostfixExpression) {
	 		listener.enterPostfixExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitPostfixExpression) {
	 		listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PlusPlus(): TerminalNode {
		return this.getToken(Haibt.PlusPlus, 0);
	}
	public postfixFollow(): PostfixFollowContext {
		return this.getTypedRuleContext(PostfixFollowContext, 0) as PostfixFollowContext;
	}
	public MinusMinus(): TerminalNode {
		return this.getToken(Haibt.MinusMinus, 0);
	}
	public Dot(): TerminalNode {
		return this.getToken(Haibt.Dot, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public OParen(): TerminalNode {
		return this.getToken(Haibt.OParen, 0);
	}
	public argExpList(): ArgExpListContext {
		return this.getTypedRuleContext(ArgExpListContext, 0) as ArgExpListContext;
	}
	public CParen(): TerminalNode {
		return this.getToken(Haibt.CParen, 0);
	}
	public OBracnk(): TerminalNode {
		return this.getToken(Haibt.OBracnk, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CBracnk(): TerminalNode {
		return this.getToken(Haibt.CBracnk, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_postfixFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterPostfixFollow) {
	 		listener.enterPostfixFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitPostfixFollow) {
	 		listener.exitPostfixFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitPostfixFollow) {
			return visitor.visitPostfixFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgExpListContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public argExpListFollow(): ArgExpListFollowContext {
		return this.getTypedRuleContext(ArgExpListFollowContext, 0) as ArgExpListFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_argExpList;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterArgExpList) {
	 		listener.enterArgExpList(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitArgExpList) {
	 		listener.exitArgExpList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitArgExpList) {
			return visitor.visitArgExpList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgExpListFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Comma(): TerminalNode {
		return this.getToken(Haibt.Comma, 0);
	}
	public argExpList(): ArgExpListContext {
		return this.getTypedRuleContext(ArgExpListContext, 0) as ArgExpListContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_argExpListFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterArgExpListFollow) {
	 		listener.enterArgExpListFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitArgExpListFollow) {
	 		listener.exitArgExpListFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitArgExpListFollow) {
			return visitor.visitArgExpListFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
	public OParen(): TerminalNode {
		return this.getToken(Haibt.OParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CParen(): TerminalNode {
		return this.getToken(Haibt.CParen, 0);
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_primaryExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBracnk(): TerminalNode {
		return this.getToken(Haibt.OBracnk, 0);
	}
	public argExpList(): ArgExpListContext {
		return this.getTypedRuleContext(ArgExpListContext, 0) as ArgExpListContext;
	}
	public CBracnk(): TerminalNode {
		return this.getToken(Haibt.CBracnk, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_arrayLiteral;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterArrayLiteral) {
	 		listener.enterArrayLiteral(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitArrayLiteral) {
	 		listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public objectLiteralBody(): ObjectLiteralBodyContext {
		return this.getTypedRuleContext(ObjectLiteralBodyContext, 0) as ObjectLiteralBodyContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_objectLiteral;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterObjectLiteral) {
	 		listener.enterObjectLiteral(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitObjectLiteral) {
	 		listener.exitObjectLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralBodyContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(Haibt.Colon, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public objectLiteralBodyFollow(): ObjectLiteralBodyFollowContext {
		return this.getTypedRuleContext(ObjectLiteralBodyFollowContext, 0) as ObjectLiteralBodyFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_objectLiteralBody;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterObjectLiteralBody) {
	 		listener.enterObjectLiteralBody(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitObjectLiteralBody) {
	 		listener.exitObjectLiteralBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitObjectLiteralBody) {
			return visitor.visitObjectLiteralBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralBodyFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Comma(): TerminalNode {
		return this.getToken(Haibt.Comma, 0);
	}
	public objectLiteralBody(): ObjectLiteralBodyContext {
		return this.getTypedRuleContext(ObjectLiteralBodyContext, 0) as ObjectLiteralBodyContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_objectLiteralBodyFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterObjectLiteralBodyFollow) {
	 		listener.enterObjectLiteralBodyFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitObjectLiteralBodyFollow) {
	 		listener.exitObjectLiteralBodyFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitObjectLiteralBodyFollow) {
			return visitor.visitObjectLiteralBodyFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NumberValue(): TerminalNode {
		return this.getToken(Haibt.NumberValue, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(Haibt.StringLiteral, 0);
	}
	public BoolValue(): TerminalNode {
		return this.getToken(Haibt.BoolValue, 0);
	}
	public Undefined(): TerminalNode {
		return this.getToken(Haibt.Undefined, 0);
	}
	public HEX_COLOR(): TerminalNode {
		return this.getToken(Haibt.HEX_COLOR, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_constantExpression;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterConstantExpression) {
	 		listener.enterConstantExpression(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitConstantExpression) {
	 		listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LessThan(): TerminalNode {
		return this.getToken(Haibt.LessThan, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public attributes(): AttributesContext {
		return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
	}
	public templateFollow(): TemplateFollowContext {
		return this.getTypedRuleContext(TemplateFollowContext, 0) as TemplateFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_template;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterTemplate) {
	 		listener.enterTemplate(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitTemplate) {
	 		listener.exitTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitTemplate) {
			return visitor.visitTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GreaterThan_list(): TerminalNode[] {
	    	return this.getTokens(Haibt.GreaterThan);
	}
	public GreaterThan(i: number): TerminalNode {
		return this.getToken(Haibt.GreaterThan, i);
	}
	public templateBody(): TemplateBodyContext {
		return this.getTypedRuleContext(TemplateBodyContext, 0) as TemplateBodyContext;
	}
	public CloseTag(): TerminalNode {
		return this.getToken(Haibt.CloseTag, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public template(): TemplateContext {
		return this.getTypedRuleContext(TemplateContext, 0) as TemplateContext;
	}
	public Slash(): TerminalNode {
		return this.getToken(Haibt.Slash, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_templateFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterTemplateFollow) {
	 		listener.enterTemplateFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitTemplateFollow) {
	 		listener.exitTemplateFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitTemplateFollow) {
			return visitor.visitTemplateFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute(): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, 0) as AttributeContext;
	}
	public attributes(): AttributesContext {
		return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_attributes;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAttributes) {
	 		listener.enterAttributes(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAttributes) {
	 		listener.exitAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAttributes) {
			return visitor.visitAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
	public directive(): DirectiveContext {
		return this.getTypedRuleContext(DirectiveContext, 0) as DirectiveContext;
	}
	public attributeBind(): AttributeBindContext {
		return this.getTypedRuleContext(AttributeBindContext, 0) as AttributeBindContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_attribute;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAttribute) {
	 		listener.enterAttribute(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAttribute) {
	 		listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public directiveName(): DirectiveNameContext {
		return this.getTypedRuleContext(DirectiveNameContext, 0) as DirectiveNameContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(Haibt.Assign, 0);
	}
	public attributeValue(): AttributeValueContext {
		return this.getTypedRuleContext(AttributeValueContext, 0) as AttributeValueContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_directive;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterDirective) {
	 		listener.enterDirective(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitDirective) {
	 		listener.exitDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitDirective) {
			return visitor.visitDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeBindContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public attributeBindFollow(): AttributeBindFollowContext {
		return this.getTypedRuleContext(AttributeBindFollowContext, 0) as AttributeBindFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_attributeBind;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAttributeBind) {
	 		listener.enterAttributeBind(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAttributeBind) {
	 		listener.exitAttributeBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAttributeBind) {
			return visitor.visitAttributeBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeBindFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Assign(): TerminalNode {
		return this.getToken(Haibt.Assign, 0);
	}
	public attributeValue(): AttributeValueContext {
		return this.getTypedRuleContext(AttributeValueContext, 0) as AttributeValueContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_attributeBindFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAttributeBindFollow) {
	 		listener.enterAttributeBindFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAttributeBindFollow) {
	 		listener.exitAttributeBindFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAttributeBindFollow) {
			return visitor.visitAttributeBindFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveNameContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(Haibt.If, 0);
	}
	public Else(): TerminalNode {
		return this.getToken(Haibt.Else, 0);
	}
	public Switch(): TerminalNode {
		return this.getToken(Haibt.Switch, 0);
	}
	public Case(): TerminalNode {
		return this.getToken(Haibt.Case, 0);
	}
	public Template(): TerminalNode {
		return this.getToken(Haibt.Template, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_directiveName;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterDirectiveName) {
	 		listener.enterDirectiveName(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitDirectiveName) {
	 		listener.exitDirectiveName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitDirectiveName) {
			return visitor.visitDirectiveName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValueContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(Haibt.StringLiteral, 0);
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_attributeValue;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAttributeValue) {
	 		listener.enterAttributeValue(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAttributeValue) {
	 		listener.exitAttributeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAttributeValue) {
			return visitor.visitAttributeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateBodyContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public template(): TemplateContext {
		return this.getTypedRuleContext(TemplateContext, 0) as TemplateContext;
	}
	public charData(): CharDataContext {
		return this.getTypedRuleContext(CharDataContext, 0) as CharDataContext;
	}
	public templateBody(): TemplateBodyContext {
		return this.getTypedRuleContext(TemplateBodyContext, 0) as TemplateBodyContext;
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_templateBody;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterTemplateBody) {
	 		listener.enterTemplateBody(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitTemplateBody) {
	 		listener.exitTemplateBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitTemplateBody) {
			return visitor.visitTemplateBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharDataContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LessThan_list(): TerminalNode[] {
	    	return this.getTokens(Haibt.LessThan);
	}
	public LessThan(i: number): TerminalNode {
		return this.getToken(Haibt.LessThan, i);
	}
	public CloseTag_list(): TerminalNode[] {
	    	return this.getTokens(Haibt.CloseTag);
	}
	public CloseTag(i: number): TerminalNode {
		return this.getToken(Haibt.CloseTag, i);
	}
	public OBrace_list(): TerminalNode[] {
	    	return this.getTokens(Haibt.OBrace);
	}
	public OBrace(i: number): TerminalNode {
		return this.getToken(Haibt.OBrace, i);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_charData;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterCharData) {
	 		listener.enterCharData(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitCharData) {
	 		listener.exitCharData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitCharData) {
			return visitor.visitCharData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Function(): TerminalNode {
		return this.getToken(Haibt.Function, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public OParen(): TerminalNode {
		return this.getToken(Haibt.OParen, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public CParen(): TerminalNode {
		return this.getToken(Haibt.CParen, 0);
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_functionDeclaration;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnTypeContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Colon(): TerminalNode {
		return this.getToken(Haibt.Colon, 0);
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_returnType;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterReturnType) {
	 		listener.enterReturnType(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitReturnType) {
	 		listener.exitReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitReturnType) {
			return visitor.visitReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
	public parameterListFollow(): ParameterListFollowContext {
		return this.getTypedRuleContext(ParameterListFollowContext, 0) as ParameterListFollowContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_parameterList;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(Haibt.Colon, 0);
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_parameter;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListFollowContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Comma(): TerminalNode {
		return this.getToken(Haibt.Comma, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_parameterListFollow;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterParameterListFollow) {
	 		listener.enterParameterListFollow(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitParameterListFollow) {
	 		listener.exitParameterListFollow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitParameterListFollow) {
			return visitor.visitParameterListFollow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_functionBody;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterFunctionBody) {
	 		listener.enterFunctionBody(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitFunctionBody) {
	 		listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_statementList;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStatementList) {
	 		listener.enterStatementList(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStatementList) {
	 		listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public assigmentStatement(): AssigmentStatementContext {
		return this.getTypedRuleContext(AssigmentStatementContext, 0) as AssigmentStatementContext;
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_statement;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Return(): TerminalNode {
		return this.getToken(Haibt.Return, 0);
	}
	public result(): ResultContext {
		return this.getTypedRuleContext(ResultContext, 0) as ResultContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_returnStatement;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_result;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterResult) {
	 		listener.enterResult(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitResult) {
	 		listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssigmentStatementContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Haibt.Identifier, 0);
	}
	public Assign(): TerminalNode {
		return this.getToken(Haibt.Assign, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_assigmentStatement;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterAssigmentStatement) {
	 		listener.enterAssigmentStatement(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitAssigmentStatement) {
	 		listener.exitAssigmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitAssigmentStatement) {
			return visitor.visitAssigmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(Haibt.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_expressionStatement;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(Haibt.If, 0);
	}
	public OParen(): TerminalNode {
		return this.getToken(Haibt.OParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CParen(): TerminalNode {
		return this.getToken(Haibt.CParen, 0);
	}
	public ifBody(): IfBodyContext {
		return this.getTypedRuleContext(IfBodyContext, 0) as IfBodyContext;
	}
	public elseStatement(): ElseStatementContext {
		return this.getTypedRuleContext(ElseStatementContext, 0) as ElseStatementContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_ifStatement;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfBodyContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBrace(): TerminalNode {
		return this.getToken(Haibt.OBrace, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
	public CBrace(): TerminalNode {
		return this.getToken(Haibt.CBrace, 0);
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_ifBody;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterIfBody) {
	 		listener.enterIfBody(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitIfBody) {
	 		listener.exitIfBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitIfBody) {
			return visitor.visitIfBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatementContext extends ParserRuleContext {
	constructor(parser?: Haibt, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Else(): TerminalNode {
		return this.getToken(Haibt.Else, 0);
	}
	public ifBody(): IfBodyContext {
		return this.getTypedRuleContext(IfBodyContext, 0) as IfBodyContext;
	}
    public get ruleIndex(): number {
    	return Haibt.RULE_elseStatement;
	}
	public enterRule(listener: HaibtListener): void {
	    if(listener.enterElseStatement) {
	 		listener.enterElseStatement(this);
		}
	}
	public exitRule(listener: HaibtListener): void {
	    if(listener.exitElseStatement) {
	 		listener.exitElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HaibtVisitor<Result>): Result {
		if (visitor.visitElseStatement) {
			return visitor.visitElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
