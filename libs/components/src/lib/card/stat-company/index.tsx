import { Heading, Text, qtMerge } from '@deriv/quill-design';
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

export const StatCompanyCard: React.FC<StatCardProps> = ({
  header,
  description,
  color = 'white',
  className,
}) => {
  return (
    <div
      className={qtMerge(
        colorVariants[color],
        'rounded-pill',
        'p-general-xl',
        'flex flex-col',
        'items-center justify-center gap-gap-md',
        'basis-1/3 sm:basis-1/3 md:min-w-[180px] lg:flex-1',
        className,
      )}
    >
      <Heading.H5 className={textColorVariants[color]}>{header}</Heading.H5>
      <Text
        size="md"
        className={qtMerge(textColorVariants[color], 'text-center')}
      >
        {description}
      </Text>
    </div>
  );
};

export default StatCompanyCard;
