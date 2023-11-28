import type { Meta, StoryObj } from '@storybook/react';
import V1StatBlock from '.';

const meta = {
  title: 'Blocks/Stat/V1',
  component: V1StatBlock,
} satisfies Meta<typeof V1StatBlock>;

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
