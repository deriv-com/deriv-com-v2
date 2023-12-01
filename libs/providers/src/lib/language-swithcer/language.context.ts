import { createContext } from 'react';
import { LangItem, LangItems } from './types';

export interface LanguageContextType {
  langItems: LangItems;
  onLanguageHover?: VoidFunction;
  activeLanguage?: LangItem;
  onBlurHoverLang?: VoidFunction;
  showLangContent: boolean;
  setShowLangContent?: (showLangContent: boolean) => void;
  selectLanguage?: (item: LangItem) => void;
  showMobileLanguages: boolean;
  setShowMobileLanguages?: (showItems: boolean) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  langItems: {},
  showLangContent: false,
  showMobileLanguages: false,
});
