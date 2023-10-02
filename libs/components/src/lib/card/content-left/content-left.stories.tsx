import type { Meta, StoryObj } from '@storybook/react';
import ContentLeftCard from '.';
import { Button } from '@deriv/quill-design';
import { IllustrativeProtectedAndSecureIcon } from '@deriv/quill-icons';

const meta = {
  title: 'Components/Card/ContentLeft',
  tags: ['auto-docs'],
  parameters: {
    layout: 'centered',
  },
  component: ContentLeftCard,
} satisfies Meta<typeof ContentLeftCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Content Left Card',
    description: 'This is a description',
    alignVariant: 'center',
    colorVariant: 'light',
    sizeVariant: 'sm',
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
