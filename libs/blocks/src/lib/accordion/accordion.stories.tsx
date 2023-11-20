import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AccordionBlock from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';

const meta = {
  title: 'Blocks/Accordion',
  component: AccordionBlock,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['Flush', 'Fill', 'Outline', 'Elevate'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof AccordionBlock>;

export default meta;
type Story = StoryObj<typeof AccordionBlock>;

export const Flush: Story = {
  args: {
    className: '',
    title: 'Title goes here',
    variant: 'Flush',
    content: {
      data: [
        {
          icon: <StandaloneAndroidIcon />,
          title: 'Title 1',
          subtitle: 'Subtitle 1',
          className: 'border-opacity-black-100 border-x-none',
          content: () => (
            <img
              className="flex w-full flex-1"
              src="https://placehold.co/640x320"
              alt="Placeholder"
            />
          ),
        },
        {
          icon: <StandaloneAndroidIcon />,
          title: 'Title 2',
          subtitle: 'Subtitle 2',
          className: 'border-opacity-black-100 border-x-none',
          content: () => (
            <img
              className="flex w-full flex-1"
              src="https://placehold.co/640x320"
              alt="Placeholder"
            />
          ),
        },
        {
          icon: <StandaloneAndroidIcon />,
          title: 'Title 3',
          subtitle: 'Subtitle 3',
          className: 'border-opacity-black-100 border-x-none',
          content: () => (
            <img
              className="flex w-full flex-1"
              src="https://placehold.co/640x320"
              alt="Placeholder"
            />
          ),
        },
      ],
    },
  },
};

export const Fill: Story = {
  args: {
    ...Flush.args,
    variant: 'Fill',
  },
};

export const Outline: Story = {
  args: {
    ...Flush.args,
    variant: 'Outline',
  },
};

export const Elevate: Story = {
  args: {
    ...Flush.args,
    variant: 'Elevate',
  },
};
