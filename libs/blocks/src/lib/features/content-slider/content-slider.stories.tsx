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

const meta = {
  title: 'Blocks/Features/ContentSlider',
  component: ContentSlider,
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
          id: 1,
          header: 'Card 1',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeProtectedAndSecureIcon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          id: 2,
          header: 'Card 2',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeSupport247Icon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          id: 3,
          header: 'Card 3',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeLicensedAndRegulatedIcon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          id: 4,
          header: 'Card 4',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeSpreadsIcon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          id: 5,
          header: 'Card 5',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeLicensedAndRegulatedIcon />,
          color: 'gray',
          align: 'start',
          size: 'sm',
        },
        {
          id: 6,
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
