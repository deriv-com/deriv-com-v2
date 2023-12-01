import { useSharedLink } from '@deriv-com/hooks';
import { qtMerge } from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  skipLocaleHandling?: boolean;
  size?: textSize;
  href: string;
  hasIcon?: boolean;
  hasHoverDecoration?: boolean;
  hasLinkColor?: boolean;
  disabled?: boolean;
  iconColor?: iconColorVariant;
  target?: '_blank' | '_self' | '_parent' | '_top';
}
export type iconColorVariant = 'black' | 'subtle' | 'disabled' | 'default';
export type textSize = 'sm' | 'md' | 'lg';

const iconColorStyle = {
  black: 'fill-typography-prominent',
  subtle: 'fill-typography-subtle',
  disabled: 'fill-typography-disabled',
  default: 'fill-typography-default',
};

export function CustomLink({
  skipLocaleHandling,
  href,
  className,
  size = 'sm',
  hasIcon = false,
  iconColor = 'black',
  hasHoverDecoration = true,
  hasLinkColor = false,
  disabled = false,
  target = '_self',
  children,
  ...rest
}: CustomLinkProps) {
  const { DerivLink } = useSharedLink();

  return (
    <DerivLink
      href={href}
      target={target}
      className={qtMerge(
        'flex',
        'text-typography-default',
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
      {hasIcon && (
        <StandaloneChevronRightRegularIcon
          iconSize="sm"
          className={clsx(iconColorStyle[iconColor])}
        />
      )}
    </DerivLink>
  );
}

export default CustomLink;
