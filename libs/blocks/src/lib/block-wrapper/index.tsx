import {
  FluidContainer,
  Heading,
  qtMerge,
  Section,
  Text,
} from '@deriv/quill-design';
import { ReactNode } from 'react';

type bgVariant = 'light' | 'gray';

const bgColorVariantClass: { [key in bgVariant]: string } = {
  light: 'bg-background-primary-container',
  gray: 'bg-background-primary-base',
};
export interface BlockWrapperProps {
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
  background: bgVariant;
}

export const BlockWrapper = ({
  title,
  description,
  className,
  background = 'light',
  children,
}: BlockWrapperProps) => {
  return (
    <Section
      className={qtMerge(
        'py-general-4xl',
        'flex flex-col',
        bgColorVariantClass[background],
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center gap-gap-lg">
        {title && (
          <Heading.H2 className="text-center lg:max-w-[816px]">
            {title}
          </Heading.H2>
        )}
        {description && <Text className="text-center">{description}</Text>}
      </FluidContainer>
      {children}
    </Section>
  );
};

export default BlockWrapper;
