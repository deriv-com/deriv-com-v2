import { ReactNode } from 'react';
import PlatformBlockTab from './tab';
import PlatformBlockCard from './card';

export type PlatformBlockType = {
  Tab: typeof PlatformBlockTab;
  Card: typeof PlatformBlockCard;
};

export const PlatformBlock = ({ children }: { children: ReactNode }) => {
  return children;
};

PlatformBlock.Tab = PlatformBlockTab;
PlatformBlock.Card = PlatformBlockCard;

export default PlatformBlock;
