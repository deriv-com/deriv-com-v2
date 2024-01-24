import { ComponentProps, ReactNode } from 'react';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import { Tab } from '@deriv-com/components';

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
    <Section
      className={qtMerge(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer>
        <div className="flex flex-col gap-gap-3xl">
          {header && (
            <Heading.H2 className="mx-auto max-w-[816px] text-center">
              {header}
            </Heading.H2>
          )}
          <Tab.Base
            tabs={tabs}
            tabId={tabId}
            className="flex flex-col gap-gap-2xl"
          >
            {children}
          </Tab.Base>
        </div>
        {description && (
          <Text className="my-general-xl text-center">{description}</Text>
        )}
      </FluidContainer>
    </Section>
  );
};

export default PlatformBlockTab;
