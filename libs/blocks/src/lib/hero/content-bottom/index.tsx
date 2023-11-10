import { FluidContainer, Heading, Section } from '@deriv/quill-design';
import clsx from 'clsx';

export interface ContentBottomProps {
  title: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

const ContentBottom = ({
  className = '',
  containerClassName = '',
  title,
  children,
}: ContentBottomProps) => {
  return (
    <Section className={clsx('py-general-4xl', className)}>
      <FluidContainer
        className={clsx(
          'flex flex-col gap-gap-3xl md:px-general-lg lg:px-general-none',
          containerClassName,
        )}
      >
        <Heading.H1 className="text-center">{title}</Heading.H1>
        {children}
      </FluidContainer>
    </Section>
  );
};

export default ContentBottom;
