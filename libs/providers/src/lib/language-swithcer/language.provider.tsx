import { useState } from 'react';
import { LangItem, LangItems } from '.';
import { LanguageContext } from './language.context';

export interface LanguageProviderProps {
  children: React.ReactNode;
  langItems: LangItems;
  onLangSelect?: (lang: LangItem) => void;
  activeLanguage: LangItem;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  langItems,
  onLangSelect,
  activeLanguage,
}) => {
  const [showMobileLanguages, setShowMobileLanguages] = useState(false);

  const selectLanguage = (item: LangItem) => {
    onLangSelect?.(item);
  };

  return (
    <LanguageContext.Provider
      value={{
        langItems,
        activeLanguage,
        selectLanguage,
        showMobileLanguages,
        setShowMobileLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
