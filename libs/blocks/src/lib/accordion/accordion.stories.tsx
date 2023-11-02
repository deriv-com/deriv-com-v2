import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AccordionBlock from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons';

const meta = {
  title: 'Blocks/Accordion',
  component: AccordionBlock,
} satisfies Meta<typeof AccordionBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    title: 'Title goes here',
    variant: 'Fill',
    content: {
      data: [
        {
          icon: <StandaloneAndroidIcon />,
          title: 'This is the title',
          subtitle: 'Subtitle goes here',
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
