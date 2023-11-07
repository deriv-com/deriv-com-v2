import { LiveMarket } from '@deriv-com/blocks';
import { LivePriceData } from './data';
import { ReactNode, useEffect, useState } from 'react';
import { LiveMarketContent } from '@deriv-com/components';
import {
  MarketForexAudusdIcon,
  MarketForexEurusdIcon,
  MarketForexGbpjpyIcon,
  MarketForexGbpusdIcon,
  MarketForexUsdcadIcon,
  StandaloneLocationCrosshairsBoldIcon,
} from '@deriv/quill-icons';

const LiveMarketSection = () => {
  const [LivePriceData, setLivePriceData] = useState<LiveMarketContent[]>([]);

  const forexIcons: { [key: string]: ReactNode } = {
    'AUD/USD': <MarketForexAudusdIcon />,
    'EUR/USD': <MarketForexEurusdIcon />,
    'GBP/JPY': <MarketForexGbpjpyIcon />,
    'GBP/USD': <MarketForexGbpusdIcon />,
    'USD/CAD': <MarketForexUsdcadIcon />,
  };

  const handleLiveMarketData = (data: any) => {
    if (data) {
      const markets = data?.row?.mkt;

      if (markets) {
        const { fx } = markets;
        const newLivePriceData = [...LivePriceData];

        Object.keys(fx).forEach((marketKey) => {
          const { sym, ask, bid, chng, sprd } = fx[marketKey];
          const marketIcon = forexIcons[sym] || (
            <StandaloneLocationCrosshairsBoldIcon />
          );

          newLivePriceData.push({
            instrumentIcon: marketIcon,
            instrument: sym,
            changePercentage: chng,
            status:
              parseFloat(chng) === 0
                ? 'remain'
                : parseFloat(chng) > 0
                ? 'up'
                : 'down',
            bidPrice: bid + '',
            askPrice: ask + '',
            spread: sprd,
          });
        });

        setLivePriceData(newLivePriceData);
      }
    }
  };

  useEffect(() => {
    setInterval(() => {
      fetch('https://deriv-static-pricingfeedv2.firebaseio.com/.json')
        .then((response) => response.json())
        .then((data) => handleLiveMarketData(data));
    }, 900);
  }, []);

  return (
    <LiveMarket
      className="bg-background-primary-base"
      disclaimer="*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only."
      link={{ href: '/', content: 'See all forex pairs' }}
      cardSliderProps={{
        cards: LivePriceData,
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
      }}
    />
  );
};

export default LiveMarketSection;
