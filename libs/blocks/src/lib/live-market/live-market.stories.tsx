import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiveMarket from '.';
import {
  FlagAustraliaIcon,
  FlagJapanIcon,
  FlagUnitedKingdomIcon,
  FlagUsaIcon,
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
      slideClasses: 'max-w-[286px]',
      swiperData: {
        spaceBetween: 16,
        breakpoints: {
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 'auto',
          },
        },
        pagination: undefined,
      },
      cards: [
        {
          instrumentIcon: <FlagUsaIcon />,
          instrument: 'EUR/USD',
          changePercentage: '+0.11%',
          status: 'up',
          bidPrice: '1.07219',
          askPrice: '1.07223',
          spread: '0.00005',
        },
        {
          instrumentIcon: <FlagUnitedKingdomIcon />,
          instrument: 'GBP/USD',
          changePercentage: '+0.11%',
          status: 'down',
          bidPrice: '1.07219',
          askPrice: '1.07223',
          spread: '0.00005',
        },
        {
          instrumentIcon: <FlagJapanIcon />,
          instrument: 'USD/JPY',
          changePercentage: '+0.11%',
          status: 'remain',
          bidPrice: '1.07219',
          askPrice: '1.07223',
          spread: '0.00005',
        },
        {
          instrumentIcon: <FlagAustraliaIcon />,
          instrument: 'AUD/USD',
          changePercentage: '+0.11%',
          status: 'closed',
          bidPrice: '1.07219',
          askPrice: '1.07223',
          spread: '0.00005',
        },
      ],
      renderCard: Card.LiveMarketCard,
    },
    className: 'bg-solid-slate-75',
    disclaimer:
      '*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only.',
    link: { href: '/', content: 'More forex' },
  },
};
