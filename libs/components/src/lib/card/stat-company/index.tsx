import { Heading, Text, qtMerge } from '@deriv/quill-design';
import { StatCardContent } from '../types';
import { cva } from 'class-variance-authority';

export interface StatCardProps extends Omit<StatCardContent, 'id'> {
  className?: string;
}

const colorVariants = cva(
  [
    'rounded-xl',
    'p-general-xl',
    'flex flex-col',
    'items-center justify-center',
    'basis-1/3 sm:basis-1/3 md:min-w-[180px] lg:flex-1',
  ],
  {
    variants: {
      color: {
        coral: 'bg-solid-coral-700',
        white: 'bg-solid-slate-50',
        dark: 'bg-solid-slate-1200',
      },
    },
    defaultVariants: {
      color: 'white',
    },
  },
);

const textColorVariants = cva('', {
  variants: {
    color: {
      coral: 'text-solid-slate-50',
      white: 'text-solid-slate-1400',
      dark: 'text-solid-slate-50',
    },
    type: {
      heading: '',
      text: 'pt-general-sm text-center',
    },
  },
  defaultVariants: {
    color: 'white',
    type: 'heading',
  },
});

export const StatCompanyCard: React.FC<StatCardProps> = ({
  header,
  description,
  color = 'white',
  className,
}) => {
  return (
    <div
      className={qtMerge(colorVariants({ color }), className)}
      data-testid="stat-card-container"
    >
      <Heading.H3 className={textColorVariants({ color })}>{header}</Heading.H3>
      <Text size="md" className={textColorVariants({ color, type: 'text' })}>
        {description}
      </Text>
    </div>
  );
};

export default StatCompanyCard;
