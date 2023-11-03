import type { Meta, StoryObj } from '@storybook/react';
import { Flush } from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons';

const meta = {
  title: 'Components/Accordion/Flush',
  tags: ['auto-docs'],
  component: Flush,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Flush>;

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
        src="https://placehold.co/800x1320"
        alt="Placeholder"
      />
    ),
  },
};
