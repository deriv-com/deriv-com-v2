import {
  CustomLink,
  CustomLinkProps,
  OptimizedImage,
  OptimizedImageProps,
} from '@deriv-com/components';
import { Text, qtMerge, BodyTypographyProps } from '@deriv/quill-design';
import { PropsWithChildren, ReactNode } from 'react';

//todo: removed [slugify] from utils/../utils and added here. we need to update this because we are using this on multiple places

export const slugify = (input: string): string =>
  input
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .trim();

export const getHelpCentreLink = (page: string, subPage?: string) => {
  const subLink = subPage ? `#${slugify(subPage)}` : '';
  return `/help-centre/${slugify(page)}${subLink}`;
};

export const generateFaqs = (questions: string[], header: string) => {
  return (
    <div className="flex min-h-[212px] flex-1 flex-col items-start gap-general-lg">
      <div className="mb-auto flex flex-col gap-general-md">
        {questions.map((question) => (
          <CustomLink
            key={question}
            href={getHelpCentreLink(header, question)}
            className="justify-start"
            size="md"
          >
            {question}
          </CustomLink>
        ))}
      </div>
      <div className="flex">
        <CustomLink size="md" href={getHelpCentreLink(header)} hasIcon>
          View Questions
        </CustomLink>
      </div>
    </div>
  );
};

export const FaqBox = ({ children }: PropsWithChildren) => (
  <div className="mb-1200 flex flex-col gap-800">{children}</div>
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
      'flex flex-col gap-general-sm pl-general-md text-opacity-black-800',
    )}
  >
    {data.map((d, k) => (
      <li key={`${d}-${k}`}>{d}</li>
    ))}
  </ul>
);

export const FaqImage = ({ ...otherProps }: OptimizedImageProps) => (
  <OptimizedImage
    className="border-xs border-opacity-black-200 p-general-md"
    {...otherProps}
  />
);
