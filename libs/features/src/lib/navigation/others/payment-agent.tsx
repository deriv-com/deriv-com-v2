import { partnersItems } from './data';
import { NavigationBlock } from '@deriv-com/blocks';
import { Button } from '@deriv/quill-design';
import { SubBrandDerivPartnersBrandLightIcon } from '@deriv/quill-icons/Logo';

const PaymentAgentButtons = () => {
  return (
    <div className="flex flex-row items-center gap-gap-md">
      <Button size="lg">Apply now</Button>
    </div>
  );
};

export const PaymentAgentNavigation = () => {
  return (
    <NavigationBlock
      items={partnersItems}
      renderButtons={PaymentAgentButtons}
      renderLogo={() => (
        <SubBrandDerivPartnersBrandLightIcon width={144} height={24} />
      )}
    />
  );
};

export default PaymentAgentNavigation;
