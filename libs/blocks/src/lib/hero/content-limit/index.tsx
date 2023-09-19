import { HeroProps } from '..';
import ContentLimitless from '../content-limitless';

const ContentLimit = ({
  title,
  description,
  content,
  className,
  children,
}: HeroProps) => {
  return (
    <ContentLimitless
      title={title}
      title_type="h1"
      description={description}
      content={content}
      className={className}
    >
      {children && children}
    </ContentLimitless>
  );
};

export default ContentLimit;
