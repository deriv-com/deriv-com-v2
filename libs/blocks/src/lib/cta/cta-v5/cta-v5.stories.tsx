import type { Meta, StoryObj } from '@storybook/react';
import BlockWrapper, { CTAV5 } from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';
import { Button } from '@deriv/quill-design';

const meta = {
  title: 'Blocks/CTA/CTAV5',
  component: CTAV5,
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

export const CTAV5CenterContent: Story = {
  args: {
    title: 'Title goes here',
    description: 'Description goes here',
    background: 'gray',
    children: <Button size="lg">Open demo account</Button>,
  },
};
