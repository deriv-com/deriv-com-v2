import type { Meta, StoryObj } from '@storybook/react';
import CTABlock from '.';
import { Button, Text } from '@deriv/quill-design';

const meta = {
  title: 'Blocks/CTABlock',
  component: CTABlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CTABlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title goes here',
    description:
      'Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here',
    children: <Text>This is the children</Text>,
    content: (
      <img
        className="flex  rounded-xl"
        src="https://placehold.co/608x480"
        alt="Placeholder"
      />
    ),
  },
};
export const CTAContentLeft: Story = {
  args: {
    title: 'Title goes here',

    description:
      'Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here',
    children: <Text>This is the children</Text>,
    content: (
      <>
        <img
          className="block  w-full flex-1  lg:hidden"
          src="https://placehold.co/256x496"
          alt="Placeholder"
        />
        <img
          className="hidden w-full rounded-xl lg:block"
          src="https://placehold.co/608x480"
          alt="Placeholder"
        />
      </>
    ),
  },
};
export const CTAContentRight: Story = {
  args: {
    variant: 'content-right',
    title: 'Title goes here',
    description:
      'Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here',
    children: <Text>This is the children</Text>,
    content: (
      <>
        <img
          className="block  w-full lg:hidden"
          src="https://placehold.co/420x230"
          alt="Placeholder"
        />
        <img
          className="hidden w-full rounded-xl lg:block"
          src="https://placehold.co/608x480"
          alt="Placeholder"
        />
      </>
    ),
  },
};
