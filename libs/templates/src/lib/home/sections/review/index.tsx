import { SocialProof } from '@deriv-com/blocks';
import { FluidContainer, Section, qtMerge } from '@deriv/quill-design';

const ReviewSection = () => {
  return (
    <Section
      className={qtMerge('py-general-4xl', 'bg-background-primary-container')}
    >
      <FluidContainer className="flex flex-col items-center rounded-xl max-sm:w-[90%] sm:py-general-lg">
        <SocialProof.Vertical />
        <SocialProof.Horizontal
          theme={{
            color: '!text-[#ffffff]',
            background: 'bg-solid-slate-700',
            logo: 'dark',
          }}
        />
      </FluidContainer>
    </Section>
  );
};

export default ReviewSection;
