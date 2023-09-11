import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '.';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Blocks',
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Hero!/gi)).toBeTruthy();
  },
};
