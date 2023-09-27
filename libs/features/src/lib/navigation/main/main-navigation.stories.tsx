import type { Meta, StoryObj } from '@storybook/react';
import MainNavigation from '.';

const meta = {
  title: 'Features/Navigation/Main',
  component: MainNavigation,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main navigation',
      },
    },
  },
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
