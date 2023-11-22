import type { Meta, StoryObj } from '@storybook/react';
import Footer, { FooterItems } from '.';

const data: FooterItems[] = [
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
            href: '/',
            text: 'Who we are',
          },
          {
            id: 1,
            href: '/',
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
            href: '/',
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
            href: '/',
            text: 'Regulatory information',
          },
          {
            id: 1,
            href: '/',
            text: 'Terms & conditions',
          },
          {
            id: 2,
            href: '/',
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
            href: '/',
            text: 'Help centre',
          },
          {
            id: 1,
            href: '/',
            text: 'Payment methods',
          },
          {
            id: 2,
            href: '/',
            text: 'Status page',
          },
        ],
      },
    ],
  },
];

const meta = {
  title: 'Blocks/Footer/NavContent',
  component: Footer.MainNavContent,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer.MainNavContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FourColumn: Story = {
  args: {
    items: data,
    cols: 'four',
  },
};

export const SixColumn: Story = {
  args: {
    ...FourColumn.args,
    cols: 'six',
  },
};
