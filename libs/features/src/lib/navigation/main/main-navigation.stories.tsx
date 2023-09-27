import type { Meta, StoryObj } from '@storybook/react';
import MainNavigation from '.';

const meta = {
  title: 'Features/Navigation/Main HK',
  component: MainNavigation,
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
