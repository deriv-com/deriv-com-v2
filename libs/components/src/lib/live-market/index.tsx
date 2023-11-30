import { ReactNode } from 'react';
import { Container } from './container';

type LiveMarketType = {
  Container: typeof Container;
};

export const LiveMarket: LiveMarketType = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

LiveMarket.Container = Container;

export default LiveMarket;
