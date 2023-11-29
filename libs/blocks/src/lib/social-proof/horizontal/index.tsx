import { Section, Text, qtMerge } from '@deriv/quill-design';
import { OptimizedImage, Rating } from '@deriv-com/components';
import { useTrustpilotApi } from '@deriv-com/hooks';
import { SocialProofProps } from '../types';
import { getThemeClassNames } from '../classnames';

const SocialProofHorizontal = ({
  theme,
  className,
  content,
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
              <Text
                size="md"
                bold
                className={qtMerge(themeClassNames.color, 'max-sm:hidden')}
              >
                {content(data)[0]}
              </Text>
            )}

            {data && (
              <>
                <Rating rate={data?.stars} size="sm" />
                {content && (
                  <Text
                    size="md"
                    className={qtMerge(themeClassNames.color, 'max-sm:hidden')}
                  >
                    {content(data)[1]}
                  </Text>
                )}
              </>
            )}
          </>
        )}
        <OptimizedImage
          imageName={themeClassNames.logo}
          alt="trustpilot"
          width={97}
          height={24}
        />
      </div>
    </Section>
  );
};

export default SocialProofHorizontal;
