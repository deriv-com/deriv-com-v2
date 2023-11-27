import { ReactNode } from 'react';
import V1StatBlock from './v1';
import V2StatBlock from './v2';

export type StatBlockVariants = {
  V1: typeof V1StatBlock;
  V2: typeof V2StatBlock;
};

export const StatBlock: StatBlockVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

StatBlock.V1 = V1StatBlock;
StatBlock.V2 = V2StatBlock;

export default StatBlock;
