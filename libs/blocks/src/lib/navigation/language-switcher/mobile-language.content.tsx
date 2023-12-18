import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
import { Text, qtMerge } from '@deriv/quill-design';

export const MobileLanguageContent = () => {
  const { toggleMobileNav } = useNavigation();
  const {
    showMobileLanguages,
    setShowMobileLanguages,
    selectLanguage,
    langItems,
    activeLanguage,
  } = useLanguageSwitcher();

  return (
    <div className="flex w-full flex-col overflow-y-auto overscroll-y-contain">
      {showMobileLanguages &&
        Object.keys(langItems).map((item) => (
          <div className="py-general-sm" key={langItems[item].displayName}>
            <Text
              bold
              className={qtMerge(
                'cursor-pointer hover:text-typography-prominent',
                langItems[item].path === activeLanguage?.path &&
                  'text-typography-prominent',
              )}
              onClick={() => {
                selectLanguage?.(langItems[item]);
                setShowMobileLanguages?.(false);
                toggleMobileNav?.();
              }}
            >
              {langItems[item].displayName}
            </Text>
          </div>
        ))}
    </div>
  );
};

export default MobileLanguageContent;
