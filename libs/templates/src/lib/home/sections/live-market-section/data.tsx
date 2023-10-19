import { LiveMarketContent } from '@deriv-com/components';
import {
  FlagUsaIcon,
  FlagJapanIcon,
  FlagUnitedKingdomIcon,
  FlagAustraliaIcon,
} from '@deriv/quill-icons';

export const LivePriceData: LiveMarketContent[] = [
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
    changePercentage: '0.00%',
    status: 'closed',
    bidPrice: '1.07219',
    askPrice: '1.07223',
    spread: '0.00005',
  },
];
