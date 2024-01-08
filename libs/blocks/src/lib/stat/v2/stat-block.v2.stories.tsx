import type { Meta, StoryObj } from '@storybook/react';
import NumbersOnly from '.';

const meta = {
  title: 'Blocks/Stat/V2',
  component: NumbersOnly,
  tags: ['autodocs'],
  argTypes: { className: { table: { disable: true } } },
} satisfies Meta<typeof NumbersOnly>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: [
      {
        id: 1,
        header: '2.5M+',
        description: 'traders',
      },
      {
        id: 2,
        header: '20+ years',
        description: 'of experience',
      },
      {
        id: 3,
        header: '20B+',
        description: 'daily trades',
      },
      {
        id: 4,
        header: '50+',
        description: 'trading assets',
      },
      {
        id: 5,
        header: '0',
        description: 'commission',
      },
    ],
  },
};
