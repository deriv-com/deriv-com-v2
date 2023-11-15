import type { Meta, StoryObj } from '@storybook/react';
import ContentTopCard from '.';
import { Button } from '@deriv/quill-design';
import { IllustrativeProtectedAndSecureIcon } from '@deriv/quill-icons/Illustrative';

const meta = {
  title: 'Components/Card/ContentTop',
  tags: ['auto-docs'],
  parameters: {
    layout: 'centered',
  },
  component: ContentTopCard,
} satisfies Meta<typeof ContentTopCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Content Left Card',
    description: 'This is a description',
    align: 'center',
    color: 'light',
    size: 'sm',
    content: (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/320x320"
        alt="Placeholder"
      />
    ),
    children: <Button>Test button</Button>,
    icon: <IllustrativeProtectedAndSecureIcon />,
    className: 'max-w-[320px]',
    link: {
      content: 'Click here',
      href: 'https://deriv.com',
    },
  },
};
