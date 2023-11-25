import type { Meta, StoryObj } from '@storybook/react';

import Base from '.';
import { CardVariantProps, CardVariantType } from '@deriv-com/components';

function generateCards(count: number): CardVariantProps<CardVariantType>[] {
  return Array.from({ length: count }, () => ({
    header: '',
    color: 'gray',
    align: 'center',
    size: 'lg',
    description: 'test',
  }));
}

const contents: Record<string, object | null> = {
  two_column: {
    cols: 'two',
    cards: generateCards(2),
  },
  three_column: {
    cols: 'three',
    cards: generateCards(3),
  },
  four_column: {
    cols: 'four',
    cards: generateCards(4),
  },
  five_column: {
    cols: 'five',
    cards: generateCards(5),
  },
};

const links: Record<string, object | null> = {
  with_link: {
    content: 'Learn More',
    href: '#',
  },
  without_link: null,
};

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
      options: Object.keys(links),
      mapping: links,
      control: {
        type: 'select',
      },
    },
    content: {
      description: '`CardsContainerProps`',
      options: Object.keys(contents),
      mapping: contents,
      control: {
        type: 'select',
      },
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
