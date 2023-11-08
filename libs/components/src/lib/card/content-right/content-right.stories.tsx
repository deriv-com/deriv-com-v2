import type { Meta, StoryObj } from '@storybook/react';
import ContentRightCard from '.';
import { Button } from '@deriv/quill-design';
import { IllustrativeProtectedAndSecureIcon } from '@deriv/quill-icons';

const meta = {
  title: 'Components/Card/ContentRight',
  tags: ['auto-docs'],
  component: ContentRightCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContentRightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Content Right Card',
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
    className: 'max-h-[320px]',
    link: {
      content: 'Click here',
      href: 'https://deriv.com',
    },
  },
};
