import React from 'react';
import BlockWrapper, { BlockWrapperProps } from '../../block-wrapper';
import { qtMerge } from '@deriv/quill-design';

export const CTAV5 = ({
  heading = 'H2',
  className,
  ...rest
}: BlockWrapperProps) => {
  return (
    <BlockWrapper
      className={qtMerge('items-center justify-center gap-gap-3xl', className)}
      heading={heading}
      {...rest}
    />
  );
};

export default CTAV5;
