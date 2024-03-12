import BlockWrapper from '../../block-wrapper';
import { HeroBlockProps } from '..';

const ContentLess = ({
  className,
  title,
  description,
  children,
  background,
}: HeroBlockProps) => {
  return (
    <BlockWrapper
      title={title}
      description={description}
      heading="H1"
      className={className}
      background={background}
    >
      {children}
    </BlockWrapper>
  );
};

export default ContentLess;
