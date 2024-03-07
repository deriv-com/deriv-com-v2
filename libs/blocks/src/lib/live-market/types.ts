import {
  CardSliderProps,
  CardVariantType,
  LiveMarket,
  Tab,
} from '@deriv-com/components';

import { ComponentProps } from 'react';

export type LiveMarketTabType = ComponentProps<typeof LiveMarket.Container> &
  ComponentProps<typeof Tab.Base>;

export type LiveMarketProps<T extends CardVariantType> = Omit<
  ComponentProps<typeof LiveMarket.Container>,
  'children'
> & {
  cardSliderProps?: CardSliderProps<T>;
};
