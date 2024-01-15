import Content from '../content';
import BlockWrapper from '../../block-wrapper';

export interface ContentLessProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

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
