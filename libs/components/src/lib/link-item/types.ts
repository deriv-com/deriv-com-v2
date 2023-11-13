import { type VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { linkItemCva } from './link-item.classnames';
import { QuillSvgProps } from '@deriv/quill-icons';
import { ExcludeNull } from '@deriv/quill-design';

export type QuillIconComponent = React.ForwardRefExoticComponent<
  Omit<QuillSvgProps, 'ref'>
>;
export interface LinkItemProps
  extends HTMLAttributes<HTMLSpanElement>,
    ExcludeNull<
      VariantProps<typeof linkItemCva>,
      'colorStyle' | 'size' | 'disabled'
    > {
  icon?: QuillIconComponent;
  hasIcon?: boolean;
}
export type LinkItemSize = 'caption' | 'sm' | 'md' | 'lg' | 'xl';

export type colorStyle = LinkItemProps['colorStyle'];

export type LinkItemTestSize = LinkItemProps['size'];

export type LinkItemDisabled = LinkItemProps['disabled'];
