import { Heading, Text, qtMerge } from '@deriv/quill-design';
import { StatCardContent, StatCardVariant } from '../types';

export interface StatCardProps extends Omit<StatCardContent, 'id'> {
  className?: string;
  isOnlyNumbers?: boolean;
}

const colorVariants: { [key in StatCardVariant]: string } = {
  coral: 'bg-solid-coral-700',
  white: 'bg-solid-slate-50',
  dark: 'bg-solid-slate-1200',
};

const textColorVariants: { [key in StatCardVariant]: string } = {
  coral: 'text-solid-slate-50',
  white: 'text-solid-slate-1400',
  dark: 'text-solid-slate-50',
};

export const StatCard: React.FC<StatCardProps> = ({
  header,
  description,
  color = 'white',
  className,
  isOnlyNumbers,
}) => {
  return (
    <div
      className={qtMerge(
        colorVariants[color],
        'rounded-pill',
        'p-general-xl',
        'flex flex-col',
        !isOnlyNumbers && 'min-h-[160px] w-full lg:min-h-[340px]',
        isOnlyNumbers
          ? 'items-center justify-center gap-gap-lg'
          : 'items-start  justify-end',
        className,
      )}
    >
      <Heading.H3 className={textColorVariants[color]}>{header}</Heading.H3>
      {isOnlyNumbers ? (
        <Text
          size="lg"
          className={qtMerge(
            textColorVariants[color],
            'text-center text-opacity-black-600',
          )}
        >
          {description}
        </Text>
      ) : (
        <Heading.H4 className={textColorVariants[color]}>
          {description}
        </Heading.H4>
      )}
    </div>
  );
};

export default StatCard;
