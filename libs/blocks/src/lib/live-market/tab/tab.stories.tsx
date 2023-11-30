import type { Meta, StoryObj } from '@storybook/react';
import LiveMarketBlock from '..';
import {
  MarketForexAudusdIcon,
  MarketForexEurusdIcon,
  MarketForexGbpusdIcon,
  MarketForexUsdjpyIcon,
} from '@deriv/quill-icons/Markets';
import { CardsContainer } from '@deriv-com/components';

const meta = {
  title: 'Blocks/LiveMarket/Tab',
  component: LiveMarketBlock.Tab,
} satisfies Meta<typeof LiveMarketBlock.Tab>;

export default meta;
type Story = StoryObj<typeof LiveMarketBlock.Tab>;

export const Default: Story = {
  render: () => {
    return (
      <LiveMarketBlock.Tab
        header="Header here"
        description="desciption here description here"
        className="bg-background-primary-base"
        disclaimer="*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only."
        link={{ href: '/', content: 'More forex' }}
        tabs={[
          { children: 'Forex' },
          { children: 'Derived Indices' },
          { children: 'Etfs' },
        ]}
      >
        <CardsContainer
          cols="four"
          variant="LiveMarketCard"
          cards={[
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
          ]}
        />
        <CardsContainer
          cols="four"
          variant="LiveMarketCard"
          cards={[
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
          ]}
        />
        <CardsContainer
          cols="four"
          variant="LiveMarketCard"
          cards={[
            {
              instrumentIcon: <MarketForexAudusdIcon />,
              instrument: 'AUD/USD',
              changePercentage: '0.00%',
              status: 'closed',
              bidPrice: '0.66118',
              askPrice: '0.66243',
              spread: '0.00005',
            },
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
          ]}
        />
      </LiveMarketBlock.Tab>
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
