import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchChip from './index';

const meta = {
  title: 'Components/Search-chip',
  component: SearchChip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SearchChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchInput: Story = {
  args: {
    placeholder: 'Search',
    size: 'sm',
  },
};
