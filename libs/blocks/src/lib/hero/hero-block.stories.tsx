import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '.';

const meta = {
  component: Hero.ContentLimitless,
  title: 'Blocks',
} satisfies Meta<typeof Hero.ContentLimitless>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const ContentLimitless: Story = {
  args: {},
};

export const ContentLimit: Story = {
  args: {},
};
