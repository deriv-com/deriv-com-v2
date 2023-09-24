import { FeaturesProps } from '..';
import ContentLeft from '../content-left';

const ContentRight = ({
  title,
  className,
  description,
  content,
  image_content,
  variant,
}: FeaturesProps) => {
  return (
    <ContentLeft
      title={title}
      variant="content-right"
      description={description}
      content={content}
      image_content={image_content}
      className={className}
    ></ContentLeft>
  );
};

export default ContentRight;
