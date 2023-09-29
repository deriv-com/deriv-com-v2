import { ReactNode } from 'react';
import NumbersWithTitle from './numbers-with-title';
import NumbersOnly from './numbers-only';

export type StatBlockVariants = {
  NumbersWithTitle: typeof NumbersWithTitle;
  NumbersOnly: typeof NumbersOnly;
};

export const StatBlock: StatBlockVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

StatBlock.NumbersWithTitle = NumbersWithTitle;
StatBlock.NumbersOnly = NumbersOnly;

export default StatBlock;
