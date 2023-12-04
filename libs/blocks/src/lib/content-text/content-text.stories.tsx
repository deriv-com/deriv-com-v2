import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@deriv/quill-design';
import ContentText from '.';

const meta = {
  title: 'Blocks/ContentText',
  component: ContentText,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '`() => ReactNode`',
      control: 'function',
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof ContentText>;

const Content = () => {
  return (
    <>
      {Array.from(Array(3).keys()).map((_, index) => (
        <Text key={index}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
          augue at dui ullamcorper, sed suscipit libero dapibus. Aenean interdum
          libero ac justo bibendum, a eleifend nulla hendrerit. Cras vel lacus
          sit amet sem tincidunt fringilla. Suspendisse vel ex ut lectus mattis
          venenatis. Fusce viverra ligula nec ex scelerisque, a efficitur urna
          tincidunt. Vivamus ac justo nec velit finibus fermentum.
        </Text>
      ))}
    </>
  );
};

export default meta;
type Story = StoryObj<typeof ContentText>;

export const Default: Story = {
  args: {
    className:
      'my-1000 bg-background-primary-container max-sm:px-800 max-lg:px-1200',
    title: 'Title here',
    children: <Content />,
  },
};

export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    title: '',
  },
};
