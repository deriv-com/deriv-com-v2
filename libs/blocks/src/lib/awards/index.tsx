import React from 'react';
import BlockWrapper from '../block-wrapper';
import { FluidContainer } from '@deriv/quill-design';
import clsx from 'clsx';

export type AwardBlockProps = {
  title?: string;
  description?: string;
  className?: string;
  awardsSet: React.ReactNode;
};
export const AwardsBlock = ({
  title,
  description,
  awardsSet,
  className,
}: AwardBlockProps) => {
  return (
    <BlockWrapper title={title} description={description} className={className}>
      <FluidContainer className="flex justify-center">
        <div className={clsx((title || description) && 'pt-general-2xl')}>
          {awardsSet}
        </div>
      </FluidContainer>
    </BlockWrapper>
  );
};

export default AwardsBlock;
