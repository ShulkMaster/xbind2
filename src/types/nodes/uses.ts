export type UsePath = string[];

export type UseNode = {
  namespace: UsePath;
}

export type NamespaceNode = UsePath | string;
