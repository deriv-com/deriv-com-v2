import { NavLinkItems } from '@deriv-com/providers';

export const partnersItems: NavLinkItems = {
  trade: {
    id: 0,
    type: 'direct',
    href: '/deriv-prime',
    text: 'Deriv Prime',
  },
  affiliates: {
    id: 1,
    href: '/affiliates-and-ibs',
    text: 'Affiliates and IBs',
    type: 'direct',
  },
  'payment-agents': {
    id: 2,
    href: '/payment-agents',
    text: 'Payment agents',
    type: 'direct',
  },
  'deriv-api': {
    id: 3,
    href: '/api',
    text: 'API',
    type: 'direct',
  },
};

export const derivAPIItems: NavLinkItems = {
  documentation: {
    id: 0,
    type: 'direct',
    href: '/',
    text: 'Documentation',
  },
  dashboard: {
    id: 0,
    type: 'direct',
    href: '/',
    text: 'Dashboard',
  },
  'api-explorer': {
    id: 0,
    type: 'direct',
    href: '/',
    text: 'API Explorer',
  },
  blog: {
    id: 0,
    type: 'direct',
    href: '/',
    text: 'Blog',
  },
  'bug-bounty': {
    id: 0,
    type: 'direct',
    href: '/',
    text: 'Bug Bounty',
  },
};
