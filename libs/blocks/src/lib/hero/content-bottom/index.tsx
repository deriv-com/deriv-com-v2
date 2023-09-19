import { Heading } from '@deriv/quill-design';
import { HeroProps } from '..';
import { twclsx } from '@deriv-com/utils';

const ContentBottom = ({
  className = '',
  title,
  children,
}: Pick<HeroProps, 'className' | 'title' | 'children'>) => {
  return (
    <div
      className={twclsx(
        {
          md: 'py-10 px-6',
          lg: 'py-4000',
        },
        [
          'w-full flex flex-col py-10 px-4  bg-background-primary-container gap-10',
          className,
        ]
      )}
    >
      <Heading.H1 className="flex w-full justify-center lg:px-4000 text-center">
        {title}
      </Heading.H1>
      <div className="w-full flex flex-1 lg:px-4000">{children}</div>
    </div>
  );
};

export default ContentBottom;
