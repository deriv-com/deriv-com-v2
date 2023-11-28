import { Heading, qtMerge } from '@deriv/quill-design';
import { StatCardContent, StatCardVariant } from '../types';

export interface StatCardProps extends StatCardContent {
  className?: string;
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
}) => {
  return (
    <div
      className={qtMerge(
        colorVariants[color],
        'rounded-xl',
        'p-general-2xl',
        'flex flex-col',
        'min-h-[160px] w-full lg:min-h-[340px]',
        'items-start  justify-end',
        className,
      )}
    >
      <Heading.H3 className={textColorVariants[color]}>{header}</Heading.H3>
      <Heading.H3 className={textColorVariants[color]}>
        {description}
      </Heading.H3>
    </div>
  );
};

export default StatCard;
