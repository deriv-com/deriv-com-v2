import { ReactNode } from 'react';
import PlatformBlockTab from './tab';

export type PlatformBlockType = {
  Tab: typeof PlatformBlockTab;
};

export const PlatformBlock = ({ children }: { children: ReactNode }) => {
  return children;
};

PlatformBlock.Tab = PlatformBlockTab;

export default PlatformBlock;
