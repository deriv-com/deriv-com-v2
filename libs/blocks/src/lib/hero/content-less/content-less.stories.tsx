import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentLess from '.';
import { Text } from '@deriv/quill-design';

const meta = {
  title: 'Blocks/Hero/Content-Less',
  component: ContentLess,
  tags: ['autodocs'],
  argTypes: {
    className: { table: { disable: true } },
    children: { table: { type: { summary: 'ReactNode' } } },
  },
} satisfies Meta<typeof ContentLess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title Goes Here',
    description:
      'Description goes here description goes here description goes here description goes here',
    children: <Text className="text-center">This is a content less block</Text>,
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

export const WithoutChildren: Story = {
  args: {
    ...Default.args,
    children: '',
  },
};
