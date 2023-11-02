import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from './index';
import {
  StandaloneCircleDotFillIcon,
  StandaloneCircleRegularIcon,
  StandaloneXmarkRegularIcon,
} from '@deriv/quill-icons';
import { Text } from '@deriv/quill-design';

const meta = {
  title: 'Components/Actionsheet/Bottom',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionSheetBottom: Story = {
  args: {
    heading: 'Table view',
    icon: <StandaloneXmarkRegularIcon fill="black" iconSize="md" />,
    children: (
      <div className="mb-gap-lg flex flex-col p-800">
        <div className="flex flex-row items-center gap-gap-md py-gap-md">
          <StandaloneCircleDotFillIcon fill="black" iconSize="md" />

          <Text size="md">Main info</Text>
        </div>
        <div className="flex flex-row items-center gap-gap-md py-gap-md">
          <StandaloneCircleRegularIcon fill="black" iconSize="md" />

          <Text size="md">Trading conditions</Text>
        </div>
        <div className="flex flex-row items-center gap-gap-md py-gap-md">
          <StandaloneCircleRegularIcon fill="black" iconSize="md" />

          <Text size="md">Additional info</Text>
        </div>
      </div>
    ),
  },
};
