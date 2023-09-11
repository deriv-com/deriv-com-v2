import type { Meta, StoryObj } from '@storybook/react';
import { Features } from './features';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Features> = {
  component: Features,
  title: 'Features',
};
export default meta;
type Story = StoryObj<typeof Features>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Features!/gi)).toBeTruthy();
  },
};
