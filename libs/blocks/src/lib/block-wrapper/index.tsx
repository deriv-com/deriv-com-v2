import {
  FluidContainer,
  Heading,
  qtMerge,
  Section,
  Text,
} from '@deriv/quill-design';
import { ReactNode } from 'react';

export type BgVariant = 'light' | 'gray';

export const bgColorVariantClass: { [key in BgVariant]: string } = {
  light: 'bg-background-primary-container',
  gray: 'bg-background-primary-base',
};
export interface BlockWrapperProps {
  heading?: 'H2' | 'H1';
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
  background?: BgVariant;
}

export const BlockWrapper = ({
  heading = 'H2',
  title,
  description,
  className,
  background = 'light',
  children,
}: BlockWrapperProps) => {
  const HeaderComponent = Heading[heading];

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
          <HeaderComponent className="text-center lg:max-w-[816px]">
            {title}
          </HeaderComponent>
        )}
        {description && <Text className="text-center">{description}</Text>}
      </FluidContainer>
      {children}
    </Section>
  );
};

export default BlockWrapper;
