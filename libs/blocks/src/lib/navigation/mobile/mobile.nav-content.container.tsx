import clsx from 'clsx';
import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
import MobileNavContent from './mobile.nav-content';
import MobileLanguageContent from '../language-switcher/mobile-language.content';

export const MobileNavContentContainer = () => {
  const { hasActiveMenu } = useNavigation();
  const { showMobileLanguages } = useLanguageSwitcher();

  return (
    <div
      className={clsx(
        (hasActiveMenu || showMobileLanguages) && 'translate-x-50',
        'flex',
        'transition-all duration-500 ease-in-out',
        '-translate-x-full',
        'absolute',
        'h-full w-full',
        'bg-background-primary-container',
        'pb-general-lg sm:pb-general-md',
        'px-1600',
        'left-50 top-50',
      )}
    >
      {hasActiveMenu && <MobileNavContent />}
      {showMobileLanguages && <MobileLanguageContent />}
    </div>
  );
};

export default MobileNavContentContainer;
