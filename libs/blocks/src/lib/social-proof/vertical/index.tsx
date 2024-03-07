import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import { Rating } from '@deriv-com/components';
import { SocialProofVerticalProps } from '../types';
import { getThemeClassNames } from '../classnames';
import { redirectToTrustpilot } from '../helper';

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
      <FluidContainer
        className="flex cursor-pointer flex-col items-center"
        onClick={redirectToTrustpilot}
      >
        {title && (
          <Heading.H2
            className={qtMerge('pb-general-2xl', themeClassNames.color)}
          >
            {title}
          </Heading.H2>
        )}

        {logo}
        {data && (
          <>
            <Rating rate={data.stars} className="py-general-md" />
            <div className="flex">
              {content && (
                <Text size="xl" className={themeClassNames.color}>
                  {content(data)[0]}
                </Text>
              )}
              <div
                className={qtMerge(
                  'mx-general-md h-1300 w-[1px] self-center max-md:h-general-md',
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
      </FluidContainer>
    </Section>
  );
};

export default SocialProofVertical;
