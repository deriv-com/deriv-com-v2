import { ComponentProps, ReactNode } from 'react';
import { FluidContainer, Text, qtJoin } from '@deriv/quill-design';
import { Tab } from '@deriv-com/components';
import BlockWrapper from '../../block-wrapper';

export type PlatformBlockTabProps = ComponentProps<typeof Tab.Base> & {
  header?: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
};

const PlatformBlockTab = ({
  header,
  description,
  className,
  tabs,
  children,
  tabId,
}: PlatformBlockTabProps) => {
  return (
    <BlockWrapper className={className} background="light" title={header}>
      <FluidContainer className={qtJoin(header && 'pt-general-2xl')}>
        <Tab.Base
          tabs={tabs}
          tabId={tabId}
          className="flex flex-col gap-gap-2xl"
        >
          {children}
        </Tab.Base>
        {description && (
          <Text className="pt-general-xl text-center">{description}</Text>
        )}
      </FluidContainer>
    </BlockWrapper>
  );
};

export default PlatformBlockTab;
