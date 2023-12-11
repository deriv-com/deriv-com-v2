import clsx from 'clsx';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';
import {
  CardSlider,
  CardSliderProps,
  CardVariantType,
} from '@deriv-com/components';

export interface ContentSliderProps<T extends CardVariantType> {
  title?: ReactNode;
  description?: ReactNode;
  cta?: () => ReactNode;
  className?: string;
  cardSliderProps?: CardSliderProps<T>;
}

const ContentSlider = <T extends CardVariantType>({
  title,
  description,
  cta: CTA,
  className,
  cardSliderProps,
}: ContentSliderProps<T>) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center gap-gap-3xl">
        <div className="flex flex-col items-center justify-center gap-gap-lg">
          <Heading.H2 className="text-center">{title}</Heading.H2>
          {description && (
            <Text size="md" className="text-center">
              {description}
            </Text>
          )}
        </div>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <CardSlider {...cardSliderProps} />
        }
        {CTA && <CTA />}
      </FluidContainer>
    </Section>
  );
};

export default ContentSlider;
