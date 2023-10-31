import styles from './base.module.css';
import { LinkProps } from '@deriv-com/utils';
import CustomLink from '../../link';
import { BreadcrumbsProps } from '../types';
import { useWindowWidth } from '@react-hook/window-size';
import { Fragment, useEffect, useState } from 'react';
import { qtMerge } from '@deriv/quill-design';

export function Base({ size = 'sm', links = [], className }: BreadcrumbsProps) {
  const [render_links, setRenderLinks] = useState<LinkProps[]>([]);
  const [dropwdown_links, setDropdownLinks] = useState<LinkProps[]>([]);

  const isLastItem = (key: number) => links.length - 1 > key;
  const links_len = links.length;
  const max_links = 3;
  const hasExtra = useWindowWidth() < 768 && max_links < links_len;

  useEffect(() => {
    setRenderLinks(links);

    if (hasExtra) {
      const limited_links = [
        links[0],
        { content: '...', href: '' },
        links[links_len - 2],
        links[links_len - 1],
      ];

      setRenderLinks(limited_links);

      const remaining_links: LinkProps[] = links.filter(
        (item) => !new Set(limited_links).has(item),
      );

      setDropdownLinks(remaining_links);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [links]);

  return (
    <div className={qtMerge('flex', className)}>
      {render_links.map(({ content, href }, lk) => (
        <Fragment key={`breadcrumbs-${content}`}>
          {hasExtra && lk === 1 && (
            <select
              className={styles['breadcrumbs-select']}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (typeof window !== 'undefined') {
                  window.location.href = e.target.value;
                }
              }}
            >
              {dropwdown_links.map(({ href, content }, dk) => {
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
