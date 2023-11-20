import type { Meta, StoryObj } from '@storybook/react';
import SearchBlock from '.';

const meta = {
  title: 'Blocks/SearchBlock',
  component: SearchBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBlock>;

export default meta;

type Story = StoryObj<typeof SearchBlock>;

export const Default: Story = {
  args: {
    placeholder: 'Try "Trade"',
    content: (
      <div className="flex flex-col items-start gap-general-md">
        FAQ Question
      </div>
    ),
  },
};
