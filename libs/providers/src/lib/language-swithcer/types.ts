export type LangItem = {
  isDefault?: boolean;
  path: string;
  displayName: string;
  shortName: string;
  affiliateLang?: number;
};

export type LangItems = {
  [key: string]: LangItem;
};
