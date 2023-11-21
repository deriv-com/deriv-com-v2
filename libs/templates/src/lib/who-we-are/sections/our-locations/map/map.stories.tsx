import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LocationMap } from '.';

const meta = {
  title: 'Blocks/LocationMap',
  component: LocationMap,
} satisfies Meta<typeof LocationMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Deriv Location Map',
    children: <LocationMap />,
  },
};
