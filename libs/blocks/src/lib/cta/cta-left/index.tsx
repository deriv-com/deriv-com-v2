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
export const CTALeft = ({
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
          <>
            <div className="absolute inset-50 z-10 bg-cta-gradient lg:bg-none"></div>
            <div className="absolute -z-10 h-full w-full  overflow-hidden object-cover object-top lg:relative ">
              {content}
            </div>
          </>
        )}
        <div
          className={qtMerge(
            variant === 'content-left'
              ? 'lg:ps-general-2xl '
              : 'lg:pe-general-2xl ',
            'flex w-full flex-col justify-center gap-gap-3xl px-general-lg pb-general-2xl md:justify-center lg:px-general-none lg:pb-general-none',
          )}
        >
          <div className="flex w-full flex-col gap-gap-lg">
            {title && (
              <>
                <Heading.H2 className="hidden lg:block">{title}</Heading.H2>
                <Heading.H2 className="z-20 block w-full text-solid-slate-50 sm:w-[350px] lg:hidden">
                  {title}
                </Heading.H2>
              </>
            )}

            {description && <Text>{description}</Text>}
          </div>
          {children && children}
        </div>
      </div>
    </Section>
  );
};

export default CTALeft;
