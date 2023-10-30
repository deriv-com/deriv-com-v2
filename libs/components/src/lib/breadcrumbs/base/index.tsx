import CustomLink from '../../link';
import { BreadcrumbsProps } from '../types';

export function Base({ size = 'sm' }: BreadcrumbsProps) {
  return (
    <div className="flex">
      {/* {links.forEach((link) => (
        <CustomLink {...link}>{link.children}</CustomLink>
      ))} */}
    </div>
  );
}

export default Base;
