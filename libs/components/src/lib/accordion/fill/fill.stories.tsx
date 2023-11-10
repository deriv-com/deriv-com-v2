import type { Meta, StoryObj } from '@storybook/react';
import Fill from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';

const meta = {
  title: 'Components/Accordion/Fill',
  tags: ['auto-docs'],
  component: Fill,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Fill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <StandaloneAndroidIcon />,
    title: 'Test title',
    subtitle: 'This is a test subtitle',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/640x320"
        alt="Placeholder"
      />
    ),
  },
};
