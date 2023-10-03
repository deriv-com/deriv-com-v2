import type { Meta, StoryObj } from '@storybook/react';
import HomeTemplate from '.';

const meta = {
  title: 'Templates/Home',
  component: HomeTemplate,
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
