import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deriv/quill-design';
import ContentSlider from '.';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons';

import { Card } from '@deriv-com/components';

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
    cta: (
      <div className="flex w-full justify-center">
        <Button>CTA</Button>
      </div>
    ),
    title: 'Card Slider Title',
    slideClasses: 'max-w-xs',
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
    renderCard: Card.ContentBottom,
  },
};
