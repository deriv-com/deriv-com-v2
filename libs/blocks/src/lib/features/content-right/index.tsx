import ContentLeft from '../content-left';
import { ContentLeftProps } from '../types';

const ContentRight = ({ ...rest }: Omit<ContentLeftProps, 'variant'>) => {
  return <ContentLeft variant="content-right" {...rest} />;
};

export default ContentRight;
