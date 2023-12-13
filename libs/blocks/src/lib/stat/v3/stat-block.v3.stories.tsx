import type { Meta, StoryObj } from '@storybook/react';
import V3StatBlock from '.';

const meta = {
  title: 'Blocks/Stat/V3',
  component: V3StatBlock,
} satisfies Meta<typeof V3StatBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        title: '$48M+',
        description: 'Monthly withdrawals',
      },
      {
        id: 2,
        title: '$650B+',
        description: 'Monthly volume',
      },
      {
        id: 3,
        title: '168M+',
        description: 'Monthly deals',
      },
      {
        id: 4,
        title: '300K+',
        description: 'Monthly active traders',
      },
    ],
  },
};
