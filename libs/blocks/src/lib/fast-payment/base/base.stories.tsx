import type { Meta, StoryObj } from '@storybook/react';

import Base from '.';

const meta = {
  title: 'Blocks/FastPayment/Default',
  component: Base,
} satisfies Meta<typeof Base>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Make instant deposits from 10,000 HKD. Withdraw in minutes.',
    title: 'Hassle-free deposits and withdrawals',
    link: {
      content: 'Learn More',
      href: '#',
    },
    disclaimer: '*Disclaimer text goes here.',
    content: {
      cols: 'three',
      cards: [
        {
          header: '',
          color: 'gray',
          align: 'center',
          size: 'lg',
          description: 'test',
        },
        {
          header: '',
          color: 'gray',
          align: 'center',
          size: 'lg',
          description: 'test',
        },
        {
          header: '',
          color: 'gray',
          align: 'center',
          size: 'lg',
          description: 'test',
        },
      ],
    },
  },
};
