import { derivAPIItems } from './data';
import { NavigationBlock } from '@deriv-com/blocks';
import { Button } from '@deriv/quill-design';
import { SubBrandDerivPartnersBrandLightIcon } from '@deriv/quill-icons/Logo';

const DerivAPIButtons = () => {
  return (
    <div className="flex flex-row items-center gap-gap-md">
      <Button variant="secondary" colorStyle="black" size="lg">
        Log in
      </Button>
      <Button size="lg">Sign up</Button>
    </div>
  );
};

export const DerivAPINavigation = () => {
  return (
    <NavigationBlock
      items={derivAPIItems}
      renderButtons={DerivAPIButtons}
      renderLogo={() => (
        <SubBrandDerivPartnersBrandLightIcon width={144} height={24} />
      )}
    />
  );
};

export default DerivAPINavigation;
