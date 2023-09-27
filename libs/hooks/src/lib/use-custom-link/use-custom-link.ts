import { useRouter } from 'next/router';
import { useMemo } from 'react';

export function useCustomLink({
  locale,
  href,
  skipLocaleHandling = false,
}: {
  locale?: string | boolean;
  href: string;
  skipLocaleHandling?: boolean;
}) {
  const router = useRouter();

  const hrefWithLocale = useMemo(() => {
    const selectedLocale = locale || router.query.locale || 'en';
    let customHref = href.toString() || router.asPath;
    const skipLocaleCheck =
      skipLocaleHandling ||
      customHref.indexOf('http') === 0 ||
      selectedLocale === 'en';

    if (!skipLocaleCheck) {
      if (locale) {
        customHref = customHref.includes(`/${locale}/`)
          ? customHref
          : `/${locale}${customHref}`;
      } else {
        customHref = customHref.includes(`/${selectedLocale}/`)
          ? customHref
          : `/${selectedLocale}${customHref}`;
      }
    }
    return customHref;
  }, [href, locale, router.asPath, router.query.locale, skipLocaleHandling]);

  return hrefWithLocale;
}

export default useCustomLink;
