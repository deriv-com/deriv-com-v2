import { ReactNode } from 'react';

type listItems = {
  icon: ReactNode;
  text: string;
  listIcon: ReactNode;
  lists: string[];
};

export interface ColContent {
  subheader: string;
  items: string[] | listItems[];
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
