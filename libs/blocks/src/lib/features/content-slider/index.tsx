import clsx from 'clsx';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';
import { CardSlider, CardSliderProps } from '@deriv-com/components';

export interface ContentSliderProps extends CardSliderProps {
  title?: string;
  description?: string;
  cta?: ReactNode;
  className?: string;
}

const ContentSlider = ({
  title,
  description,
  cta,
  className,
  ...rest
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
          <Heading.H2>{title}</Heading.H2>
          <Text size="xl">{description}</Text>
        </div>
        <CardSlider {...rest} />
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default ContentSlider;
