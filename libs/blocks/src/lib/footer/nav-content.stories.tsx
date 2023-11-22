import type { Meta, StoryObj } from '@storybook/react';
import Footer, { FooterItems } from '.';
// import { footerData } from 'libs/features/src/lib/footer/main/data';

const footerData: FooterItems[] = [
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
    items: footerData,
    cols: 'four',
  },
};

export const SixColumn: Story = {
  args: {
    items: footerData,
    cols: 'six',
  },
};
