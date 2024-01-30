import { HeroBlockProps } from '..';
import ContentBottom from '../content-bottom';

const ContentTop = ({ className, title, children }: HeroBlockProps) => {
  return (
    <ContentBottom
      title={title}
      className={className}
      containerClassName="flex-col-reverse"
    >
      {children}
    </ContentBottom>
  );
};

export default ContentTop;
