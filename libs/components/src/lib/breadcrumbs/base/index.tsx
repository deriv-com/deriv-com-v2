import CustomLink from '../../link';
import { BreadcrumbsProps } from '../types';
import { useWindowWidth } from '@react-hook/window-size';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import { qtMerge } from '@deriv/quill-design';
import { maxLinks } from './constants';

export function Base({ size = 'sm', links = [], className }: BreadcrumbsProps) {
  //todo: removed [LinkProps] from utils/generics and added here. we need to update this because we are using this on multiple places
  interface LinkProps {
    content: ReactNode;
    href: string;
  }

  const [renderLinks, setRenderLinks] = useState<LinkProps[]>([]);
  const [dropdownLinks, setDropdownLinks] = useState<LinkProps[]>([]);

  const isLastItem = (key: number) => renderLinks.length - 1 > key;
  const linksLen = links.length;
  const hasExtra = useWindowWidth() < 768 && maxLinks < linksLen;

  useEffect(() => {
    setRenderLinks(links);

    if (hasExtra) {
      const limitedLinks = [
        links[0],
        { content: '...', href: '' },
        links[linksLen - 2],
        links[linksLen - 1],
      ];

      setRenderLinks(limitedLinks);

      const remainingLinks: LinkProps[] = links.filter(
        (item) => !new Set(limitedLinks).has(item),
      );

      setDropdownLinks(remainingLinks);
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
            className="items-center"
          >
            {content}
          </CustomLink>
        </Fragment>
      ))}
    </div>
  );
}

export default Base;
