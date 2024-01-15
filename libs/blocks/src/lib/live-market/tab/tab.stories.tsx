import type { Meta, StoryObj } from '@storybook/react';
import LiveMarketTab from '.';
import {
  MarketForexAudusdIcon,
  MarketForexEurusdIcon,
  MarketForexGbpusdIcon,
  MarketForexUsdjpyIcon,
} from '@deriv/quill-icons/Markets';
import { CardSlider } from '@deriv-com/components';

const meta = {
  title: 'Blocks/LiveMarket/Tab',
  component: LiveMarketTab,
} satisfies Meta<typeof LiveMarketTab>;

export default meta;
type Story = StoryObj<typeof LiveMarketTab>;

export const Default: Story = {
  render: () => {
    return (
      <LiveMarketTab
        header="Header here"
        description="desciption here description here"
        className="bg-background-primary-base"
        disclaimer="*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only."
        link={{ href: '/', content: 'More forex' }}
        tabs={[
          { content: 'Forex' },
          { content: 'Derived Indices' },
          { content: 'Etfs' },
        ]}
      >
        <CardSlider
          variant="LiveMarketCard"
          slideClasses="max-w-full"
          swiperData={{
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
          }}
          cards={[
            {
              id: 1,
              instrumentIcon: <MarketForexEurusdIcon />,
              instrument: 'EUR/USD',
              changePercentage: '+0.11%',
              mid: 1.07221,
              bidPrice: '1.07219',
              askPrice: '1.07223',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 2,
              instrumentIcon: <MarketForexGbpusdIcon />,
              instrument: 'GBP/USD',
              changePercentage: '+0.11%',
              mid: 1.24307,
              bidPrice: '1.24112',
              askPrice: '1.24502',
              spread: '0.0001',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 3,
              instrumentIcon: <MarketForexUsdjpyIcon />,
              instrument: 'USD/JPY',
              changePercentage: '+0.11%',
              mid: 0.242495,
              bidPrice: '0.24234',
              askPrice: '0.24265',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 4,
              instrumentIcon: <MarketForexAudusdIcon />,
              instrument: 'AUD/USD',
              changePercentage: '0.00%',
              mid: 0.661805,
              bidPrice: '0.66118',
              askPrice: '0.66243',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
          ]}
        />
        <CardSlider
          variant="LiveMarketCard"
          slideClasses="max-w-full"
          swiperData={{
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
          }}
          cards={[
            {
              id: 2,
              instrumentIcon: <MarketForexGbpusdIcon />,
              instrument: 'GBP/USD',
              changePercentage: '+0.11%',
              mid: 1.24307,
              bidPrice: '1.24112',
              askPrice: '1.24502',
              spread: '0.0001',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 1,
              instrumentIcon: <MarketForexEurusdIcon />,
              instrument: 'EUR/USD',
              changePercentage: '+0.11%',
              mid: 1.07221,
              bidPrice: '1.07219',
              askPrice: '1.07223',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 3,
              instrumentIcon: <MarketForexUsdjpyIcon />,
              instrument: 'USD/JPY',
              changePercentage: '+0.11%',
              mid: 0.242495,
              bidPrice: '0.24234',
              askPrice: '0.24265',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 4,
              instrumentIcon: <MarketForexAudusdIcon />,
              instrument: 'AUD/USD',
              changePercentage: '0.00%',
              mid: 0.661805,
              bidPrice: '0.66118',
              askPrice: '0.66243',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
          ]}
        />
        <CardSlider
          variant="LiveMarketCard"
          slideClasses="max-w-full"
          swiperData={{
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
          }}
          cards={[
            {
              id: 1,
              instrumentIcon: <MarketForexEurusdIcon />,
              instrument: 'EUR/USD',
              changePercentage: '+0.11%',
              mid: 1.07221,
              bidPrice: '1.07219',
              askPrice: '1.07223',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 2,
              instrumentIcon: <MarketForexGbpusdIcon />,
              instrument: 'GBP/USD',
              changePercentage: '+0.11%',
              mid: 1.24307,
              bidPrice: '1.24112',
              askPrice: '1.24502',
              spread: '0.0001',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 4,
              instrumentIcon: <MarketForexAudusdIcon />,
              instrument: 'AUD/USD',
              changePercentage: '0.00%',
              mid: 0.661805,
              bidPrice: '0.66118',
              askPrice: '0.66243',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
            {
              id: 3,
              instrumentIcon: <MarketForexUsdjpyIcon />,
              instrument: 'USD/JPY',
              changePercentage: '+0.11%',
              mid: 0.242495,
              bidPrice: '0.24234',
              askPrice: '0.24265',
              spread: '0.00005',
              askContent: 'Ask',
              bidContent: 'Bid',
              buyContent: 'Buy',
              sellContent: 'Sell',
              spreadContent: 'Spread',
            },
          ]}
        />
      </LiveMarketTab>
    );
  },
  parameters: {
    docs: {
      source: {
        code: 'disabled',
      },
    },
  },
};
