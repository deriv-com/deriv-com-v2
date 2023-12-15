import { partnersItems } from './data';
import { NavigationBlock } from '@deriv-com/blocks';
import { SubBrandDerivPartnersBrandLightIcon } from '@deriv/quill-icons/Logo';
import TopNavigation from './top-navigation';

export const PartnersNavigation = () => {
  return (
    <NavigationBlock
      topNavigation={TopNavigation}
      items={partnersItems}
      renderLogo={() => (
        <SubBrandDerivPartnersBrandLightIcon width={144} height={24} />
      )}
    />
  );
};

export default PartnersNavigation;
