import { ReactNode } from 'react';
import Base from './base';

export type BreadcrumbsVariants = {
  Base: typeof Base;
};

export const Breadcrumbs: BreadcrumbsVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

Breadcrumbs.Base = Base;

export default Breadcrumbs;
