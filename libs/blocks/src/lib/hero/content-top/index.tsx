import ContentBottom, { ContentBottomProps } from '../content-bottom';

const ContentTop = ({ className, title, children }: ContentBottomProps) => {
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
