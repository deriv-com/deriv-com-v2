import { FluidContainer, qtMerge } from '@deriv/quill-design';
import { CTABlockContent } from './data';

const CTASection = () => {
  return (
    <FluidContainer className={qtMerge('my-2400 flex-none lg:my-3600')}>
      <CTABlockContent />
    </FluidContainer>
  );
};

export default CTASection;
