import clsx from 'clsx';
import ContentBottom, { ContentBottomProps } from '../content-bottom';

const ContentTop = ({ className, title, children }: ContentBottomProps) => {
  return (
    <ContentBottom
      title={title}
      className={clsx('flex-col-reverse', className)}
    >
      {children}
    </ContentBottom>
  );
};

export default ContentTop;
