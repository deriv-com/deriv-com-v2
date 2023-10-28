import { qtMerge } from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentPropsWithRef, useState } from 'react';

export interface CustomLinkProps extends ComponentPropsWithRef<typeof Link> {
  skipLocaleHandling?: boolean;
  size?: textSize;
  href: string;
  hasIcon?: boolean;
  hasHoverColor?: boolean;
  hasHoverDecoration?: boolean;
  hasLinkColor?: boolean;
}

type textSize = 'sm' | 'md' | 'lg';

export function CustomLink({
  skipLocaleHandling,
  href,
  className,
  size = 'sm',
  hasIcon = false,
  hasHoverColor = false,
  hasHoverDecoration = true,
  hasLinkColor = false,
  children,
  ...rest
}: CustomLinkProps) {
  // TODO: uncomment this when we have localization
  // const customHref = useCustomLink({
  //   href,
  //   locale: rest.locale,
  //   skipLocaleHandling: skipLocaleHandling,
  // });

  // TODO: remove this when we have localization
  const router = useRouter();
  const locale = rest.locale || router.query.locale || 'en';

  let customHref = href.toString() || router.asPath;
  if (customHref.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    if (locale === 'en') {
      if (customHref === '/') {
        customHref = '/';
      } else {
        customHref = customHref
          ? `${customHref}`
          : router.pathname.replace('[locale]', locale as string);
      }
    } else {
      customHref = customHref
        ? `/${locale}${customHref}`
        : router.pathname.replace('[locale]', locale as string);
    }
  }

  const [is_hover, setHover] = useState(false);

  return (
    <Link
      onMouseOver={() => hasHoverColor && setHover(true)}
      onMouseOut={() => setHover(false)}
      href={customHref}
      className={qtMerge(
        'flex items-center justify-center',
        'text-typography-prominent',
        size === 'sm' && 'text-body-sm',
        size === 'md' && 'text-body-md',
        size === 'lg' && 'text-body-lg',
        hasLinkColor && 'text-typography-link',
        hasHoverColor && 'hover:text-typography-link',
        hasHoverDecoration && 'hover:underline',
        className,
      )}
      {...rest}
    >
      {children}
      {hasIcon && (
        <StandaloneChevronRightRegularIcon
          iconSize="sm"
          fill={is_hover && hasLinkColor ? '#FF444F' : '#000000'}
        />
      )}
    </Link>
  );
}

export default CustomLink;
