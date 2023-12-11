import { FluidContainer, Heading, Section } from '@deriv/quill-design';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ContentTextProps {
  title?: ReactNode;
  className?: string;
  children: ReactNode;
}

export const ContentText = ({
  title,
  className,
  children,
}: ContentTextProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="md:px-general-xl lg:max-w-[816px] lg:px-general-none">
        <div className="flex flex-col gap-gap-xl">
          {title && <Heading.H2>{title}</Heading.H2>}
          {children}
        </div>
      </FluidContainer>
    </Section>
  );
};

export default ContentText;
