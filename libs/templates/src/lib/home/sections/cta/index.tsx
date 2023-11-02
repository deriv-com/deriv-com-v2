import { FluidContainer, qtMerge } from '@deriv/quill-design';
import { CTABlockContent } from './data';

const CTABlock = () => {
  return (
    <FluidContainer className={qtMerge('flex-none', 'my-2400 lg:my-3600')}>
      <CTABlockContent />
    </FluidContainer>
  );
};

export default CTABlock;
