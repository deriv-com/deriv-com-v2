import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentBottom from '.';

const meta = {
  title: 'Blocks/Hero/Content-Bottom',
  component: ContentBottom,
  tags: ['autodocs'],
} satisfies Meta<typeof ContentBottom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title Goes Here',
    children: (
      <img
        className="w-full"
        src="https://placehold.co/712x200"
        alt="Placeholder"
      />
    ),
  },
};
