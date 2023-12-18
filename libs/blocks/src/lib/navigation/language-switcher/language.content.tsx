import { useLanguageSwitcher } from '@deriv-com/hooks';
import { Text, qtMerge } from '@deriv/quill-design';

const LanguageContent = () => {
  const { langItems, selectLanguage, activeLanguage } = useLanguageSwitcher();
  return (
    <div className="grid w-full grid-flow-col grid-rows-4 items-start gap-gap-lg gap-y-50 overflow-y-auto overscroll-y-contain py-general-2xl">
      {Object.keys(langItems).map((item) => (
        <div
          className="group flex py-general-sm"
          key={langItems[item].displayName}
        >
          <Text
            bold
            className={qtMerge(
              'cursor-pointer',
              langItems[item].path === activeLanguage?.path &&
                'text-typography-prominent',
              'group-hover:text-typography-prominent',
            )}
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
