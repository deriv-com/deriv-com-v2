import { FastPayment } from '@deriv-com/blocks';
import {
  PaymentMethodLitecoinBlackIcon,
  PaymentMethodMastercardBlackIcon,
  PaymentMethodPayLivreBlackIcon,
} from '@deriv/quill-icons';

const FastPaymentSection = () => {
  return (
    <FastPayment.Standard
      title="Hassle-free deposits and withdrawals"
      description="Make instant deposits from 10,000 HKD. Withdraw in minutes."
      link={{
        content: 'Learn More',
        href: '#',
      }}
      content={{
        className: 'h-fit',
        cards: [
          {
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodMastercardBlackIcon
                fill="black"
                width={128}
                height={64}
              />
            ),
            className: 'h-fit',
            nonContentClassName: 'p-general-xl',
          },
          {
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodLitecoinBlackIcon
                fill="black"
                width={128}
                height={64}
              />
            ),
            className: 'h-fit',
            nonContentClassName: 'p-general-xl',
          },
          {
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: (
              <PaymentMethodPayLivreBlackIcon
                fill="black"
                width={128}
                height={64}
              />
            ),
            className: 'h-fit',
            nonContentClassName: 'p-general-xl',
          },
        ],
      }}
    />
  );
};

export default FastPaymentSection;
