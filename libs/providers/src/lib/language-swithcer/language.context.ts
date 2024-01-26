import { createContext } from 'react';
import { LangItem, LangItems } from './types';

export interface LanguageContextType {
  langItems: LangItems;
  activeLanguage?: LangItem;
  selectLanguage?: (item: LangItem) => void;
  showMobileLanguages: boolean;
  setShowMobileLanguages?: (showItems: boolean) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  langItems: {},
  showMobileLanguages: false,
});
