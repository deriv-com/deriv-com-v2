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
    <Section
      className={clsx('py-general-4xl', className)}
      data-testid="content-bottom-section"
    >
      <FluidContainer
        className={clsx('flex flex-col gap-gap-3xl', containerClassName)}
        data-testid="content-bottom-container"
      >
        <Heading.H1 className="text-center">{title}</Heading.H1>
        {children}
      </FluidContainer>
    </Section>
  );
};

export default ContentBottom;
