import { ReactNode } from 'react';
import CustomLink from '../../link';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons/Standalone';
import clsx from 'clsx';

export interface ContainerProps {
  header?: string;
  description?: ReactNode;
  className?: string;
  disclaimer?: string;
  link: {
    href: string;
    content: string;
  };
  children: ReactNode;
}

export const Container = ({
  header,
  description,
  className,
  disclaimer,
  link,
  children,
}: ContainerProps) => {
  return (
    <Section
      className={qtMerge(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center justify-center gap-gap-3xl">
        {header && <Heading.H2>{header}</Heading.H2>}
        {children}
        {description && <Text>{description}</Text>}
        {link && (
          <CustomLink
            size="md"
            href={link.href}
            className={clsx('flex items-center justify-center text-body-lg')}
          >
            {link.content}
            <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
          </CustomLink>
        )}
        {disclaimer && (
          <div className="max-w-[816px] max-sm:px-general-md">
            <Text size="sm" className="text-center text-typography-subtle">
              {disclaimer}
            </Text>
          </div>
        )}
      </FluidContainer>
    </Section>
  );
};

export default Container;
