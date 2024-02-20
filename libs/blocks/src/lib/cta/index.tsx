import React from 'react';
import { Heading, Section, Text, qtMerge } from '@deriv/quill-design';

export type CTABlockProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  title: React.ReactNode | string;
  description?: React.ReactNode | string;
  className?: string;
  variant?: 'content-left' | 'content-right';
};
export const CTABlock = ({
  content,
  children,
  title,
  description,
  variant = 'content-left',
}: CTABlockProps) => {
  return (
    <Section className=" py-general-4xl">
      <div
        className={qtMerge(
          variant === 'content-left' ? 'lg:flex-row' : 'lg:flex-row-reverse ',
          ' relative isolate flex h-full min-h-[496px] justify-end gap-gap-lg  max-lg:flex-col md:justify-center lg:mx-auto  lg:max-w-[1232px] ',
        )}
      >
        {content && (
          <div className="-z-10 h-full w-full overflow-hidden object-cover object-top max-lg:absolute lg:relative ">
            {content}
          </div>
        )}
        <div
          className={qtMerge(
            variant === 'content-left'
              ? 'lg:ps-general-2xl '
              : 'lg:pe-general-2xl ',
            'flex w-full flex-col justify-center gap-gap-3xl px-general-lg pb-general-2xl md:justify-center lg:px-general-none lg:pb-general-none',
          )}
        >
          <div className="flex w-full flex-col gap-gap-lg sm:w-[50%] lg:w-full">
            {title && (
              <Heading.H2 className="max-lg:text-solid-slate-50 lg:text-typography-prominent">
                {title}
              </Heading.H2>
            )}
            {description && <Text>{description}</Text>}
          </div>
          {children && children}
        </div>
      </div>
    </Section>
  );
};

export default CTABlock;
