import type { Meta, StoryObj } from '@storybook/react';
import MainFooter from '.';

const meta = {
  title: 'Features/Footer/HK',
  component: MainFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'HK Footer',
      },
    },
  },
} satisfies Meta<typeof MainFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
