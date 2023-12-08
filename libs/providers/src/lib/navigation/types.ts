import { ReactElement } from 'react';

type WithId<T> = T & { id: number };

export interface BaseNavItem {
  text: string | ReactElement;
  isMobileNavOnly?: boolean;
}

export interface BaseNavLink extends BaseNavItem {
  href: string;
  icon?: React.ReactNode;
  description?: string | ReactElement;
  external?: boolean;
  isDesktopNavOnly?: boolean;
}

export interface DirectNavLink extends BaseNavLink {
  type: 'direct';
}

export interface SubNavLink {
  type: 'sub-link';
  header: DirectNavLink;
  subLinks: WithId<DirectNavLink>[];
}

export interface NavHeaderText {
  type: 'text';
  text: string | ReactElement | null;
}

export interface DropdownNavLinkColumn {
  header?: DirectNavLink | NavHeaderText;
  items: Array<WithId<SubNavLink> | WithId<DirectNavLink>>;
}

export interface NavDirectLink extends BaseNavLink {
  type: 'nav-direct';
}

export interface DropdownNavLink extends BaseNavItem {
  type: 'nav-dropdown';
  columns: WithId<DropdownNavLinkColumn>[];
}

export type NavItem = DirectNavLink | DropdownNavLink;

export type NavLinkItems = {
  [key: string]: WithId<NavItem>;
};
