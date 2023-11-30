import { ReactNode } from 'react';
import { LiveMarketSlider } from './slider';
import { LiveMarketTab } from './tab';

type LiveMarketBlockType = {
  Slider: typeof LiveMarketSlider;
  Tab: typeof LiveMarketTab;
};

export const LiveMarketBlock: LiveMarketBlockType = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

LiveMarketBlock.Slider = LiveMarketSlider;
LiveMarketBlock.Tab = LiveMarketTab;

export default LiveMarketBlock;
