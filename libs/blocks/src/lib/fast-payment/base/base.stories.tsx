import type { Meta, StoryObj } from '@storybook/react';
import Base from '.';
import { cards } from './data';

const content: Record<string, object | null> = {
  default: {
    cards: cards.slice(0, 3),
  },
  carousel: {
    cols: 'infinite',
    cards: cards,
  },
};

const meta = {
  title: 'Blocks/FastPayment/Default',
  component: Base,
  tags: ['autodocs'],
  argTypes: {
    description: {
      description: '`string`',
    },
    title: {
      description: '`string`',
    },
    link: {
      description: '`{content: "ReactNode", href: "string"}`',
    },
    disclaimer: {
      description: '`string`',
    },
    content: {
      description:
        '`{cols: "two" | "three" | "four" | "five" | "infinite", cards: CardContent[], className: string}`',
      options: Object.keys(content),
      mapping: content,
      control: {
        type: 'select',
      },
    },
  },
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
      cards: cards.slice(0, 3),
    },
  },
};
