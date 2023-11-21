import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AccountComparison from '.';

const meta: Meta = {
  title: 'Blocks/AccountComparison',
  component: AccountComparison,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'function' },
    },
  },
} satisfies Meta<typeof AccountComparison>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    title: 'Title here',
    description:
      'Description goes here description goes here description goes here description goes here',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/712x200"
        alt="Placeholder"
      />
    ),
  },
};
