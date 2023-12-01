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
  header?: string;
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
}: PlatformBlockTabProps) => {
  return (
    <Section
      className={qtMerge(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-gap-3xl">
          {header && <Heading.H2>{header}</Heading.H2>}
          <Tab.Base tabs={tabs} className="flex flex-col gap-gap-2xl">
            {children}
          </Tab.Base>
        </div>
        {description && <Text className="my-general-xl">{description}</Text>}
      </FluidContainer>
    </Section>
  );
};

export default PlatformBlockTab;
