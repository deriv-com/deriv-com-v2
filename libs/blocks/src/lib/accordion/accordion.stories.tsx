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
    title: 'Title here',
    tab: 'label',
    variant: 'fill',
    content: {
      className: '', // Optionally, if needed based on the error message
      data: [
        {
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
        {
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
      ],
    },
  },
};
