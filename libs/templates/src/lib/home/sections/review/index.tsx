import { SocialProof } from '@deriv-com/blocks';
import { OptimizedImage } from '@deriv-com/components';
import { FluidContainer, Section, qtMerge } from '@deriv/quill-design';

const ReviewSection = () => {
  return (
    <Section
      className={qtMerge('py-general-4xl', 'bg-background-primary-container')}
    >
      <FluidContainer className="flex flex-col items-center rounded-xl max-sm:w-[90%] sm:py-general-lg">
        <SocialProof.Vertical
          content={({ numberOfReviews, trustScore }) => [
            `TrustScore ${trustScore}`,
            `${numberOfReviews} reviews`,
          ]}
          logo={
            <OptimizedImage
              imageName="home/trustpilot/trustpilot-logo.png"
              alt="trustpilot"
              width={282}
              height={67}
            />
          }
          //TODO: We will remove this static data once the data fetching is finalized.
          staticData={{
            trustScore: 4.6,
            numberOfReviews: '37,133',
            stars: 4.6,
          }}
        />
      </FluidContainer>
    </Section>
  );
};

export default ReviewSection;
