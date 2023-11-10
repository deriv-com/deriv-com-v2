import type { Meta, StoryObj } from '@storybook/react';
import TradeTypeBlock from '.';
import { CardContent } from '@deriv-com/components';
import { IllustrativeAdvertiseIcon } from '@deriv/quill-icons/Illustrative';

const meta = {
  title: 'Blocks/TradeTypes',
  component: TradeTypeBlock,
} satisfies Meta<typeof TradeTypeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const cards: CardContent[] = [
  {
    header: 'Card One Header',
    align: 'start',
    description: 'Card One description',
    color: 'gray',
    size: 'sm',
    icon: <IllustrativeAdvertiseIcon />,
  },
  {
    header: 'Card Two Header',
    align: 'start',
    description: 'Card Two description',
    color: 'gray',
    size: 'sm',
    icon: <IllustrativeAdvertiseIcon />,
  },
  {
    header: 'Card Three Header',
    align: 'start',
    description: 'Card Three description',
    color: 'gray',
    size: 'sm',
    icon: <IllustrativeAdvertiseIcon />,
  },
  {
    header: 'Card Four Header',
    align: 'start',
    description: 'Card Four description',
    color: 'gray',
    size: 'sm',
    icon: <IllustrativeAdvertiseIcon />,
  },
];

export const Default: Story = {
  args: {
    title: 'Trade Type block title',
    description:
      'Description goes here description goes here description goes here description goes here',
    variant: 'ContentBottom',
    cards: cards,
  },
};

export const TwoCards: Story = {
  args: {
    title: 'Trade Type block title',
    description:
      'Description goes here description goes here description goes here description goes here',
    variant: 'ContentBottom',
    cards: cards.slice(0, 2),
  },
};

export const ThreeCards: Story = {
  args: {
    title: 'Trade Type block title',
    description:
      'Description goes here description goes here description goes here description goes here',
    variant: 'ContentBottom',
    cards: cards.slice(0, 3),
    cols: 'three',
  },
};

export const FourCards: Story = {
  args: {
    title: 'Trade Type block title',
    description:
      'Description goes here description goes here description goes here description goes here',
    variant: 'ContentBottom',
    cards: cards,
    cols: 'four',
  },
};
