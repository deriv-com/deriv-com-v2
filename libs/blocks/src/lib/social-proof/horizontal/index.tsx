import { Section, Text, qtMerge } from '@deriv/quill-design';
import { Rating } from '@deriv-com/components';
import { useTrustpilotApi } from '@deriv-com/hooks';
import { SocialProofProps } from '../types';
import { getThemeClassNames } from '../classnames';

const SocialProofHorizontal = ({
  theme,
  className,
  content,
  logo,
  staticData = null,
}: SocialProofProps) => {
  const { data } = useTrustpilotApi(staticData);

  const themeClassNames = getThemeClassNames(theme);

  return (
    <Section
      className={qtMerge(
        'py-general-md',
        themeClassNames.background,
        className,
      )}
    >
      <div className="flex items-center justify-center gap-gap-xl">
        {data && (
          <>
            {content && (
              <>
                <Text
                  className={qtMerge(themeClassNames.color, 'max-lg:hidden')}
                >
                  {content(data)[0]}
                </Text>
                <Text
                  size="md"
                  bold
                  className={qtMerge(
                    themeClassNames.color,
                    'max-md:hidden max-sm:hidden',
                  )}
                >
                  {content(data)[1]}
                </Text>
              </>
            )}

            {data && (
              <>
                <Rating rate={data?.stars} size="sm" />
                {content && (
                  <Text
                    size="md"
                    className={qtMerge(themeClassNames.color, 'max-sm:hidden')}
                  >
                    {content(data)[2]}
                  </Text>
                )}
              </>
            )}
          </>
        )}
        {logo}
      </div>
    </Section>
  );
};

export default SocialProofHorizontal;
