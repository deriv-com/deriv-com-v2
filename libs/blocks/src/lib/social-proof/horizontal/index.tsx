import { Section, Text, qtMerge } from '@deriv/quill-design';
import { Rating } from '@deriv-com/components';
import { SocialProofProps } from '../types';
import { getThemeClassNames } from '../classnames';
import { redirectToTrustpilot } from '../helper';

const SocialProofHorizontal = ({
  theme,
  className,
  content,
  logo,
  data = null,
}: SocialProofProps) => {
  const themeClassNames = getThemeClassNames(theme);

  return (
    <Section
      className={qtMerge(
        'py-general-md',
        themeClassNames.background,
        className,
      )}
    >
      <div
        className="flex cursor-pointer items-center justify-center gap-gap-xl"
        onClick={redirectToTrustpilot}
      >
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
                  className={qtMerge(themeClassNames.color, 'max-sm:hidden')}
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
