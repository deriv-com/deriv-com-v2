import { useSharedLink } from '@deriv-com/hooks';
import { qtMerge } from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';
import { HTMLAttributes, useState } from 'react';

export interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  skipLocaleHandling?: boolean;
  size?: textSize;
  href: string;
  hasIcon?: boolean;
  hasHoverColor?: boolean;
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
  hasHoverColor = false,
  hasHoverDecoration = true,
  hasLinkColor = false,
  disabled = false,
  children,
  ...rest
}: CustomLinkProps) {
  const { DerivLink } = useSharedLink();

  const [isHover, setHover] = useState(false);

  return (
    <DerivLink
      onMouseOver={() => hasHoverColor && setHover(true)}
      onMouseOut={() => setHover(false)}
      href={href}
      className={qtMerge(
        'flex',
        'text-typography-prominent',
        size === 'sm' && 'text-body-sm',
        size === 'md' && 'text-body-sm lg:text-body-md',
        size === 'lg' && 'text-body-lg',
        hasLinkColor && 'text-typography-link',
        hasHoverColor && 'hover:text-typography-link',
        hasHoverDecoration && 'hover:underline',
        disabled && 'pointer-events-none text-opacity-black-400',
        className,
      )}
      {...rest}
    >
      {children}

      {hasIcon && (
        <StandaloneChevronRightRegularIcon
          iconSize="sm"
          fill={isHover || hasLinkColor ? '#FF444F' : '#000000'}
        />
      )}
    </DerivLink>
  );
}

export default CustomLink;
