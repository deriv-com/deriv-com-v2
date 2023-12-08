import { partnersItems } from './data';
import { NavigationBlock } from '@deriv-com/blocks';
import { Button } from '@deriv/quill-design';
import { SubBrandDerivPrimeBrandLightIcon } from '@deriv/quill-icons/Logo';

const PrimeNavButtons = () => {
  return (
    <div className="flex flex-row items-center gap-gap-md">
      <Button size="lg">Contact us</Button>
    </div>
  );
};

export const PrimeNavigation = () => {
  return (
    <NavigationBlock
      items={partnersItems}
      renderButtons={PrimeNavButtons}
      renderLogo={() => (
        <SubBrandDerivPrimeBrandLightIcon width={117} height={24} />
      )}
    />
  );
};

export default PrimeNavigation;
