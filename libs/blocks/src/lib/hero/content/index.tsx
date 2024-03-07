import { Heading, Text, qtJoin } from '@deriv/quill-design';
import { HeroBlockProps } from '..';

export interface ContentProps extends HeroBlockProps {
  center?: boolean;
}

const Content = ({
  description,
  title,
  center = false,
  children,
  className,
}: ContentProps) => {
  return (
    <div className={className}>
      {title && (
        <Heading.H1
          className={qtJoin(
            !description ? 'pb-general-2xl' : 'pb-general-md',
            center && 'text-center',
          )}
        >
          {title}
        </Heading.H1>
      )}
      {description && (
        <Text
          size="md"
          className={qtJoin(
            center && 'text-center',
            children && 'pb-general-2xl',
          )}
        >
          {description}
        </Text>
      )}
      {children}
    </div>
  );
};

export default Content;
