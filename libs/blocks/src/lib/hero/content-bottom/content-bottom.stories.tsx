import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentBottom from '.';

const meta = {
  title: 'Blocks/Hero/Content-Bottom',
  component: ContentBottom,
  tags: ['autodocs'],
  argTypes: {
    className: { table: { disable: true } },
    containerClassName: { table: { disable: true } },
    children: { table: { type: { summary: 'ReactNode' } } },
  },
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
