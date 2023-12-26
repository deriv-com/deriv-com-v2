import { FluidContainer, Section } from '@deriv/quill-design';
import { clsx } from 'clsx';
import Content from '../content';

export type ContentLessProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

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
      <FluidContainer>
        <Content title={title} description={description} center={true}>
          {children}
        </Content>
      </FluidContainer>
    </Section>
  );
};

export default ContentLess;
