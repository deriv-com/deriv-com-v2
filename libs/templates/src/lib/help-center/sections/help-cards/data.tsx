import { CardContent } from '@deriv-com/components';
import {
  IllustrativeChatIcon,
  IllustrativeCommunityIcon,
  StandaloneFileCircleInfoRegularIcon,
  StandaloneWhatsappIcon,
} from '@deriv/quill-icons';

export const helpCardsData = [
  {
    header: 'Live Chat',
    description:
      'Chat with a Deriv representative for quick and convenient help.',
    size: 'sm',
    color: 'light',
    align: 'start',
    icon: <IllustrativeChatIcon fill="black" iconSize="md" />,
    link: {
      href: '#',
      content: 'Chat now',
    },
  },
  {
    header: 'Whatsapp',
    description:
      'Chat with a Deriv representative for personalized assistance.',
    size: 'sm',
    color: 'light',
    align: 'start',
    icon: <StandaloneWhatsappIcon fill="black" iconSize="md" />,
    link: {
      href: '#',
      content: 'Message now',
    },
  },
  {
    header: 'Ask community',
    description:
      'Chat with a Deriv representative for personalized assistance.',
    size: 'sm',
    color: 'light',
    align: 'start',
    icon: <IllustrativeCommunityIcon fill="black" iconSize="md" />,
    link: {
      href: '#',
      content: 'Explore now',
    },
  },
  {
    header: 'Complaints',
    description: "File a complaint with Deriv's customer support team.",
    size: 'sm',
    color: 'light',
    align: 'start',
    icon: <StandaloneFileCircleInfoRegularIcon fill="black" iconSize="md" />,
    link: {
      href: '#',
      content: 'Read now',
    },
  },
] as CardContent[];
