import { Heading, Section, Text, qtMerge } from '@deriv/quill-design';
import { Rating } from '@deriv-com/components';
import { SocialProofProps } from '../types';
import { getThemeClassNames } from '../classnames';
import { redirectToTrustpilot } from '../helper';

export interface SocialProofVerticalProps extends SocialProofProps {
  title?: string;
}

const SocialProofVertical = ({
  title,
  theme,
  className,
  content,
  data,
  logo,
}: SocialProofVerticalProps) => {
  const themeClassNames = getThemeClassNames(theme);

  return (
    <Section
      className={qtMerge(
        'py-general-4xl',
        themeClassNames.background,
        className,
      )}
    >
      <div
        className="flex cursor-pointer flex-col items-center gap-gap-3xl"
        onClick={redirectToTrustpilot}
      >
        {title && (
          <Heading.H2 className={themeClassNames.color}>{title}</Heading.H2>
        )}

        <div className="flex flex-col items-center gap-gap-lg">
          {logo}
          {data && (
            <>
              <Rating rate={data.stars} />
              <div className="flex gap-gap-lg">
                {content && (
                  <Text size="xl" className={themeClassNames.color}>
                    {content(data)[0]}
                  </Text>
                )}
                <div
                  className={qtMerge(
                    'h-1300 w-[1px] self-center max-md:h-general-md',
                    themeClassNames.caret,
                  )}
                />
                {content && (
                  <Text size="xl" className={themeClassNames.color}>
                    {content(data)[1]}
                  </Text>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default SocialProofVertical;
