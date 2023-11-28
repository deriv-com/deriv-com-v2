import type { Meta, StoryObj } from '@storybook/react';
import FooterCTABlock from '.';
import { Heading, Button } from '@deriv/quill-design';

const meta = {
  title: 'Blocks/Footer/FooterCTA',
  component: FooterCTABlock,
  tags: ['autodocs'],
  argTypes: {
    image: {
      table: { type: { summary: '{src: string, alt:string}' } },
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof FooterCTABlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    padding: true,
    image: (
      <>
        <img
          className="hidden w-full flex-1 md:flex"
          src="https://placehold.co/712x800"
          alt="Placeholder"
        />
        <img
          className="flex w-full flex-1 md:hidden"
          src="https://placehold.co/256x496"
          alt="Placeholder"
        />
      </>
    ),
    children: (
      <div className="flex h-full flex-col items-start justify-center gap-gap-3xl">
        <Heading.H2 className="text-opacity-white-800">
          This is the children
        </Heading.H2>
        <Button>CTA Button</Button>
      </div>
    ),
  },
};
