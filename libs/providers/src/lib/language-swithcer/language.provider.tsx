import { useCallback, useState } from 'react';
import { LangItem, LangItems } from '.';
import { LanguageContext } from './language.context';

export interface LanguageProviderProps {
  children: React.ReactNode;
  langItems: LangItems;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  langItems,
}) => {
  const [activeLanguage, setActiveLanguage] = useState(langItems.en);
  const [showLangContent, setShowLangContent] = useState(false);
  const [showMobileLanguages, setShowMobileLanguages] = useState(false);

  const onLanguageHover = () => {
    setShowLangContent(true);
  };

  const onBlurHoverLang = useCallback(() => {
    setShowLangContent(false);
  }, []);

  const selectLanguage = (item: LangItem) => {
    setActiveLanguage(item);
    setShowLangContent(false);
  };

  return (
    <LanguageContext.Provider
      value={{
        onLanguageHover,
        langItems,
        activeLanguage,
        showLangContent,
        setShowLangContent,
        onBlurHoverLang,
        selectLanguage,
        showMobileLanguages,
        setShowMobileLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
