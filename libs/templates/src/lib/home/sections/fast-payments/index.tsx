import { FastPayment } from '@deriv-com/blocks';
import {
  PaymentMethodChequeBrandIcon,
  PaymentMethodFpsBrandIcon,
  PaymentMethodWireTransferBrandIcon,
} from '@deriv/quill-icons/Logo';

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
            id: 1,
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodChequeBrandIcon
                fill="black"
                width={128}
                height={80}
              />
            ),
            nonContentClassName: 'p-general-xl',
          },
          {
            id: 2,
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodFpsBrandIcon fill="black" width={128} height={80} />
            ),
            nonContentClassName: 'p-general-xl',
          },
          {
            id: 3,
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodWireTransferBrandIcon
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
