import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
import { Text } from '@deriv/quill-design';

export const MobileLanguageContent = () => {
  const { toggleMobileNav } = useNavigation();
  const {
    showMobileLanguages,
    setShowMobileLanguages,
    selectLanguage,
    langItems,
  } = useLanguageSwitcher();

  return (
    <div className="flex w-full flex-col overflow-y-auto overscroll-y-contain">
      {showMobileLanguages &&
        Object.keys(langItems).map((item) => (
          <div className="py-general-sm" key={langItems[item].displayName}>
            <Text
              bold
              className="cursor-pointer hover:text-typography-prominent"
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
