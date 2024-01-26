import type { Meta, StoryObj } from '@storybook/react';
import ContentTop from '.';

const meta = {
  title: 'Blocks/Hero/Content-Top',
  component: ContentTop,
  tags: ['autodocs'],
  argTypes: {
    title: { description: '`string`' },
    children: { description: '`ReactNode`' },
  },
} satisfies Meta<typeof ContentTop>;

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
