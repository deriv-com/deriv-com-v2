import type { Meta, StoryObj } from '@storybook/react';
import { Blocks } from './blocks';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Blocks> = {
  component: Blocks,
  title: 'Blocks',
};
export default meta;
type Story = StoryObj<typeof Blocks>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Blocks!/gi)).toBeTruthy();
  },
};
