import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons/Illustrative';
import { CardContent } from '@deriv-com/components';

export const cardsData: CardContent[] = [
  {
    id: 1,
    header: 'Protected and secure',
    description:
      'Your data is safe, and your funds are in segregated bank accounts per regulatory standards.',
    icon: <IllustrativeProtectedAndSecureIcon />,
    color: 'gray',
    align: 'start',
    size: 'sm',
    link: {
      content: 'Learn more',
      href: '/',
    },
  },
  {
    id: 2,
    header: '24/7 support',
    description:
      'Reach our professional, multilingual team anytime via live chat.',
    icon: <IllustrativeSupport247Icon />,
    color: 'gray',
    align: 'start',
    size: 'sm',
    link: {
      content: 'Learn more',
      href: '/',
    },
  },
  {
    id: 3,
    header: 'Regulated',
    description:
      'We are licensed and overseen by leading global financial authorities.',
    icon: <IllustrativeLicensedAndRegulatedIcon />,
    color: 'gray',
    align: 'start',
    size: 'sm',
    link: {
      content: 'Learn more',
      href: '/',
    },
  },
  {
    id: 4,
    header: 'Reliable',
    icon: <IllustrativeSpreadsIcon />,
    description:
      'With 99.97% uptime, we process 5.6 million trades daily, offering seamless and uninterrupted trading.',
    color: 'gray',
    align: 'start',
    size: 'sm',
    link: {
      content: 'Learn more',
      href: '/',
    },
  },
];
