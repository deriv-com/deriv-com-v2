import { ReactNode } from 'react';

interface SimpleListItem {
  type: 'simple';
  text: string;
}

interface CompoundListItem {
  type: 'compound';
  text: string;
  icon: ReactNode;
  listIcon: ReactNode;
  items: string[];
}

export interface ColContent {
  subheader: string;
  listItems: Array<SimpleListItem | CompoundListItem>;
}

interface RowContent {
  cols: ColContent[];
}

export interface TableContent {
  header: string;
  description: string;
  cta: ReactNode;
  rows: RowContent[];
}
