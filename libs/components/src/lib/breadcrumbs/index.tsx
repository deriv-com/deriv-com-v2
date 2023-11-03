import Base from './base';
import { BreadcrumbsProps } from './types';

export const Breadcrumbs = ({ ...otherProps }: BreadcrumbsProps) => {
  return <Base {...otherProps} />;
};

export default Breadcrumbs;

export * from './types';
