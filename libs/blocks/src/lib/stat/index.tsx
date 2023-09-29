import { ReactNode } from 'react';
import NumbersWithTitle from './numbers-with-title';

export type StatBlockVariants = {
  NumbersWithTitle: typeof NumbersWithTitle;
};

export const StatBlock: StatBlockVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

StatBlock.NumbersWithTitle = NumbersWithTitle;

export default StatBlock;
