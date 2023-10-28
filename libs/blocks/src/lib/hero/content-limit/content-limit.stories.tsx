import type { Meta, StoryObj } from '@storybook/react';
import ContentLimit from '.';
import { Text } from '@deriv/quill-design';

const meta = {
  title: 'Blocks/Hero/Content-Limit',
  component: ContentLimit,
} satisfies Meta<typeof ContentLimit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title Goes Here',
    description:
      'Description goes here description goes here description goes here description goes here',
    content: () => (
      <img
        className="w-full rounded-xl"
        src="https://placehold.co/712x800"
        alt="Placeholder"
      />
    ),
    children: <Text className="text-center">This is a content less block</Text>,
  },
};
