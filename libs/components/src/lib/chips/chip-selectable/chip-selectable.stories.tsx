import type { Meta, StoryObj } from '@storybook/react';
import SelectableChip from './index';
import { FlagAndorraIcon } from '@deriv/quill-icons';

const meta = {
  title: 'Components/Chips/SelectedChip',
  component: SelectableChip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectableChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedChips: Story = {
  args: {
    size: 'md',
    icon: <FlagAndorraIcon fill="black" iconSize="md" />,
    label: 'Label',
    disabled: false,
  },
};
