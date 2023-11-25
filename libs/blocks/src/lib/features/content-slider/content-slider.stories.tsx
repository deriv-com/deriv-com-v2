import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deriv/quill-design';
import ContentSlider from '.';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons/Illustrative';

const cta: Record<string, object | null> = {
  with_cta: () => (
    <div className="flex w-full justify-center">
      <Button>CTA</Button>
    </div>
  ),
  without_cta: null,
};

const meta = {
  title: 'Blocks/Features/ContentSlider',
  component: ContentSlider,
  tags: ['autodocs'],
  argTypes: {
    className: { table: { disable: true } },
    cta: {
      options: Object.keys(cta),
      mapping: cta,
      control: {
        type: 'select',
      },
      table: { type: { summary: '() => ReactNode' } },
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContentSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description:
      'Description goes here description goes here description goes here description goes here',
    cta: () => (
      <div className="flex w-full justify-center">
        <Button>CTA</Button>
      </div>
    ),
    title: 'Card Slider Title',
    cardSliderProps: {
      slideClasses: 'max-w-xs',
      variant: 'ContentBottom',
      cards: [
        {
          header: 'Card 1',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeProtectedAndSecureIcon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          header: 'Card 2',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeSupport247Icon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          header: 'Card 3',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeLicensedAndRegulatedIcon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          header: 'Card 4',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeSpreadsIcon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          header: 'Card 5',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeLicensedAndRegulatedIcon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          header: 'Card 6',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeSupport247Icon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
      ],
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: '',
  },
};

export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    title: '',
  },
};

export const WithoutCTA: Story = {
  args: {
    ...Default.args,
    // eslint-disable-next-line react/jsx-no-useless-fragment
    cta: () => <></>,
  },
};
