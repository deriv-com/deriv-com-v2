import type { Meta, StoryObj } from '@storybook/react';
import NumbersWithTitle from '.';

const meta = {
  title: 'Blocks/Stat/NumbersWithTitle',
  component: NumbersWithTitle,
} satisfies Meta<typeof NumbersWithTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title goes here',
    description:
      'Description goes here description goes here description goes here description goes here',
    cards: [
      {
        color: 'dark',
        header: '$48M+',
        description: 'Monthly withdrawals',
      },
      {
        color: 'white',
        header: '$650B+',
        description: 'Monthly volume',
      },
      {
        color: 'dark',
        header: '168M+',
        description: 'Monthly deals',
      },
      {
        color: 'coral',
        header: '300K+',
        description: 'Monthly active traders',
      },
    ],
  },
};
