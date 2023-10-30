import { CustomLink, CustomLinkProps } from '@deriv-com/components';
import { slugify } from '@deriv-com/utils';
import { BodyTypographyProps, Text, qtMerge } from '@deriv/quill-design';
import { PropsWithChildren, ReactNode } from 'react';

export const getHelpCentreLink = (page: string, sub_page?: string) => {
  const sub_link = sub_page ? `#${slugify(sub_page)}` : '';
  return `/help-centre/${slugify(page)}${sub_link}`;
};

export const generateFaqs = (questions: string[], header: string) => {
  return (
    <div className="flex min-h-[212px] flex-col items-start">
      <div className="flex flex-col gap-general-md">
        {questions.map((question) => (
          <CustomLink
            key={question}
            href={getHelpCentreLink(header, question)}
            className="justify-start"
          >
            {question}
          </CustomLink>
        ))}
      </div>
      <div className="mt-auto flex">
        <CustomLink href={getHelpCentreLink(header)} hasIcon hasHoverColor>
          View Questions
        </CustomLink>
      </div>
    </div>
  );
};

export const FaqBox = ({
  variant = 'lg',
  children,
}: { variant?: 'sm' | 'md' | 'lg' } & PropsWithChildren) => (
  <div
    className={qtMerge(
      'flex flex-col',
      variant === 'sm' && 'gap-general-2xs',
      variant === 'md' && 'gap-general-xs',
      variant === 'lg' && 'gap-general-lg',
    )}
  >
    {children}
  </div>
);
export const FaqText = ({ children, ...otherProps }: BodyTypographyProps) => (
  <Text className="pr-general-2xl" {...otherProps} size="md">
    {children}
  </Text>
);
export const FaqLink = ({ children, href }: CustomLinkProps) => (
  <CustomLink className="m-200 inline w-fit" hasLinkColor size="md" href={href}>
    {children}
  </CustomLink>
);
export const FaqList = ({
  data,
  variant = 'bullet',
}: {
  data: ReactNode[];
  variant?: 'decimal' | 'bullet' | 'none';
}) => (
  <ul
    className={qtMerge(
      'list-outside',
      variant === 'bullet' && 'list-disc',
      variant === 'decimal' && 'list-decimal',
      variant === 'none' && 'list-none',
      'flex flex-col gap-general-xs pl-general-xl text-opacity-black-800',
    )}
  >
    {data.map((d, k) => (
      <li key={`${d}-${k}`}>{d}</li>
    ))}
  </ul>
);
