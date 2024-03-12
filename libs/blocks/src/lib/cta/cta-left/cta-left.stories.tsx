import type { Meta, StoryObj } from '@storybook/react';
import CTALeft from '.';
import { Text } from '@deriv/quill-design';

const meta = {
  title: 'Blocks/CTA/CTABlockLeft',
  component: CTALeft,
  tags: ['autodocs'],
} satisfies Meta<typeof CTALeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CTAContentLeft: Story = {
  args: {
    title: 'Join over 2.5 million online traders worldwide',
    description:
      'Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here',
    children: <Text>This is the children</Text>,
    content: (
      <>
        <img
          className="block h-full w-full object-cover lg:hidden"
          src="https://placehold.co/256x496"
          alt="Placeholder"
        />
        <img
          className="relative hidden h-full w-full rounded-xl lg:block"
          src="https://placehold.co/608x480"
          alt="Placeholder"
        />
      </>
    ),
  },
};
