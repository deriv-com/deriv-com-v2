import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './navigation';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: 'Features/Navigation',
};
export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary = {
  args: {},
};
