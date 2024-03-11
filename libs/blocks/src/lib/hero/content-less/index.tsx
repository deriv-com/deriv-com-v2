import BlockWrapper from '../../block-wrapper';
import { HeroBlockProps } from '..';

const ContentLess = ({
  className,
  title,
  description,
  children,
}: HeroBlockProps) => {
  return (
    <BlockWrapper
      title={title}
      description={description}
      heading="H1"
      className={className}
      background="light"
    >
      {children}
    </BlockWrapper>
  );
};

export default ContentLess;
