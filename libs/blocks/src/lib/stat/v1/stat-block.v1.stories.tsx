import type { Meta, StoryObj } from '@storybook/react';
import V1StatBlock from '.';

const meta = {
  title: 'Blocks/Stat/V1',
  component: V1StatBlock,
  tags: ['autodocs'],
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
        id: 1,
        color: 'dark',
        header: '$48M+',
        description: 'Monthly withdrawals',
      },
      {
        id: 2,
        color: 'white',
        header: '$650B+',
        description: 'Monthly volume',
      },
      {
        id: 3,
        color: 'dark',
        header: '168M+',
        description: 'Monthly deals',
      },
      {
        id: 4,
        color: 'coral',
        header: '300K+',
        description: 'Monthly active traders',
      },
    ],
  },
};

export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    title: '',
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: '',
  },
};
