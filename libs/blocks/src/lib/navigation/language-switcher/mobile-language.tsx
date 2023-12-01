import { useLanguageSwitcher } from '@deriv-com/hooks';
import { Text } from '@deriv/quill-design';
import { FlagUnitedKingdomIcon } from '@deriv/quill-icons/Flags';

export const MobileLanguageToggler = () => {
  const { setShowMobileLanguages, activeLanguage } = useLanguageSwitcher();
  return (
    <div className="border-t-xs border-solid border-opacity-black-100 pt-general-md">
      <div
        className="flex cursor-pointer items-center gap-gap-md py-general-sm"
        onClick={() => {
          setShowMobileLanguages?.(true);
        }}
      >
        <FlagUnitedKingdomIcon width={24} height={16} />
        <Text bold>{activeLanguage?.displayName}</Text>
      </div>
    </div>
  );
};

export default MobileLanguageToggler;
