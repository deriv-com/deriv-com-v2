import { FluidContainer, Text, qtMerge } from '@deriv/quill-design';
import { OptimizedImage, Rating } from '@deriv-com/components';
import { useTrustpilotApi } from '@deriv-com/hooks';
import { SocialProofProps, logoUrls, logoVariant } from './types';

const SocialProofHorizontal = ({ theme, className }: SocialProofProps) => {
  const { data } = useTrustpilotApi();

  const bgClassName = theme?.background || 'bg-background-primary-container';
  const colorClassName = theme?.color || '';
  const logo: logoVariant = theme?.logo || 'light';

  return (
    <FluidContainer
      className={qtMerge('py-general-md', bgClassName, className)}
    >
      <div className="flex items-center justify-center gap-gap-xl">
        <Text
          size="md"
          bold
          className={qtMerge(colorClassName, 'max-sm:hidden')}
        >
          Excellent
        </Text>

        {data && (
          <>
            <Rating rate={data?.score?.stars} size="sm" />
            <Text
              size="md"
              className={qtMerge(colorClassName, 'max-sm:hidden')}
            >
              TrustScore {data?.score?.trustScore} out of 5 based on{' '}
              {data?.numberOfReviews?.usedForTrustScoreCalculation.toLocaleString()}{' '}
              reviews
            </Text>
          </>
        )}
        <OptimizedImage
          imageName={logoUrls[logo]}
          alt="trustpilot"
          width={97}
          height={24}
        />
      </div>
    </FluidContainer>
  );
};

export default SocialProofHorizontal;
