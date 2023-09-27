import type { Meta, StoryObj } from '@storybook/react';
import MainRowNavigation from './man-navigation.row';

const meta = {
  title: 'Features/Navigation/Main Row',
  component: MainRowNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main navigation',
      },
    },
  },
} satisfies Meta<typeof MainRowNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
