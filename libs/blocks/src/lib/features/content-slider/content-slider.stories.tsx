import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deriv/quill-design';
import ContentSlider from '.';
import { IllustrativeProtectedAndSecureIcon } from '@deriv/quill-icons/Illustrative';

const meta = {
  title: 'Blocks/Features/ContentSlider',
  component: ContentSlider,
  tags: ['autodocs'],
  argTypes: {
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof ContentSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description:
      'Description goes here description goes here description goes here description goes here',
    cta: (
      <div className="flex w-full justify-center">
        <Button>CTA</Button>
      </div>
    ),
    title: 'Card Slider Title',
    cardSliderProps: {
      slideClasses: 'max-w-xs',
      variant: 'ContentBottom',
      cards: Array.from({ length: 6 }, (_, i) => ({
        id: i,
        header: `Card ${i + 1}`,
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeProtectedAndSecureIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      })),
    },
  },
};

export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    title: '',
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: '',
  },
};

export const WithoutCTA: Story = {
  args: {
    ...Default.args,
    cta: null,
  },
};
