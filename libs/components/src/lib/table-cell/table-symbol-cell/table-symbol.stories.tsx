import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableSymbolCell from './index';
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons/Standalone';

const meta = {
  title: 'Components/TableCell/TableSymbolCell',
  component: TableSymbolCell,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TableSymbolCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SymbolCell: Story = {
  args: {
    icon: <StandalonePlaceholderRegularIcon iconSize="sm" />,
    label: 'Label',
    description: 'Description',
  },
};

export const TableHeader: Story = {
  args: {
    header: 'Header',
    color: 'white',
  },
};

export const TableText: Story = {
  args: {
    label: 'Label',
    color: 'white',
  },
};
