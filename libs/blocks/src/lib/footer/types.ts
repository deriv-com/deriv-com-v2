import { ReactElement, ReactNode } from 'react';

type WithId<T> = T & { id: number };

export interface NavLink {
  text: string | ReactElement;
  href: string;
  icon?: React.ReactNode;
}

export interface LinkLayer {
  type: 'link';
  header: string | ReactElement;
  items: Array<WithId<NavLink>>;
}

export interface NodeLayer {
  type: 'node';
  node: ReactNode;
}

export interface FooterLayers {
  layers: Array<WithId<LinkLayer | NodeLayer>>;
}

export type FooterItems = WithId<FooterLayers>;
