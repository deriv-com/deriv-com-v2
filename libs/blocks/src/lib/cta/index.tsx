import React from 'react';
import { Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';

type viewPortVariant = 'sm' | 'md' | 'lg';

const Breakpoints: { [key in viewPortVariant]: string } = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'min-w-[834px]',
};

export type CTABlockProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  title: React.ReactNode | string;
  description?: React.ReactNode | string;
  className?: string;
  variant?: 'content-left' | 'content-right';
  size?: viewPortVariant;
  breakpoints?: typeof Breakpoints;
};
const CTABlock = ({
  content,
  children,
  title,
  description,
  breakpoints = Breakpoints,
  size = 'md',
  variant = 'content-left',
}: CTABlockProps) => {
  return (
    <Section className="max-h-[624px] bg-solid-red-300 py-general-4xl">
      <div
        className={clsx(
          ' relative isolate flex flex-col justify-center gap-gap-lg  lg:mx-auto lg:max-w-[1232px]',
          variant === 'content-left' ? 'lg:flex-row-reverse' : 'lg:flex-row ',
        )}
      >
        <div
          className={clsx(
            'flex flex-col justify-center gap-gap-3xl px-general-lg lg:px-general-none',
            variant === 'content-left'
              ? 'lg:ps-general-2xl '
              : 'lg:pe-general-2xl ',
          )}
        >
          <div
            className={clsx(
              'flex flex-col gap-gap-lg',
              size === 'md' && 'w-[50%]',
            )}
          >
            {title && <Heading.H2>{title}</Heading.H2>}
            {description && <Text>{description}</Text>}
          </div>
          {children && children}
        </div>

        {content && size === 'lg' ? (
          <div>{content}</div>
        ) : content && size === 'md' ? (
          <div className="absolute -z-10 h-full w-full overflow-hidden object-cover object-top ">
            {content}
          </div>
        ) : (
          <div className="absolute -z-10 h-full w-full overflow-hidden object-cover object-top ">
            {content}
          </div>
        )}
      </div>
    </Section>
  );
};

export default CTABlock;
