import { ReactNode } from 'react';
import TabBase from './base';

export type TabVariants = {
  Base: typeof TabBase;
};

export const Tab: TabVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Tab.Base = TabBase;

export default Tab;
