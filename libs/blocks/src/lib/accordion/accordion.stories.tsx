import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AccordionBlock from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';

const tabs: Record<string, object | null> = {
  left: {
    data: [
      { id: 0, title: 'Label 1' },
      { id: 1, title: 'Label 2' },
      { id: 2, title: 'Label 3' },
      { id: 3, title: 'Label 4' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
    ],
  },
  center: {
    align: 'center',
    data: [
      { id: 0, title: 'Label 1' },
      { id: 1, title: 'Label 2' },
      { id: 2, title: 'Label 3' },
      { id: 3, title: 'Label 4' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
    ],
  },
  right: {
    align: 'end',
    data: [
      { id: 0, title: 'Label 1' },
      { id: 1, title: 'Label 2' },
      { id: 2, title: 'Label 3' },
      { id: 3, title: 'Label 4' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
      { id: 4, title: 'Label 5' },
    ],
  },
  none: null,
};

const meta = {
  title: 'Blocks/Accordion',
  component: AccordionBlock,
  tags: ['autodocs'],
  argTypes: {
    tab: {
      description: '`id` here is refer to `content.data.index`',
      options: Object.keys(tabs),
      mapping: tabs,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['Flush', 'Fill', 'Outline', 'Elevate'],
      control: { type: 'radio' },
      table: { type: { summary: '"Flush", "Fill", "Outline", "Elevate"' } },
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof AccordionBlock>;

export default meta;
type Story = StoryObj<typeof AccordionBlock>;

export const Flush: Story = {
  args: {
    className: '',
    tab: {
      data: [
        { id: 0, title: 'Label 1' },
        { id: 1, title: 'Label 2' },
        { id: 2, title: 'Label 3' },
        { id: 3, title: 'Label 4' },
        { id: 4, title: 'Label 5' },
      ],
    },
    title: 'Title goes here',
    variant: 'Flush',
    content: {
      data: [
        [
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 1 - Label 1',
            subtitle: 'Subtitle 1',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 2 - Label 1',
            subtitle: 'Subtitle 2',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
        ],
        [
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 1 - Label 2',
            subtitle: 'Subtitle 1',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 2 - Label 2',
            subtitle: 'Subtitle 2',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 3 - Label 2',
            subtitle: 'Subtitle 3',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
        ],
        [
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 1 - Label 3',
            subtitle: 'Subtitle 1',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
        ],
        [
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 1 - Label 4',
            subtitle: 'Subtitle 1',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 2 - Label 4',
            subtitle: 'Subtitle 2',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
        ],
        [
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 1 - Label 5',
            subtitle: 'Subtitle 1',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
          {
            icon: <StandaloneAndroidIcon />,
            title: 'Title 2 - Label 5',
            subtitle: 'Subtitle 2',
            className: 'border-opacity-black-100 border-x-none',
            content: () => (
              <img
                className="flex w-full flex-1"
                src="https://placehold.co/640x320"
                alt="Placeholder"
              />
            ),
          },
        ],
      ],
    },
  },
};

export const Fill: Story = {
  args: {
    ...Flush.args,
    variant: 'Fill',
  },
};

export const Outline: Story = {
  args: {
    ...Flush.args,
    variant: 'Outline',
  },
};

export const Elevate: Story = {
  args: {
    ...Flush.args,
    variant: 'Elevate',
  },
};

export const WithoutTab: Story = {
  args: {
    ...Flush.args,
    tab: undefined,
  },
};
