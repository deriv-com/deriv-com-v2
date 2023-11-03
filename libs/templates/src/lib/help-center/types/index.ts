import { ReactNode } from 'react';

export type FAQDataType = {
  header: string;
  questions: string[];
  answers?: (() => ReactNode)[];
};

export type FAQSearchResults = {
  header: string;
  questions: string[];
};
