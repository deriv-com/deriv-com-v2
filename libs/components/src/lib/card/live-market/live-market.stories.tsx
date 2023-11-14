import type { Meta, StoryObj } from '@storybook/react';
import LiveMarketCard from '.';
import { MarketForexEurusdIcon } from '@deriv/quill-icons/Markets';

const meta = {
  title: 'Components/Card/LiveMarketCard',
  tags: ['auto-docs'],
  parameters: {
    layout: 'centered',
  },
  component: LiveMarketCard,
} satisfies Meta<typeof LiveMarketCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    instrumentIcon: <MarketForexEurusdIcon />,
    instrument: 'EUR/USD',
    changePercentage: '+0.11%',
    status: 'up',
    bidPrice: '1.07219',
    askPrice: '1.07223',
    spread: '0.00005',
  },
};
