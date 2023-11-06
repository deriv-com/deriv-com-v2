import type { Meta, StoryObj } from '@storybook/react';
import ROWFooter from './row.footer';

const meta = {
  title: 'Features/Footer/Row',
  component: ROWFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Footer Row',
      },
    },
  },
} satisfies Meta<typeof ROWFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
