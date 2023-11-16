import type { Meta, StoryObj } from '@storybook/react';

import Base from '.';

const meta = {
  title: 'Blocks/FastPayment/Default',
  component: Base,
} satisfies Meta<typeof Base>;

export default meta;

type Story = StoryObj<typeof meta>;

const one = {
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
};

const two = {
  cols: 'two',
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
};

const three = {
  cols: 'four',
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
    {
      header: '',
      color: 'gray',
      align: 'center',
      size: 'lg',
      description: 'test',
    },
  ],
};

export const Default: Story = {
  argTypes: {
    content: {
      options: [one, two, three],
      control: { type: 'radio' },
    },
  },
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
