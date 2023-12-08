import { partnersItems } from './data';
import { NavigationBlock } from '@deriv-com/blocks';
import { SubBrandDerivPartnersBrandLightIcon } from '@deriv/quill-icons/Logo';

export const PartnersNavigation = () => {
  return (
    <NavigationBlock
      items={partnersItems}
      renderLogo={() => (
        <SubBrandDerivPartnersBrandLightIcon width={144} height={24} />
      )}
    />
  );
};

export default PartnersNavigation;
