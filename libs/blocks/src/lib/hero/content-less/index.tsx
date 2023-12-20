import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtJoin,
} from '@deriv/quill-design';
import clsx from 'clsx';

export interface ContentLessProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

const ContentLess = ({
  className,
  title,
  description,
  children,
}: ContentLessProps) => {
  return (
    <Section
      className={clsx('py-general-4xl', className)}
      data-testid="content-less-section"
    >
      <FluidContainer className="flex flex-col">
        <Heading.H1
          className={qtJoin(!description && 'pb-general-2xl', 'text-center')}
        >
          {title}
        </Heading.H1>
        {description && (
          <Text
            size="xl"
            className="pb-general-2xl pt-general-md text-center text-typography-default"
          >
            {description}
          </Text>
        )}

        {children}
      </FluidContainer>
    </Section>
  );
};

export default ContentLess;
