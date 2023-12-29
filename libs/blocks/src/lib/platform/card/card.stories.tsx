import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';
import { data } from './mock-data';

const { title, description, cards } = data;

const meta = {
  title: 'Blocks/Platform/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: description,
    header: title,
    cols: 'three',
    cards: cards,
  },
};

export const WithoutHeader: Story = {
  args: {
    ...Default.args,
    header: '',
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: '',
  },
};
