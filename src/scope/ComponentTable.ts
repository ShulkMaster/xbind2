import { ComponentNode } from 'types/nodes';
import { TemplateSymbols } from './TemplateSymbols';

export class ComponentTable {
  public readonly componentNode: ComponentNode;
  public readonly templateSymbols: TemplateSymbols;

  constructor(component: ComponentNode) {
    this.componentNode = component;
    this.templateSymbols = new TemplateSymbols(component.template);
    this.templateSymbols.fill();
  }
}