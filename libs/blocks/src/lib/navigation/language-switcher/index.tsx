import { Text } from '@deriv/quill-design';
import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
import { StandaloneGlobeRegularIcon } from '@deriv/quill-icons';

const LanguageSwitcher = () => {
  const { activeLanguage } = useLanguageSwitcher();
  const { onItemHover } = useNavigation();

  return (
    <div
      className="group flex cursor-pointer items-center"
      onMouseEnter={() => {
        onItemHover?.('lang');
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
