import { Heading, Text, TextSize, qtMerge } from '@deriv/quill-design';
import CustomLink from '../../link';
import clsx from 'clsx';
import { CardContent } from '../types';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';

export interface BaseCardProps extends CardContent {
  contentPosition: 'bottom' | 'top' | 'start' | 'end';
}

const contentVariantClass = {
  bottom: 'flex-col',
  top: 'flex-col-reverse',
  start: 'flex-col lg:flex-row-reverse',
  end: 'flex-col lg:flex-row',
};

const bgColorVariantClass = {
  light: 'bg-background-primary-container',
  gray: 'bg-solid-slate-75',
};

const textColorVariantClass = {
  light: 'text-typography-prominent',
  gray: 'text-solid-slate-1400',
};

const sizeVariantComponents = {
  sm: Heading.H5,
  md: Heading.H4,
  lg: Heading.H2,
};

const sizeVariantContainerGap = {
  sm: 'gap-gap-lg p-general-xl',
  md: 'gap-gap-lg p-general-2xl',
  lg: 'gap-gap-xl p-general-2xl',
};

const textSizeVariant: { [key: string]: TextSize } = {
  sm: 'md',
  md: 'lg',
  lg: 'lg',
};

const linkTextSizeVariant = {
  sm: 'text-body-md',
  md: 'text-body-lg',
  lg: 'text-body-lg',
};

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  description,
  children,
  content,
  icon,
  link,
  className,
  contentPosition,
  alignVariant,
  colorVariant,
  sizeVariant,
  contentClassName,
  nonContentClassName,
}) => {
  const HeadingComponent = sizeVariantComponents[sizeVariant];

  return (
    <div
      className={clsx(
        'flex h-full overflow-hidden rounded-pill',
        contentVariantClass[contentPosition],
        bgColorVariantClass[colorVariant],
        className,
      )}
    >
      <div
        className={qtMerge(
          'flex max-h-max  basis-1/2 flex-col justify-center md:flex-1',
          alignVariant === 'start'
            ? 'items-start md:items-start'
            : 'items-center md:items-center',
          sizeVariantContainerGap[sizeVariant],
          nonContentClassName,
        )}
      >
        {icon && icon}
        {title && (
          <HeadingComponent
            className={clsx(textColorVariantClass[colorVariant])}
          >
            {title}
          </HeadingComponent>
        )}
        {description && (
          <Text
            size={textSizeVariant[sizeVariant]}
            className={clsx(textColorVariantClass[colorVariant], 'flex-1')}
          >
            {description}
          </Text>
        )}
        {link && (
          <CustomLink
            href={link.href}
            className={clsx(
              'flex items-center justify-center text-body-md text-typography-link',
              linkTextSizeVariant[sizeVariant],
            )}
          >
            {link.content}
            <StandaloneChevronRightRegularIcon fill="#FF444F" />
          </CustomLink>
        )}
        {children}
      </div>
      {content && (
        <div className={qtMerge('basis-1/2', contentClassName)}>{content}</div>
      )}
    </div>
  );
};

export default BaseCard;
