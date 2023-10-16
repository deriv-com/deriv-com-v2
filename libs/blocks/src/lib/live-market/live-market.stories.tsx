import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiveMarket from '.';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons';

import { Card } from '@deriv-com/components';

const meta = {
  title: 'Blocks/Features/LiveMarket',
  component: LiveMarket,
} satisfies Meta<typeof LiveMarket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isHeaderSection: true,
    header: 'Header here',
    description: 'desciption here description here',
    cardSliderProps: {
      slideClasses: 'max-w-xs',
      cards: [
        {
          header: 'Card 1',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeProtectedAndSecureIcon />,
          color: 'light',
          align: 'start',
          size: 'sm',
        },
        {
          header: 'Card 2',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeSupport247Icon />,
          color: 'light',
          align: 'start',
          size: 'sm',
        },
        {
          header: 'Card 3',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeLicensedAndRegulatedIcon />,
          color: 'light',
          align: 'start',
          size: 'sm',
        },
        {
          header: 'Card 4',
          description:
            'Description here. Description here. Description here. Description here.',
          icon: <IllustrativeSpreadsIcon />,
          color: 'light',
          align: 'start',
          size: 'sm',
        },
      ],
      renderCard: Card.ContentBottom,
    },
    className: 'bg-solid-slate-75',
    disclaimer:
      '*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only.',
    link: { href: '/', content: 'More forex' },
  },
};
