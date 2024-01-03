import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deriv/quill-design';
import ContentSlider from '.';
import { cards } from './mock-data';

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
      cards: cards,
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
