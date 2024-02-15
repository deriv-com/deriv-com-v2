import React from 'react';
import { Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';

export type CTABlockProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  title: React.ReactNode | string;
  description?: React.ReactNode | string;
  className?: string;
  variant?: 'content-left' | 'content-right';
};
const CTABlock = ({
  content,
  children,
  title,
  description,
  variant = 'content-left',
}: CTABlockProps) => {
  return (
    <Section className="py-general-4xl">
      <div
        className={clsx(
          ' relative isolate flex flex-col justify-center gap-gap-lg  lg:mx-auto lg:max-w-[1232px]',
          variant === 'content-left' ? 'lg:flex-row-reverse' : 'lg:flex-row  ',
        )}
      >
        <div
          className={clsx(
            'flex flex-col justify-center gap-gap-3xl px-general-lg lg:px-general-none ',
            variant === 'content-left'
              ? 'lg:ps-general-2xl '
              : 'lg:pe-general-2xl ',
          )}
        >
          <div
            className={clsx(
              'flex flex-col gap-gap-lg',
              'w-full',
              'sm:w-[50%]',
              'lg:w-full',
            )}
          >
            {title && <Heading.H2>{title}</Heading.H2>}
            {description && <Text>{description}</Text>}
          </div>
          {children && children}
        </div>
        {content && (
          <div
            className={clsx([
              'absolute -z-10  overflow-hidden object-cover object-top',
              'h-full w-full lg:relative',
            ])}
          >
            {content}
          </div>
        )}
      </div>
    </Section>
  );
};

export default CTABlock;
