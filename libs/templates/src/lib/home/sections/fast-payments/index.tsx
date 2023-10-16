import { FastPayment } from '@deriv-com/blocks';
import {
  FlagAndorraIcon,
  FlagAustraliaIcon,
  FlagBurkinaFasoIcon,
} from '@deriv/quill-icons';

const FastPaymentSection = () => {
  return (
    <FastPayment.Default
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
            icon: <FlagBurkinaFasoIcon fill="black" iconSize="2xl" />,
          },
          {
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: <FlagAndorraIcon fill="black" iconSize="2xl" />,
          },
          {
            header: '',
            color: 'gray',
            align: 'center',
            size: 'lg',
            icon: <FlagAustraliaIcon fill="black" iconSize="2xl" />,
          },
        ],
      }}
    />
  );
};

export default FastPaymentSection;
