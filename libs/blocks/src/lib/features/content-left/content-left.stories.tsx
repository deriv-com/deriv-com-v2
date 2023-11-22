import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@deriv/quill-design';
import Content from '.';

const meta = {
  title: 'Blocks/Features/Content',
  component: Content,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '`content-left`, `content-right`',
      options: ['content-left', 'content-right'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentLeft: Story = {
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
    ...ContentLeft.args,
    variant: 'content-right',
  },
};

export const WithoutDescription: Story = {
  args: {
    ...ContentLeft.args,
    description: '',
    variant: 'content-right',
  },
};
