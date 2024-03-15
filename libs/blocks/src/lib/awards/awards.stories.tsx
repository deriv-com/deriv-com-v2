import type { Meta, StoryObj } from '@storybook/react';
import AwardsBlock from '.';
import { Button, Text } from '@deriv/quill-design';

const meta = {
  title: 'Blocks/Awards',
  component: AwardsBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof AwardsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title goes here',
    description:
      'Description goes here description goes here description goes here description goes here',
    awardsSet: (
      <div className="flex gap-gap-md lg:gap-gap-xl">
        <img
          src="https://placehold.co/198x102"
          alt="Placeholder"
          className="h-[102px] w-[198px]"
        />
        <img
          src="https://placehold.co/198x102"
          alt="Placeholder"
          className="h-[102px] w-[198px]"
        />
        <img
          src="https://placehold.co/198x102"
          alt="Placeholder"
          className="h-[102px] w-[198px]"
        />
      </div>
    ),
  },
};
