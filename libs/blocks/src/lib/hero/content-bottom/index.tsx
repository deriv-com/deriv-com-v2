import { Heading, qtMerge } from '@deriv/quill-design';
import BlockWrapper from '../../block-wrapper';
import { HeroBlockProps } from '..';

const ContentBottom = ({
  className = '',
  containerClassName = '',
  title,
  children,
}: HeroBlockProps) => {
  return (
    <BlockWrapper background="light" className={className}>
      <div className={qtMerge('flex flex-col gap-gap-3xl', containerClassName)}>
        <Heading.H1 className="text-center">{title}</Heading.H1>
        {children}
      </div>
    </BlockWrapper>
  );
};

export default ContentBottom;
