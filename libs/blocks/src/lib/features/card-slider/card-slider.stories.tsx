import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deriv/quill-design';
import CardSlider from '.';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons';

import { Card } from '@deriv-com/components';

const meta = {
  title: 'Blocks/Features/CardSlider',
  component: CardSlider,
} satisfies Meta<typeof CardSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description:
      'Description goes here description goes here description goes here description goes here',
    cta: (
      <div className="flex w-full justify-center">
        <Button>CTA</Button>
      </div>
    ),
    title: 'Card Slider Title',
    cards: [
      {
        title: 'Card 1',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeProtectedAndSecureIcon />,
        colorVariant: 'gray',
        alignVariant: 'start',
        sizeVariant: 'sm',
      },
      {
        title: 'Card 2',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeSupport247Icon />,
        colorVariant: 'gray',
        alignVariant: 'start',
        sizeVariant: 'sm',
      },
      {
        title: 'Card 3',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeLicensedAndRegulatedIcon />,
        colorVariant: 'gray',
        alignVariant: 'start',
        sizeVariant: 'sm',
      },
      {
        title: 'Card 4',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeSpreadsIcon />,
        colorVariant: 'gray',
        alignVariant: 'start',
        sizeVariant: 'sm',
      },
      {
        title: 'Card 5',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeLicensedAndRegulatedIcon />,
        colorVariant: 'gray',
        alignVariant: 'start',
        sizeVariant: 'sm',
      },
      {
        title: 'Card 6',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeSupport247Icon />,
        colorVariant: 'gray',
        alignVariant: 'start',
        sizeVariant: 'sm',
      },
    ],
    renderCard: Card.ContentBottom,
  },
};
