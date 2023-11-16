import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AccordionBlock from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';

const meta = {
  title: 'Blocks/Accordion',
  component: AccordionBlock,
} satisfies Meta<typeof AccordionBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    variant: {
      options: ['Flush', 'Fill', 'Outline', 'Elevate'],
      control: { type: 'radio' },
    },
    content: {
      options: ['single', 'multiple'],
    },
  },
  args: {
    className: '',
    title: 'Title goes here',
    variant: 'Flush',
    content: {
      // eslint-disable-next-line no-constant-condition
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
