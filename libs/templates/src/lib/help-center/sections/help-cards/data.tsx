import { CardContent } from '@deriv-com/components';
import {
  StandaloneFileCircleInfoRegularIcon,
  StandaloneWhatsappIcon,
} from '@deriv/quill-icons/Standalone';
import { IllustrativeChatIcon } from '@deriv/quill-icons/Illustrative';

export const helpCardsData: CardContent[] = [
  {
    header: 'Live chat',
    description: 'Get help from our expert support team.',
    size: 'sm',
    color: 'light',
    align: 'start',
    icon: <IllustrativeChatIcon fill="black" iconSize="md" />,
    link: {
      href: '#',
      content: 'Chat with us',
    },
  },
  {
    header: 'Message us',
    description: 'Get personalised assistance via WhatsApp.',
    size: 'sm',
    color: 'light',
    align: 'start',
    icon: <StandaloneWhatsappIcon fill="black" iconSize="md" />,
    link: {
      href: '#',
      content: 'Send us a message',
    },
  },
  {
    header: 'Complaints',
    description: 'Got a complaint? Here’s everything you need to know.',
    size: 'sm',
    color: 'light',
    align: 'start',
    icon: <StandaloneFileCircleInfoRegularIcon fill="black" iconSize="md" />,
    link: {
      href: '#',
      content: 'Learn more',
    },
  },
];
