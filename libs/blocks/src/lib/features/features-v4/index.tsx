import {
  FluidContainer,
  Heading,
  qtJoin,
  qtMerge,
  Section,
  Text,
} from '@deriv/quill-design';
import { bgColorVariantClass } from '../../block-wrapper';
import { FeaturesV4Props } from '../types';

export const FeaturesV4 = ({
  title,
  description,
  className,
  background = 'light',
  content,
  children,
  variant = 'content-left',
  contentBottom = false,
}: FeaturesV4Props) => {
  return (
    <Section
      className={qtMerge(
        'py-general-4xl',
        bgColorVariantClass[background],
        className,
      )}
    >
      <FluidContainer
        className={qtJoin(
          'flex max-w-[1024px] items-center gap-gap-3xl lg:gap-gap-lg justify-center',
          variant === 'content-right' ? 'lg:flex-row-reverse' : 'lg:flex-row',
          contentBottom ? 'flex-col-reverse' : 'flex-col',
        )}
      >
        <div className="flex">{content}</div>
        <div
          className={qtJoin(
            'flex flex-1 basis-full flex-col w-full',
            variant === 'content-right'
              ? 'lg:pr-general-2xl'
              : 'lg:pl-general-2xl',
          )}
        >
          {title && <Heading.H2>{title}</Heading.H2>}
          {description && <Text className="pt-general-md">{description}</Text>}
          <div className="pt-general-2xl">{children}</div>
        </div>
      </FluidContainer>
    </Section>
  );
};

export default FeaturesV4;
