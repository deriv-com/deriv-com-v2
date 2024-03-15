import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@deriv/quill-design';
import ContentLeft from '.';

const meta = {
  title: 'Blocks/Features/ContentLeft',
  component: ContentLeft,
} satisfies Meta<typeof ContentLeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'bg-background-primary-container',
    title: 'Title here',
    description:
      'Description goes here description goes here description goes here description goes here',
    children: (
      <div className="flex w-full">
        <Text>Any Content here</Text>
      </div>
    ),
    contentTop: false,
    contentPadding: true,
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/712x800"
        alt="Placeholder"
      />
    ),
  },
};
