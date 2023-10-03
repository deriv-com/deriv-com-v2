import type { Meta, StoryObj } from '@storybook/react';
import ContentBottomCard from '.';
import { Button } from '@deriv/quill-design';
import { IllustrativeProtectedAndSecureIcon } from '@deriv/quill-icons';

const meta = {
  title: 'Components/Card/ContentBottom',
  tags: ['auto-docs'],
  component: ContentBottomCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContentBottomCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Content Bottom Card',
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
    className: 'max-w-[320px]',
    children: <Button>Test button</Button>,
    icon: <IllustrativeProtectedAndSecureIcon />,
    link: {
      content: 'Click here',
      href: 'https://deriv.com',
    },
  },
};
