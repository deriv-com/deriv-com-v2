import clsx from 'clsx';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';
import { CardSlider, CardSliderProps } from '@deriv-com/components';

export interface ContentSliderProps {
  title?: string;
  description?: string;
  cta?: ReactNode;
  className?: string;
  cardSliderProps?: CardSliderProps;
}

const ContentSlider = ({
  title,
  description,
  cta,
  className,
  cardSliderProps,
}: ContentSliderProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center gap-gap-2xl">
        <div className="flex flex-col items-center justify-center gap-gap-xl">
          <Heading.H2 className="text-center">{title}</Heading.H2>
          {description && (
            <Text size="xl" className="text-center">
              {description}
            </Text>
          )}
        </div>
        <CardSlider {...cardSliderProps} />
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default ContentSlider;
