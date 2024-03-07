import type { Meta, StoryObj } from '@storybook/react';
import BlockWrapper from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';

const meta = {
  title: 'Blocks/BlockWrapper',
  component: BlockWrapper,
  tags: ['autodocs'],
} satisfies Meta<typeof BlockWrapper>;

export default meta;
type Story = StoryObj<typeof BlockWrapper>;

export const Default: Story = {
  args: {
    title: 'Title goes here',
    description: 'Description goes here',
  },
};

export const BlockWrapperWithContent: Story = {
  args: {
    title: 'Title goes here',
    description: 'Description goes here',
    children: (
      <div className="m-auto flex w-fit flex-col items-center justify-center gap-gap-lg bg-background-primary-container p-general-4xl text-center">
        Any content goes here
        <StandaloneAndroidIcon />
      </div>
    ),
  },
};
