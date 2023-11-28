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
        title: '$48M+',
        description: 'Monthly withdrawals',
      },
      {
        title: '$650B+',
        description: 'Monthly volume',
      },
      {
        title: '168M+',
        description: 'Monthly deals',
      },
      {
        title: '300K+',
        description: 'Monthly active traders',
      },
    ],
  },
};
