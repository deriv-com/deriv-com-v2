import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deriv/quill-design';
import Card from '.';
import { cardsData } from './mock-data';

const meta = {
  title: 'Blocks/Features/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    cta: { control: 'function' },
    cards: { table: { type: { summary: 'CardContent[]' } } },
    cols: {
      options: ['two', 'three', 'four'],
      control: { type: 'radio' },
      table: { type: { summary: '"two", "three", "four"' } },
    },
    className: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumn: Story = {
  args: {
    description:
      'Description goes here description goes here description goes here description goes here',
    cta: (
      <div className="flex w-full justify-center">
        <Button>CTA</Button>
      </div>
    ),
    title: '20+ years of proven excellence',
    cols: 'two',
    cards: cardsData,
  },
};

export const ThreeColumn: Story = {
  args: {
    ...TwoColumn.args,
    cols: 'three',
  },
};

export const FourColumn: Story = {
  args: {
    ...TwoColumn.args,
    cols: 'four',
  },
};

export const WithoutDescription: Story = {
  args: {
    ...TwoColumn.args,
    description: '',
  },
};

export const WithoutCTA: Story = {
  args: {
    ...TwoColumn.args,
    cta: '',
  },
};
