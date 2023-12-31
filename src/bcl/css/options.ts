import { CssIdentifierOption } from './types';

export const unset: CssIdentifierOption = { name: 'unset' };
export const auto: CssIdentifierOption = { name: 'auto' };
export const initial: CssIdentifierOption = { name: 'initial' };
export const none: CssIdentifierOption = { name: 'none' };

export const overflowOptions: CssIdentifierOption[] = [
  { name: 'visible' },
  { name: 'hidden' },
  { name: 'scroll' },
  { name: 'auto' },
  { name: 'clip' },
  unset,
];

export const flexAlignOptions: CssIdentifierOption[] = [
  { name: 'start' },
  { name: 'end' },
  { name: 'center' },
  { name: 'baseline' },
  { name: 'stretch' },
  { name: 'flexStart', alias: 'flex-start' },
  { name: 'flexEnd', alias: 'flex-end' },
  { name: 'spaceBetween', alias: 'space-between' },
  { name: 'spaceAround', alias: 'space-around' },
  { name: 'spaceEvenly', alias: 'space-evenly' },
  unset,
];

export const flexWrapOptions: CssIdentifierOption[] = [
  { name: 'nowrap' },
  { name: 'wrap' },
  { name: 'wrapReverse', alias: 'wrap-reverse' },
  unset,
];

export const flexFlowOptions: CssIdentifierOption[] = [
  { name: 'row' },
  { name: 'rowReverse', alias: 'row-reverse' },
  { name: 'column' },
  { name: 'columnReverse', alias: 'column-reverse' },
  { name: 'nowrap' },
  { name: 'wrap' },
  { name: 'wrapReverse', alias: 'wrap-reverse' },
  unset,
];



export const bgPositionOptions: CssIdentifierOption[] = [
  { name: 'top' },
  { name: 'right' },
  { name: 'center'},
  { name: 'bottom' },
  { name: 'left' },
  unset,
];

export const bgRepeatOptions: CssIdentifierOption[] = [
  { name: 'repeat' },
  { name: 'repeatX', alias: 'repeat-x' },
  { name: 'repeatY', alias: 'repeat-y' },
  { name: 'noRepeat', alias: 'no-repeat' },
  unset,
];

export const bgSizeOptions: CssIdentifierOption[] = [
  { name: 'auto' },
  { name: 'cover' },
  { name: 'contain' },
  unset,
];

export const weightOptions: CssIdentifierOption[] = [
  { name: 'normal' },
  { name: 'bold' },
  { name: 'lighter' },
  { name: 'bolder' },
  unset,
];

export const styleOptions: CssIdentifierOption[] = [
  { name: 'normal' },
  { name: 'italic' },
  { name: 'oblique' },
  unset,
];

export const textAlignOptions: CssIdentifierOption[] = [
  { name: 'left' },
  { name: 'right' },
  { name: 'center' },
  { name: 'justify' },
  unset,
];

export const textDecorationOptions: CssIdentifierOption[] = [
  { name: 'none' },
  { name: 'underline' },
  { name: 'overline' },
  { name: 'lineThrough', alias: 'line-through' },
  unset,
];

export const decorationPatternOptions: CssIdentifierOption[] = [
  { name: 'solid' },
  { name: 'double' },
  { name: 'dotted' },
  { name: 'dashed' },
  { name: 'wavy' },
  { name: 'inset'},
  { name: 'outset' },
  { name: 'groove' },
  { name: 'ridge' },
  unset,
];

export const flexDirectionOptions: CssIdentifierOption[] = [
    { name: 'row' },
    { name: 'rowReverse', alias: 'row-reverse' },
    { name: 'column' },
    { name: 'columnReverse', alias: 'column-reverse' },
    unset,
];

export const fontFamilyOptions: CssIdentifierOption[] = [
    { name: 'serif' },
    { name: 'sansSerif', alias: 'sans-serif' },
    { name: 'monospace' },
    { name: 'cursive' },
    { name: 'fantasy' },
    unset,
];