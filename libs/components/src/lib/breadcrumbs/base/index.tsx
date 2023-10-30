import CustomLink from '../../link';
import { BreadcrumbsProps } from '../types';

export function Base({ size = 'sm', links }: BreadcrumbsProps) {
  const isLastItem = (key: number) => links.length - 1 > key;

  return (
    <div className="flex">
      {links.map(({ content, href }, lk) => (
        <CustomLink
          key={href}
          size={size}
          href={href}
          hasHoverColor={isLastItem(lk)}
          hasHoverDecoration={isLastItem(lk)}
          hasIcon={isLastItem(lk)}
          disabled={!isLastItem(lk)}
        >
          {content}
        </CustomLink>
      ))}
    </div>
  );
}

export default Base;
