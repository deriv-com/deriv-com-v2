import { CardContent } from '@deriv-com/components';
import {
  IllustrativeAdvertiseIcon,
  IllustrativeBasketIcon,
  IllustrativeChatIcon,
  IllustrativeLowIcon,
} from '@deriv/quill-icons';

export const StrongYearsData: CardContent[] = [
  {
    icon: <IllustrativeAdvertiseIcon iconSize="2xl" />,
    header: 'Dependable',
    description:
      'Cutting-edge technology with 99.97% uptime for uninterrupted trading.',
    color: 'light',
    align: 'center',
    size: 'md',
  },
  {
    icon: <IllustrativeLowIcon iconSize="2xl" />,
    header: 'Safe & secure',
    description:
      'Your personal data is private, and your funds are safely segregated.',
    color: 'light',
    align: 'center',
    size: 'md',
  },
  {
    icon: <IllustrativeBasketIcon iconSize="2xl" />,
    header: 'Regulated',
    description:
      'We’re regulated and licensed by global financial authorities.',
    color: 'light',
    align: 'center',
    size: 'md',
  },
  {
    icon: <IllustrativeChatIcon iconSize="2xl" />,
    header: '24/7 support',
    description: 'Our professional multilingual team is here for you anytime.',
    color: 'light',
    align: 'center',
    size: 'md',
  },
];
