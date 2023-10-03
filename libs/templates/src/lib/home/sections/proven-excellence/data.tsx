import { CardContent } from '@deriv-com/components';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons';

export const provenExcellenceData: CardContent[] = [
  {
    title: 'Protected and secure',
    description:
      'Your data is safe, and your funds are in segregated bank accounts per regulatory standards.',
    icon: <IllustrativeProtectedAndSecureIcon />,
    colorVariant: 'gray',
    alignVariant: 'start',
    sizeVariant: 'sm',
  },
  {
    title: '24/7 support',
    description:
      'Reach our professional, multilingual team anytime via live chat.',
    icon: <IllustrativeSupport247Icon />,
    colorVariant: 'gray',
    alignVariant: 'start',
    sizeVariant: 'sm',
  },
  {
    title: 'Regulated',
    description:
      'We are licensed and overseen by leading global financial authorities.',
    icon: <IllustrativeLicensedAndRegulatedIcon />,
    colorVariant: 'gray',
    alignVariant: 'start',
    sizeVariant: 'sm',
  },
  {
    title: 'Reliable',
    icon: <IllustrativeSpreadsIcon />,
    description:
      'With 99.97% uptime, we process 5.6 million trades daily, offering seamless and uninterrupted trading.',
    colorVariant: 'gray',
    alignVariant: 'start',
    sizeVariant: 'sm',
  },
];
