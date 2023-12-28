import { FluidContainer, Heading, Section } from '@deriv/quill-design';
import clsx from 'clsx';
import BlockWrapper from '../../block-wrapper';

export interface ContentBottomProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const ContentBottom = ({
  className = '',
  title,
  children,
}: ContentBottomProps) => {
  return (
    <BlockWrapper background="light" className={className}>
      <Heading.H1 className="text-center pb-general-2xl">{title}</Heading.H1>
      {children}
    </BlockWrapper>
  );
};

export default ContentBottom;
