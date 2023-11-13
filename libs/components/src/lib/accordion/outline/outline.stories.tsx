import type { Meta, StoryObj } from '@storybook/react';
import Outline from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';

const meta = {
  title: 'Components/Accordion/Outline',
  tags: ['auto-docs'],
  component: Outline,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Outline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <StandaloneAndroidIcon />,
    title: 'Test title',
    subtitle: 'This is a test subtitle',
    divider: 'both',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/200x500"
        alt="Placeholder"
      />
    ),
  },
};
