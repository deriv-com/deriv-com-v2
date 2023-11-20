import type { Meta } from '@storybook/react';
import {
  StandaloneAppleIcon,
  StandaloneFacebookIcon,
  StandaloneInstagramIcon,
} from '@deriv/quill-icons/Standalone';
import Footer, { FooterItems } from '.';

const meta = {
  title: 'Blocks/Footer/NavContent',
  component: Footer.MainNavContent,
} satisfies Meta<typeof Footer.MainNavContent>;

export default meta;

const items: FooterItems[] = [
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
          { id: 3, href: '/principles', text: 'Our principles' },
          { id: 4, href: '/partnership', text: 'Partnership programmes' },
          { id: 5, href: '/contact-us', text: 'Contact us' },
          { id: 6, href: '/careers', text: 'Careers' },
          { id: 7, href: '/deriv-life', text: 'Deriv Life' },
        ],
      },
      {
        id: 1,
        header: 'LEGAL',
        type: 'link',
        items: [
          { id: 0, href: '/regulatory', text: 'Regulatory information' },
          { id: 1, href: '/terms-and-conditions', text: 'Terms & conditions' },
          { id: 2, href: '/secure', text: 'Secure & responsible trading' },
        ],
      },
    ],
  },
  {
    id: 1,
    layers: [
      {
        id: 0,
        header: 'TRADE TYPES',
        type: 'link',
        items: [
          { id: 0, href: '/cfds', text: 'CFDs' },
          { id: 1, href: '/options', text: 'Options' },
          { id: 2, href: '/multipliers', text: 'Multipliers' },
        ],
      },
    ],
  },
  {
    id: 2,
    layers: [
      {
        id: 0,
        header: 'MARKETS',
        type: 'link',
        items: [
          { id: 0, href: '/forex', text: 'Forex' },
          { id: 1, href: '/derived-indices', text: 'Derived indices' },
          { id: 2, href: '/etfs', text: 'ETFs' },
          { id: 3, href: '/stocks-and-indices', text: 'Stocks & indices' },
          { id: 4, href: '/cryptocurrencies', text: 'Cryptocurrencies' },
          { id: 5, href: '/commodities', text: 'Commodities' },
        ],
      },
    ],
  },
  {
    id: 3,
    layers: [
      {
        id: 0,
        header: 'TRADING PLATFORMS',
        type: 'link',
        items: [
          { id: 0, href: '/deriv-mt5', text: 'Deriv MT5' },
          { id: 1, href: '/deriv-x', text: 'Deriv X' },
          { id: 2, href: '/deriv-go', text: 'Deriv GO' },
          { id: 3, href: '/deriv-trader', text: 'Deriv Trader' },
          { id: 4, href: '/smarttrader', text: 'SmartTrader' },
          { id: 5, href: '/deriv-bot', text: 'Deriv Bot' },
          { id: 6, href: '/binary-bot', text: 'Binary Bot' },
          { id: 7, href: '/deriv-ctrader', text: 'Deriv cTrader' },
        ],
      },
    ],
  },
  {
    id: 4,
    layers: [
      {
        id: 0,
        header: 'PARTNERS',
        type: 'link',
        items: [
          { id: 0, href: '/', text: 'Deriv Prime' },
          { id: 1, href: '/', text: 'Affiliates and IBs' },
          { id: 2, href: '/', text: 'Payment agents' },
          { id: 3, href: '/', text: 'API' },
        ],
      },
      {
        id: 1,
        header: 'SUPPORT',
        type: 'link',
        items: [
          { id: 0, href: '/', text: 'Help centre' },
          { id: 1, href: '/', text: 'Community' },
          { id: 2, href: '/', text: 'Payment methods' },
          { id: 3, href: '/', text: 'Status page' },
          { id: 4, href: '/', text: 'Deriv Blog' },
        ],
      },
    ],
  },
];

const Template = {
  render: ({ ...args }) => {
    return <Footer.MainNavContent items={items} />;
  },
};

export const Default = {
  ...Template,
  args: {
    socialButtons: social,
    descriptionContent: () => <p>Description content here</p>,
    warningText:
      'Risk warning description goes here. A risk warning description is a crucial component of various financial, investment, or business documents, including prospectuses, investment brochures, loan agreements, and other legal or financial disclosures.',
    className: '',
  },
};
