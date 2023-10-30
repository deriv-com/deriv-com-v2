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
  md: 'gap-gap-xl p-general-2xl',
  lg: 'gap-gap-xl p-general-3xl',
};

const sizeVariantTextGap = {
  sm: 'gap-gap-md',
  md: 'gap-gap-lg',
  lg: 'gap-gap-xl',
};

const textSizeVariant: { [key: string]: TextSize } = {
  sm: 'md',
  md: 'lg',
  lg: 'lg',
};

const linkTextSizeVariant = {
  sm: 'text-body-md',
  md: 'text-body-md',
  lg: 'text-body-lg',
};

export const BaseCard: React.FC<BaseCardProps> = ({
  header,
  description,
  children,
  content,
  icon,
  link,
  className,
  contentPosition,
  align,
  color,
  size,
  contentClassName,
  nonContentClassName,
}) => {
  const HeadingComponent = sizeVariantComponents[size];

  return (
    <div
      className={clsx(
        'flex overflow-hidden rounded-xl',
        contentVariantClass[contentPosition],
        bgColorVariantClass[color],
        className,
      )}
    >
      <div
        className={qtMerge(
          'flex max-h-max  basis-1/2 flex-col justify-center md:flex-1',
          align === 'start'
            ? 'items-start md:items-start'
            : 'items-center md:items-center',
          sizeVariantContainerGap[size],
          nonContentClassName,
        )}
      >
        {icon && icon}
        {(description || header) && (
          <div
            className={qtMerge(
              'flex flex-1 flex-col',
              textColorVariantClass[color],
              sizeVariantTextGap[size],
            )}
          >
            {header && <HeadingComponent>{header}</HeadingComponent>}
            {description && (
              <Text size={textSizeVariant[size]}>{description}</Text>
            )}
          </div>
        )}
        {link && (
          <CustomLink
            href={link.href}
            className={clsx(
              'flex items-center justify-center text-typography-link',
              linkTextSizeVariant[size],
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
