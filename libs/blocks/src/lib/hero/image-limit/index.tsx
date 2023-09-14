import { HeroProps } from '..';
import ImageLimitless from '../image-limitless';

const ImageLimit = ({
  title,
  description,
  content,
  className,
  children,
}: HeroProps) => {
  return (
    <ImageLimitless
      title={title}
      title_type="h1"
      description={description}
      content={content}
      className={className}
    >
      {children && children}
    </ImageLimitless>
  );
};

export default ImageLimit;
