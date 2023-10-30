import { FastPayment } from '@deriv-com/blocks';
import {
  PaymentMethodChequeBrandLightIcon,
  PaymentMethodFpsBrandLightIcon,
  PaymentMethodWireTransferBrandLightIcon,
} from '@deriv/quill-icons';

const FastPaymentSection = () => {
  return (
    <FastPayment
      title="Hassle-free deposits and withdrawals"
      description="Make instant deposits from 10,000 HKD. Withdraw in minutes."
      link={{
        content: 'Learn More',
        href: '#',
      }}
      content={{
        cards: [
          {
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodChequeBrandLightIcon
                fill="black"
                width={128}
                height={80}
              />
            ),
            nonContentClassName: 'p-general-xl',
          },
          {
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodFpsBrandLightIcon
                fill="black"
                width={128}
                height={80}
              />
            ),
            nonContentClassName: 'p-general-xl',
          },
          {
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodWireTransferBrandLightIcon
                fill="black"
                width={128}
                height={80}
              />
            ),
            nonContentClassName: 'p-general-xl',
          },
        ],
      }}
    />
  );
};

export default FastPaymentSection;
