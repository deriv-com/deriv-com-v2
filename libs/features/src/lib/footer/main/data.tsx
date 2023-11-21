import { FooterItems } from '@deriv-com/blocks';

export const footerData: FooterItems[] = [
  {
    id: 0,
    layers: [
      {
        id: 0,
        header: 'ABOUT US',
        type: 'link',
        items: [
          {
            id: 0,
            href: '/who-we-are',
            text: 'Who we are',
          },
          {
            id: 1,
            href: '/why-choose-us',
            text: 'Why choose us',
          },
          { id: 2, href: '/contact-us', text: 'Contact us' },
          { id: 3, href: '/principles', text: 'Principles' },
        ],
      },
    ],
  },
  {
    id: 1,
    layers: [
      {
        id: 0,
        type: 'link',
        header: 'TRADE',
        items: [
          {
            id: 0,
            href: '/mt5',
            text: 'Leveraged forex (Deriv MT5)',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    layers: [
      {
        id: 0,
        type: 'link',
        header: 'LEGAL',
        items: [
          {
            id: 0,
            href: '/regulatory',
            text: 'Regulatory information',
          },
          {
            id: 1,
            href: '/terms-and-conditions',
            text: 'Terms & conditions',
          },
          {
            id: 2,
            href: '/secure-and-responsible',
            text: 'Secure & responsible trading',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    layers: [
      {
        id: 0,
        type: 'link',
        header: 'SUPPORT',
        items: [
          {
            id: 0,
            href: '/help-centre',
            text: 'Help centre',
          },
          {
            id: 1,
            href: '/payment-methods',
            text: 'Payment methods',
          },
          {
            id: 2,
            href: '/status',
            text: 'Status page',
          },
        ],
      },
    ],
  },
];
