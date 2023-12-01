import { useLanguageSwitcher } from '@deriv-com/hooks';
import { Text } from '@deriv/quill-design';

const LanguageContent = () => {
  const { langItems, selectLanguage } = useLanguageSwitcher();
  return (
    <div className="grid w-full grid-flow-col grid-rows-4 items-start gap-gap-lg gap-y-50 overflow-y-auto overscroll-y-contain py-general-2xl">
      {Object.keys(langItems).map((item) => (
        <div className="flex py-general-sm" key={langItems[item].displayName}>
          <Text
            bold
            className="cursor-pointer"
            onClick={() => {
              selectLanguage?.(langItems[item]);
            }}
          >
            {langItems[item].displayName}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default LanguageContent;
