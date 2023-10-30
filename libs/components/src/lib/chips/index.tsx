import { ReactNode } from 'react';
import SelectableChip from './chip-selectable';

export type ChipVariants = {
  SelectableChip: typeof SelectableChip;
};

export const NewChips: ChipVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

NewChips.SelectableChip = SelectableChip;

export default NewChips;

export * from './types';
