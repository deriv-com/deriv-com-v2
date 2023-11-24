import type { Meta, StoryObj } from '@storybook/react';

import Base from '.';

const meta = {
  title: 'Blocks/FastPayment',
  component: Base,
  tags: ['autodocs'],
  argTypes: {
    description: {
      description: '`string`',
    },
    title: {
      description: '`string`',
    },
    disclaimer: {
      description: '`string`',
    },
    link: {
      description: '`{content: ReactNode, href: string}`',
    },
    content: {
      description: '`object`',
    },
  },
} satisfies Meta<typeof Base>;

export default meta;

type Story = StoryObj<typeof meta>;

const Data: Story = {
  args: {
    title: 'Hassle-free deposits and withdrawals',
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

export const Default: Story = {
  args: {
    ...Data.args,
    description: 'Make instant deposits from 10,000 HKD. Withdraw in minutes.',
    disclaimer: '*Disclaimer text goes here.',
    link: {
      content: 'Learn More',
      href: '#',
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Data.args,
    disclaimer: '*Disclaimer text goes here.',
    link: {
      content: 'Learn More',
      href: '#',
    },
  },
};

export const WithoutLink: Story = {
  args: {
    ...Data.args,
    disclaimer: '*Disclaimer text goes here.',
    description: 'Make instant deposits from 10,000 HKD. Withdraw in minutes.',
  },
};

export const WithoutDisclaimer: Story = {
  args: {
    ...Data.args,
    description: 'Make instant deposits from 10,000 HKD. Withdraw in minutes.',
    link: {
      content: 'Learn More',
      href: '#',
    },
  },
};
