import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@deriv/quill-design';
import ContentLeft from '.';

const meta = {
  title: 'Blocks/Features/Content',
  component: ContentLeft,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '`content-left`, `content-right`',
      options: ['content-left', 'content-right'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ContentLeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className:
      'my-1000 bg-background-primary-container max-sm:px-800 max-lg:px-1200',
    title: 'Title here',
    description:
      'Description goes here description goes here description goes here description goes here',
    children: (
      <div className="flex w-full">
        <Text>Any Content here</Text>
      </div>
    ),
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/712x800"
        alt="Placeholder"
      />
    ),
  },
};

export const ContentRight: Story = {
  args: {
    ...Default.args,
    variant: 'content-right',
  },
};
