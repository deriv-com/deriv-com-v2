import { FluidContainer, Heading, qtMerge, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';

type bgVariant = 'light' | 'gray';

const bgColorVariantClass: { [key in bgVariant]: string } = {
  light: 'bg-background-primary-container',
  gray: 'bg-background-primary-base',
};
export interface ContentTextProps {
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
  color: bgVariant;
}

export const BlockWrapper = ({
  title,
  description,
  className,
  color,
  children,
}: ContentTextProps) => {
  return (
    <FluidContainer
      className={qtMerge(
        'py-general-4xl',
        bgColorVariantClass[color],
        className,
      )}
    >
      <div className="flex flex-col items-center gap-gap-lg">
        {title && <Heading.H2>{title}</Heading.H2>}
        {description && <Text>{description}</Text>}
      </div>
      {children}
    </FluidContainer>
  );
};

export default BlockWrapper;
