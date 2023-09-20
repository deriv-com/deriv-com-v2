import { HeroProps } from '..';
import clsx from 'clsx';
import ContentBottom from '../content-bottom';

const ContentTop = ({
  className = '',
  title,
  children,
}: Pick<HeroProps, 'className' | 'title' | 'children'>) => {
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
