import type { Meta, StoryObj } from '@storybook/react';
import Base from '.';
import { cards, sliderCards } from './data';

const content: Record<string, object | null> = {
  twoCol: {
    cols: 'two',
    cards: cards.slice(0, 2),
  },
  threeCol: {
    cols: 'three',
    cards: cards.slice(0, 3),
  },
  fourCol: {
    cols: 'four',
    cards: cards.slice(0, 4),
  },
  fiveCol: {
    cols: 'five',
    cards: cards.slice(0, 5),
  },
  carousel: {
    cols: 'infinite',
    cards: sliderCards,
  },
};

const links: Record<string, object | null> = {
  withLink: {
    content: 'Learn More',
    href: '#',
  },
  none: null,
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
    className: { table: { disable: true } },
    link: {
      description: '`{content: ReactNode, href: string}`',
      options: Object.keys(links),
      mapping: links,
      control: {
        type: 'select',
      },
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
    title: 'Hassle-free deposits and withdrawals.',
    link: {
      content: 'Learn More',
      href: '#',
    },
    className: 'bg-background-primary-container',
    disclaimer: '*Disclaimer text goes here.',
    content: {
      cards: cards.slice(0, 3),
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: undefined,
  },
};

export const WithoutLink: Story = {
  args: {
    ...Default.args,
    link: undefined,
  },
};

export const WithoutDisclaimer: Story = {
  args: {
    ...Default.args,
    disclaimer: undefined,
  },
};

export const TwoColumn: Story = {
  args: {
    ...Default.args,
    content: {
      cols: 'two',
      cards: cards.slice(0, 2),
    },
  },
};

export const ThreeColumn: Story = {
  args: {
    ...Default.args,
    content: {
      cols: 'three',
      cards: cards.slice(0, 3),
    },
  },
};

export const FourColumn: Story = {
  args: {
    ...Default.args,
    content: {
      cols: 'four',
      cards: cards.slice(0, 4),
    },
  },
};
export const FiveColumn: Story = {
  args: {
    ...Default.args,
    content: {
      cols: 'five',
      cards: cards.slice(0, 5),
    },
  },
};

export const Carousel: Story = {
  args: {
    ...Default.args,
    content: {
      cols: 'infinite',
      cards: sliderCards,
    },
  },
};
