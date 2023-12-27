import { useLanguageSwitcher } from '@deriv-com/hooks';
import { Text } from '@deriv/quill-design';
import { LabelPairedGlobeMdRegularIcon } from '@deriv/quill-icons/LabelPaired';

export const MobileLanguageToggler = () => {
  const { setShowMobileLanguages, activeLanguage } = useLanguageSwitcher();
  return (
    <div className="border-t-xs border-solid border-opacity-black-100 pt-general-md">
      <div
        className="group flex cursor-pointer items-center gap-gap-sm py-general-sm"
        onClick={() => {
          setShowMobileLanguages?.(true);
        }}
      >
        <LabelPairedGlobeMdRegularIcon className="inline" />
        <Text className="group-hover:text-typography-prominent" bold>
          {activeLanguage?.displayName}
        </Text>
      </div>
    </div>
  );
};

export default MobileLanguageToggler;
