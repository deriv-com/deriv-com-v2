import type { Meta, StoryObj } from '@storybook/react';
import ContentLimit from '.';
import { Text } from '@deriv/quill-design';

const childrenOptions = [
  <Text key="children" className="text-center">
    This is a content less block
  </Text>,
  null,
];

const meta = {
  title: 'Blocks/Hero/Content-Limit',
  component: ContentLimit,
  tags: ['autodocs'],
  argTypes: {
    className: { table: { disable: true } },
    children: {
      options: childrenOptions,
      mapping: childrenOptions,
      control: {
        type: 'select',
      },
    },
  },
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
    children: <></>,
  },
};
