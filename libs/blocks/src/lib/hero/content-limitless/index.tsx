import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
export interface ContentLimitlessProps {
  title?: string;
  description?: string;
  content?: () => ReactNode;
  children?: ReactNode;
  className?: string;
}
const ContentLimitless: React.FC<ContentLimitlessProps> = ({
  title,
  description,
  content: Content,
  children,
  className,
}) => {
  return (
    <Section
      className={clsx(
        'relative mx-auto flex max-w-[2048px] flex-col items-center justify-center gap-gap-3xl pt-general-2xl lg:block lg:min-h-[680px] xl:min-h-screen',
        className,
      )}
    >
      <FluidContainer className="flex items-center lg:min-h-[680px] xl:min-h-[860px]">
        <div className="flex flex-col gap-gap-3xl lg:max-w-[580px]">
          {title && <Heading.Hero>{title}</Heading.Hero>}
          {description && <Text size="xl">{description}</Text>}
          {children}
        </div>
      </FluidContainer>
      {Content && (
        <>
          <div
            className={clsx(
              'relative w-full lg:hidden',
              styles['mobile_big_red'],
            )}
            data-testid="content-limitless__mobile-big-red"
          >
            <Content />
          </div>
          <div
            className={clsx(
              'absolute left-1/2 top-50 hidden h-full w-1/2 lg:block',
              styles['desktop_big_red'],
            )}
            data-testid="content-limitless__desktop-big-red"
          >
            <div className="absolute bottom-50 w-full">
              <Content />
            </div>
          </div>
        </>
      )}
    </Section>
  );
};

export default ContentLimitless;
