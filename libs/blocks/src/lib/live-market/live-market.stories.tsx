import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiveMarket from '.';
import {
  MarketForexAudusdIcon,
  MarketForexEurusdIcon,
  MarketForexGbpusdIcon,
  MarketForexUsdjpyIcon,
} from '@deriv/quill-icons/Markets';

const meta = {
  title: 'Blocks/LiveMarket',
  component: LiveMarket,
} satisfies Meta<typeof LiveMarket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Header here',
    description: 'Desciption goes here description goes here',
    cardSliderProps: {
      variant: 'LiveMarketCard',
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
          instrumentIcon: <MarketForexEurusdIcon />,
          instrument: 'EUR/USD',
          changePercentage: '+0.11%',
          status: 'up',
          bidPrice: '1.07219',
          askPrice: '1.07223',
          spread: '0.00005',
        },
        {
          instrumentIcon: <MarketForexGbpusdIcon />,
          instrument: 'GBP/USD',
          changePercentage: '+0.11%',
          status: 'down',
          bidPrice: '1.24112',
          askPrice: '1.24502',
          spread: '0.0001',
        },
        {
          instrumentIcon: <MarketForexUsdjpyIcon />,
          instrument: 'USD/JPY',
          changePercentage: '+0.11%',
          status: 'remain',
          bidPrice: '0.24234',
          askPrice: '0.24265',
          spread: '0.00005',
        },
        {
          instrumentIcon: <MarketForexAudusdIcon />,
          instrument: 'AUD/USD',
          changePercentage: '0.00%',
          status: 'closed',
          bidPrice: '0.66118',
          askPrice: '0.66243',
          spread: '0.00005',
        },
      ],
    },
    className: 'bg-background-primary-base',
    disclaimer:
      '*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only.',
    link: { href: '/', content: 'More forex' },
  },
};
