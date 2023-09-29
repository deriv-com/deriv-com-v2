import type { Meta, StoryObj } from '@storybook/react';
import NumbersWithTitle from '.';

const meta = {
  title: 'Blocks/StatsBlock/NumbersWithTitle',
  component: NumbersWithTitle,
} satisfies Meta<typeof NumbersWithTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title goes here',
    description:
      'Description goes here description goes here description goes here description goes here',
    cardsContent: [
      {
        id: 0,
        color: 'dark',
        header: '$48M+',
        description: 'Monthly withdrawals',
      },
      {
        id: 1,
        color: 'white',
        header: '$650B+',
        description: 'Monthly volume',
      },
      {
        id: 2,
        color: 'dark',
        header: '168M+',
        description: 'Monthly deals',
      },
      {
        id: 3,
        color: 'coral',
        header: '300K+',
        description: 'Monthly active traders',
      },
    ],
  },
};