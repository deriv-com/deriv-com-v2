import { LanguageContext } from '@deriv-com/providers';
import { useContext } from 'react';

export const useLanguageSwitcher = () => {
  return useContext(LanguageContext);
};

export default useLanguageSwitcher;
