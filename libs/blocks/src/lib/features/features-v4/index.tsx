import {
  FluidContainer,
  Heading,
  qtJoin,
  qtMerge,
  Section,
  Text,
} from '@deriv/quill-design';
import { ReactNode } from 'react';
import { bgColorVariantClass, BlockWrapperProps } from '../../block-wrapper';

export interface FeaturesV4Props extends BlockWrapperProps {
  content: ReactNode;
  variant?: 'content-left' | 'content-right';
  contentTop?: boolean;
}

export const FeaturesV4 = ({
  title,
  description,
  className,
  background = 'light',
  content,
  children,
  variant = 'content-right',
  contentTop = false,
}: FeaturesV4Props) => {
  return (
    <Section
      className={qtMerge(
        'py-general-4xl',
        bgColorVariantClass[background],
        className,
      )}
    >
      <FluidContainer
        className={qtJoin(
          'flex flex-col max-w-[1024px] items-center gap-gap-3xl lg:gap-gap-lg justify-center',
          variant === 'content-left' ? 'lg:flex-row-reverse' : 'lg:flex-row',
          contentTop && 'flex-col-reverse',
        )}
      >
        <div className="flex">{content}</div>
        <div
          className={qtJoin(
            'flex flex-1 basis-full flex-col w-full',
            variant === 'content-left'
              ? 'lg:pr-general-2xl'
              : 'lg:pl-general-2xl',
          )}
        >
          {title && <Heading.H2>{title}</Heading.H2>}
          {description && <Text className="pt-general-md">{description}</Text>}
          <div className="pt-general-2xl">{children}</div>
        </div>
      </FluidContainer>
    </Section>
  );
};

export default FeaturesV4;
