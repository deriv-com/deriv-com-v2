import { FlagUnitedKingdomIcon } from '@deriv/quill-icons';
import { Text } from '@deriv/quill-design';
import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';

const LanguageSwitcher = () => {
  const { onLanguageHover, activeLanguage } = useLanguageSwitcher();
  const { setIsDropContentOpen, setActiveMenu } = useNavigation();

  return (
    <div
      className="group flex cursor-pointer items-center gap-gap-sm"
      onMouseEnter={() => {
        setIsDropContentOpen?.(false);
        setActiveMenu?.('none');
        onLanguageHover?.();
      }}
    >
      <FlagUnitedKingdomIcon className="inline" width={24} height={16} />
      <Text className="inline-block group-hover:text-typography-prominent">
        {activeLanguage?.shortName}
      </Text>
    </div>
  );
};

export default LanguageSwitcher;
