import clsx from 'clsx';
import { FeaturesProps } from '..';
import { FluidContainer, Heading, Text } from '@deriv/quill-design';

const CardContent = ({
  title,
  description,
  children,
  cta,
  className,
}: FeaturesProps) => {
  return (
    <FluidContainer
      className={clsx(
        'flex flex-col gap-1600 lg:gap-2400',
        'bg-background-primary-container',
        'max-xl:px-1200 max-md:px-800',
        className,
      )}
    >
      <div className="flex flex-col items-center gap-800 xl:gap-1200">
        <Heading.H2>{title}</Heading.H2>
        <Text size="xl" className="text-center">
          {description}
        </Text>
      </div>
      {children}
      {cta}
    </FluidContainer>
  );
};

export default CardContent;
