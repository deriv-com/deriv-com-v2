import type { Meta, StoryObj } from '@storybook/react';
import NumbersOnly from '.';

const meta = {
  title: 'Blocks/Stat/Numbers Only',
  component: NumbersOnly,
} satisfies Meta<typeof NumbersOnly>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: [
      {
        header: '2.5M+',
        description: 'traders',
      },
      {
        header: '20+ years',
        description: 'of experience',
      },
      {
        header: '20B+',
        description: 'daily trades',
      },
      {
        header: '50+',
        description: 'trading assets',
      },
      {
        header: '0',
        description: 'commission',
      },
    ],
  },
};
