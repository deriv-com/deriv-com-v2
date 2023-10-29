import { FluidContainer, Heading, Section } from '@deriv/quill-design';
import clsx from 'clsx';

export interface ContentBottomProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const ContentBottom = ({
  className = '',
  title,
  children,
}: ContentBottomProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col gap-gap-3xl">
        <Heading.H1 className="text-center">{title}</Heading.H1>
        {children}
      </FluidContainer>
    </Section>
  );
};

export default ContentBottom;
