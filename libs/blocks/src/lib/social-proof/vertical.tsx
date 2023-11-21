import { FluidContainer, Heading, Text, qtMerge } from '@deriv/quill-design';
import { OptimizedImage, Rating } from '@deriv-com/components';
import { useTrustpilotApi } from '@deriv-com/hooks';

import { SocialProofProps, logoUrls, logoVariant } from './types';

export interface SocialProofVerticalProps extends SocialProofProps {
  title?: string;
}

const SocialProofVertical = ({
  title,
  theme,
  className,
}: SocialProofVerticalProps) => {
  const { data } = useTrustpilotApi();

  const bgClassName = theme?.background || 'bg-background-primary-container';
  const colorClassName = theme?.color || '';
  const logo: logoVariant = theme?.logo || 'light';

  return (
    <FluidContainer
      className={qtMerge('py-general-4xl', bgClassName, className)}
    >
      <div className="flex flex-col items-center gap-gap-3xl">
        {title && <Heading.H2 className={colorClassName}>{title}</Heading.H2>}
        <div className="flex flex-col items-center gap-gap-lg">
          <OptimizedImage
            imageName={logoUrls[logo]}
            alt="trustpilot"
            width={282}
            height={67}
          />
          {data && (
            <>
              <Rating rate={data?.score?.stars} />
              <Rating rate={3.5} />
              <Rating rate={2.9} />
              <Rating rate={2.1} />
              <Rating rate={1.8} />
              <Rating rate={1.2} />
              <Rating rate={0.8} />
              <Rating rate={0.2} />
              <div className="flex gap-gap-lg">
                <Text size="xl" className={colorClassName}>
                  TrustScore {data?.score?.trustScore}
                </Text>
                <Text size="xl" className={colorClassName}>
                  |
                </Text>
                <Text size="xl" className={colorClassName}>
                  {data?.numberOfReviews?.usedForTrustScoreCalculation.toLocaleString()}{' '}
                  reviews
                </Text>
              </div>
            </>
          )}
        </div>
      </div>
    </FluidContainer>
  );
};

export default SocialProofVertical;
