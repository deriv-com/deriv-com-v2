import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Hero } from '.';

const meta = {
  component: Hero,
  title: 'Blocks/Hero',
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const ContentLimitless = () => (
  <Hero.ContentLimitless
    title="Title goes here"
    description={`Description goes here description goes here
      description goes here description goes here`}
    content={
      <img
        className="w-full"
        src="https://placehold.co/712x800"
        alt="Placeholder"
      />
    }
    className="mb-10"
  >
    <p> This is an image limitless hero</p>
  </Hero.ContentLimitless>
);

export const ContentLimit = () => (
  <Hero.ContentLimit
    title="Title goes here"
    description={`Description goes here description goes here
      description goes here description goes here`}
    content={
      <div className="flex pt-20 pb-20 lg:pr-24 md:pr-0 sm:pr-0 pr-0">
        <img
          className="w-full rounded-3xl"
          src="https://placehold.co/712x800"
          alt="Placeholder"
        />
      </div>
    }
  >
    <p>this is an image limit hero</p>
  </Hero.ContentLimit>
);

export const ContentBottom = {
  args: {
    title: 'Title Goes Here',
    contentClassName: 'bg-cyan-100',
  },
};
