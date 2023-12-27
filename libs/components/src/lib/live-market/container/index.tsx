import { ReactNode } from 'react';
import CustomLink from '../../link';
import { Text } from '@deriv/quill-design';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { BlockWrapper } from '@deriv-com/blocks';
export interface ContainerProps {
  header?: ReactNode;
  description?: ReactNode;
  className?: string;
  disclaimer?: ReactNode;
  link?: {
    href: string;
    content: ReactNode;
  };
  children: ReactNode;
}

export const Container = ({
  header,
  description,
  disclaimer,
  link,
  children,
}: ContainerProps) => {
  return (
    <BlockWrapper title={header} background={'gray'}>
      {children}
      {description && <Text className="text-center">{description}</Text>}
      {link && (
        <CustomLink
          size="md"
          href={link.href}
          hasIcon
          className="py-general-2xl"
        >
          {link.content}
        </CustomLink>
      )}
      {disclaimer && (
        <div className="mx-auto max-w-[816px] max-sm:px-general-md">
          <Text size="sm" className="text-center text-typography-subtle">
            {disclaimer}
          </Text>
        </div>
      )}
    </BlockWrapper>
  );
};

export default Container;
