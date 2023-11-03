import { LinkProps } from '@deriv-com/utils';
import CustomLink from '../../link';
import { BreadcrumbsProps } from '../types';
import { useWindowWidth } from '@react-hook/window-size';
import { Fragment, useEffect, useState } from 'react';
import { qtMerge } from '@deriv/quill-design';
import { maxLinks } from './constants';

export function Base({ size = 'sm', links = [], className }: BreadcrumbsProps) {
  const [renderLinks, setRenderLinks] = useState<LinkProps[]>([]);
  const [dropdownLinks, setDropdownLinks] = useState<LinkProps[]>([]);

  const isLastItem = (key: number) => renderLinks.length - 1 > key;
  const linksLen = links.length;
  const hasExtra = useWindowWidth() < 768 && maxLinks < linksLen;

  useEffect(() => {
    setRenderLinks(links);

    if (hasExtra) {
      const limited_links = [
        links[0],
        { content: '...', href: '' },
        links[linksLen - 2],
        links[linksLen - 1],
      ];

      setRenderLinks(limited_links);

      const remaining_links: LinkProps[] = links.filter(
        (item) => !new Set(limited_links).has(item),
      );

      setDropdownLinks(remaining_links);
    }
  }, [links]);

  return (
    <div className={qtMerge('flex', className)}>
      {renderLinks.map(({ content, href }, lk) => (
        <Fragment key={`breadcrumbs-${content}`}>
          {hasExtra && lk === 1 && (
            <select
              className="relative -right-600 -ml-1200 w-1300 opacity-50"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (typeof window !== 'undefined') {
                  window.location.href = e.target.value;
                }
              }}
            >
              {dropdownLinks.map(({ href, content }, dk) => {
                return (
                  <option key={`dropdown-${content}`} value={href}>
                    {content}
                  </option>
                );
              })}
            </select>
          )}

          <CustomLink
            size={size}
            href={href}
            hasHoverColor={isLastItem(lk)}
            hasHoverDecoration={isLastItem(lk)}
            hasIcon={isLastItem(lk)}
            disabled={!isLastItem(lk)}
          >
            {content}
          </CustomLink>
        </Fragment>
      ))}
    </div>
  );
}

export default Base;
