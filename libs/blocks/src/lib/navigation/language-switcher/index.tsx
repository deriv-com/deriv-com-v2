import { Text } from '@deriv/quill-design';
import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
import { LabelPairedGlobeMdRegularIcon } from '@deriv/quill-icons/LabelPaired';
import { StandaloneGlobeRegularIcon } from '@deriv/quill-icons';

const LanguageSwitcher = () => {
  const { onLanguageHover, activeLanguage } = useLanguageSwitcher();
  const { setIsDropContentOpen, setActiveMenu } = useNavigation();

  return (
    <div
      className="group flex cursor-pointer items-center"
      onMouseEnter={() => {
        setIsDropContentOpen?.(false);
        setActiveMenu?.('none');
        onLanguageHover?.();
      }}
    >
      <StandaloneGlobeRegularIcon className="inline" />
      <Text
        size="sm"
        className="inline-block group-hover:text-typography-prominent"
      >
        {activeLanguage?.shortName}
      </Text>
    </div>
  );
};

export default LanguageSwitcher;
