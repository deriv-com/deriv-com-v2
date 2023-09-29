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
    cardsContent: [
      {
        id: 0,
        header: '2.5M+',
        description: 'traders',
      },
      {
        id: 1,
        header: '20+ years',
        description: 'of experience',
      },
      {
        id: 2,
        header: '20B+',
        description: 'daily trades',
      },
      {
        id: 3,
        header: '50+',
        description: 'trading assets',
      },
      {
        id: 4,
        header: '0',
        description: 'commission',
      },
    ],
  },
};
