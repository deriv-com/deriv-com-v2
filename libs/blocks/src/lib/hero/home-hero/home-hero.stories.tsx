import type { Meta, StoryObj } from '@storybook/react';
import HomeHero from '.';
import { Button } from '@deriv/quill-design';

const meta = {
  title: 'Blocks/Hero/Home-Hero',
  component: HomeHero,
} satisfies Meta<typeof HomeHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: (
      <>
        <span className="text-solid-mustard-800">Gold </span>spreads from
        <br></br>
        30 pips
      </>
    ),
    backgroundImage: <></>,
    description:
      'Trade gold and other precious metals on one of the world’s favourite leveraged trading platforms.',
    ctaButton: <Button size="lg">Open demo account</Button>,
    awards: <>Awards here</>,
    heroImage: (
      <div className="absolute inset-50 z-10 max-lg:right-[-15vh] max-sm:left-[6vw] max-sm:w-[54vh] sm:left-auto sm:z-auto">
        <img
          className="h-full w-[400px]"
          src="https://placehold.co/600x400?text=Hello\nWorld"
          alt="Placeholder"
        />
      </div>
    ),
  },
};
