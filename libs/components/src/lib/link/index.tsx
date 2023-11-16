import { useSharedLink } from '@deriv-com/hooks';
import { qtMerge } from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';
import { HTMLAttributes } from 'react';

export interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  skipLocaleHandling?: boolean;
  size?: textSize;
  href: string;
  hasIcon?: boolean;
  hasHoverDecoration?: boolean;
  hasLinkColor?: boolean;
  disabled?: boolean;
}

export type textSize = 'sm' | 'md' | 'lg';

export function CustomLink({
  skipLocaleHandling,
  href,
  className,
  size = 'sm',
  hasIcon = false,
  hasHoverDecoration = true,
  hasLinkColor = false,
  disabled = false,
  children,
  ...rest
}: CustomLinkProps) {
  const { DerivLink } = useSharedLink();

  return (
    <DerivLink
      href={href}
      className={qtMerge(
        'flex',
        'text-typography-prominent',
        hasIcon && 'items-center justify-center',
        size === 'sm' && 'text-body-sm',
        size === 'md' && 'text-body-sm lg:text-body-md',
        size === 'lg' && 'text-body-lg',
        hasLinkColor && 'text-typography-link',
        hasHoverDecoration && 'hover:underline',
        disabled && 'pointer-events-none text-opacity-black-400',
        className,
      )}
      {...rest}
    >
      {children}
      {hasIcon && <StandaloneChevronRightRegularIcon iconSize="sm" />}
    </DerivLink>
  );
}

export default CustomLink;
