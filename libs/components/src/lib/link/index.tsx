import { qtMerge } from '@deriv/quill-design';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentPropsWithRef } from 'react';

export interface CustomLinkProps extends ComponentPropsWithRef<typeof Link> {
  skipLocaleHandling?: boolean;
  href: string;
}

export function CustomLink({
  skipLocaleHandling,
  href,
  className,
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
  return (
    <Link
      href={customHref}
      className={qtMerge(
        'text-typography-prominent text-body-sm hover:text-typography-link',
        className,
      )}
      {...rest}
    />
  );
}

export default CustomLink;
