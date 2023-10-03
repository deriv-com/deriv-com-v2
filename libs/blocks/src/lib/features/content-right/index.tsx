import ContentLeft, { ContentLeftProps } from '../content-left';

const ContentRight = ({
  title,
  className,
  description,
  children,
  content,
}: Omit<ContentLeftProps, 'variant'>) => {
  return (
    <ContentLeft
      title={title}
      variant="content-right"
      description={description}
      content={content}
      className={className}
    >
      {children}
    </ContentLeft>
  );
};

export default ContentRight;
