import { forwardRef } from 'react';
import {
  LinkItemIconSizes,
  LinkItemIconStandaloneSizes,
  linkItemCva,
  linkItemIconCva,
} from './link-item.classnames';

import { LabelPairedChevronRightRegularIcon } from '@deriv/quill-icons/LabelPaired';
import { LinkItemProps } from './types';
import { qtJoin, qtMerge } from '@deriv/quill-design';

export const LinkItem = forwardRef<HTMLSpanElement, LinkItemProps>(
  (
    {
      className,
      colorStyle = 'black',
      size = 'sm',
      disabled,
      icon: Icon,
      hasIcon = false,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        {...rest}
        className={qtMerge(
          linkItemCva({ colorStyle, size, disabled, className }),
        )}
      >
        {Icon && (
          <Icon
            className={qtJoin(linkItemIconCva({ colorStyle }))}
            data-testid="dt-link-item-icon"
            {...LinkItemIconStandaloneSizes[size]}
          />
        )}
        {children}

        {hasIcon && (
          <LabelPairedChevronRightRegularIcon
            className={qtJoin(linkItemIconCva({ colorStyle }))}
            data-testid="dt-link-item-chevron"
            {...LinkItemIconSizes[size]}
          />
        )}
      </span>
    );
  },
);

LinkItem.displayName = 'LinkItem';

export default LinkItem;
