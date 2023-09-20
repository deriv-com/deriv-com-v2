import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentLimit from '.';

const meta = {
  title: 'Blocks/Hero/Content-Limit',
  component: ContentLimit,
  tags: ['autodocs'],
} satisfies Meta<typeof ContentLimit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title Goes Here',
    description:
      'Description goes here description goes here description goes here description goes here',
    content: (
      <img
        className="w-full rounded-3xl"
        src="https://placehold.co/712x800"
        alt="Placeholder"
      />
    ),
    children: <p>this is an image limit hero</p>,
  },
};
