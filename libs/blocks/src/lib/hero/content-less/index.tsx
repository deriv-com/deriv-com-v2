import { HeroProps } from '..';
import ContentBottom from '../content-bottom';

const ContentLess = ({
  className = '',
  title,
  description,
  children,
}: HeroProps) => {
  return (
    <ContentBottom
      title={title}
      description={description}
      className={className}
    >
      {children}
    </ContentBottom>
  );
};

export default ContentLess;
