import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '.';

const meta: Meta<typeof Hero.ContentBottom> = {
  component: Hero.ContentBottom,
  title: 'Blocks/Hero/Content-Top-Bottom',
};
export default meta;
// type Story = StoryObj<typeof Hero>;

export const ContentTop = {
  args: {
    title: "Title Goes Here",
    className: "flex-col-reverse",
    contentClassName: "bg-cyan-100"
  },
};

export const ContentBottom = {
  args: {
    title: "Title Goes Here",
    contentClassName: "bg-cyan-100",
  },
};
