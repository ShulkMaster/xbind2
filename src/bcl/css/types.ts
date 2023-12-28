export type CssIdentifierOption = { name: string; alias?: string };

export const enum CssRule {
  cssNumber,
  cssIdentifier,
  cssColor
}

export type CssNumber = {
  kind: CssRule.cssNumber;
  unitRequired: boolean;
}

export type CssIdentifier = {
  kind: CssRule.cssIdentifier;
  options: CssIdentifierOption[];
}

export type CssColor = {
  kind: CssRule.cssColor;
}

export type CssRules = CssNumber | CssIdentifier | CssColor;

export type CssArgument = {
  name: string;
  optional: boolean;
  alternatives: CssRules | CssRules[];
}

export type StyleRule = {
  name: string;
  alias?: string;
  arguments: CssArgument[];
  shorthand: {
    [argument: string]: StyleRule;
  };
};
