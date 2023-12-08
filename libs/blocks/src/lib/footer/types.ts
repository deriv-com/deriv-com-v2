import { ReactNode } from 'react';

type WithId<T> = T & { id: number };

export interface NavLink {
  text: string;
  href: string;
  icon?: React.ReactNode;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export interface LinkLayer {
  type: 'link';
  header: string;
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
