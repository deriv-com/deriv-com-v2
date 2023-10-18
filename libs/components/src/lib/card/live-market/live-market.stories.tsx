import type { Meta, StoryObj } from '@storybook/react';
import LiveMarketCard from '.';
import { FlagUsaIcon } from '@deriv/quill-icons';

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
    instrumentIcon: <FlagUsaIcon />,
    instrument: 'EUR/USD',
    changePercentage: '+0.11%',
    status: 'up',
    bidPrice: '1.07219',
    askPrice: '1.07223',
    spread: '0.00005',
  },
};

export const Down: Story = {
  args: {
    instrumentIcon: <FlagUsaIcon />,
    instrument: 'EUR/USD',
    changePercentage: '+0.11%',
    status: 'down',
    bidPrice: '1.07219',
    askPrice: '1.07223',
    spread: '0.00005',
  },
};

export const Remain: Story = {
  args: {
    instrumentIcon: <FlagUsaIcon />,
    instrument: 'EUR/USD',
    changePercentage: '+0.11%',
    status: 'remain',
    bidPrice: '1.07219',
    askPrice: '1.07223',
    spread: '0.00005',
  },
};

export const Disabled: Story = {
  args: {
    instrumentIcon: <FlagUsaIcon />,
    instrument: 'EUR/USD',
    changePercentage: '+0.11%',
    status: 'closed',
    bidPrice: '1.07219',
    askPrice: '1.07223',
    spread: '0.00005',
  },
};
