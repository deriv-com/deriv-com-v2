import Content from '../content';
import BlockWrapper from '../../block-wrapper';
import { HeroBlockProps } from '../types';

const ContentLess = ({
  className,
  title,
  description,
  children,
}: HeroBlockProps) => {
  return (
    <BlockWrapper className={className} background="light">
      <Content title={title} description={description} center={true}>
        {children}
      </Content>
    </BlockWrapper>
  );
};

export default ContentLess;
