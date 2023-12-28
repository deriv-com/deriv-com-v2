import { FluidContainer, Section } from '@deriv/quill-design';
import { clsx } from 'clsx';
import Content from '../content';
import BlockWrapper from '../../block-wrapper';

export type ContentLessProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

const ContentLess = ({
  className,
  title,
  description,
  children,
}: ContentLessProps) => {
  return (
    <BlockWrapper className={className} background="light">
      <Content title={title} description={description} center={true}>
        {children}
      </Content>
    </BlockWrapper>
  );
};

export default ContentLess;
