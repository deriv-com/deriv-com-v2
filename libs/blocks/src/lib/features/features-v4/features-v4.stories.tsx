import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@deriv/quill-design';
import FeaturesV4 from '.';

const meta = {
  title: 'Blocks/Features/FeaturesV4',
  component: FeaturesV4,
} satisfies Meta<typeof FeaturesV4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title here',
    description:
      'Description goes here description goes here description goes here description goes here',
    children: <Text>Any Content here</Text>,
    content: (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/240x304"
        alt="Placeholder"
      />
    ),
  },
};
