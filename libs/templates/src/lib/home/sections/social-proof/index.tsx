import { SocialProof } from '@deriv-com/blocks';
import { Section } from '@deriv/quill-design';

const SocialProofRow = () => (
  <Section className="w-full">
    <SocialProof.Horizontal
      content={({ numberOfReviews, trustScore }) => [
        'Excellent',
        `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
      ]}
      theme={{
        color: '!text-[#ffffff]',
        background: 'bg-solid-slate-700',
        logo: 'dark',
      }}
    />
  </Section>
);

export default SocialProofRow;
