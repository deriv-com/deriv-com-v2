import type { Meta, StoryObj } from '@storybook/react';
import StatCard from '.';

const meta = {
  title: 'Components/Card/StatCard',
  tags: ['auto-docs'],
  parameters: {
    layout: 'centered',
  },
  component: StatCard,
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Stat Card Title',
    description: 'Stat Card description',
    color: 'white',
  },
};
