import type { Meta, StoryObj } from '@storybook/react';
import Base from '.';
import { cards, sliderCards } from './data';

const content: Record<string, object | null> = {
  two_col: {
    cols: 'two',
    cards: cards.slice(0, 2),
  },
  three_col: {
    cols: 'three',
    cards: cards.slice(0, 3),
  },
  four_col: {
    cols: 'four',
    cards: cards.slice(0, 4),
  },
  five_col: {
    cols: 'five',
    cards: cards.slice(0, 5),
  },
  carousel: {
    cols: 'infinite',
    cards: sliderCards,
  },
};

const links: Record<string, object | null> = {
  with_link: {
    content: 'Learn More',
    href: '#',
  },
  none: null,
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
    isRtl: {
      description: '`boolean`',
      control: {
        type: 'boolean',
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
    isRtl: false,
    link: {
      content: 'Learn More',
      href: '#',
    },
    className: 'bg-background-primary-container',
    disclaimer: '*Disclaimer text goes here.',
    content: {
      // sliderClass: 'animate-[slide_100s_linear_infinite]',
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
