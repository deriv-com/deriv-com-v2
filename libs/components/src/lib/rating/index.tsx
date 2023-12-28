import { qtMerge } from '@deriv/quill-design';
import { LabelPairedTrustpilotMdIcon } from '@deriv/quill-icons/LabelPaired';

export type RatingProps = {
  rate: number | undefined;
  size?: 'sm' | 'md';
  className?: string;
};

export interface TrustPilotDataProps {
  id?: string;
  country?: string;
  name?: {
    referring?: [string];
    identifying?: string;
  };
  score?: {
    stars: number;
    trustScore: number;
  };
  numberOfReviews?: {
    total: number;
    usedForTrustScoreCalculation: number;
    oneStar: number;
    twoStars: number;
    threeStars: number;
    fourStars: number;
    fiveStars: number;
  };
}

export interface TPilotDataProps {
  numberOfReviews: string;
  stars: number;
  trustScore: number;
}

interface StarBoxProps {
  percent: number;
  colorKey?: number;
  size?: 'sm' | 'md';
}

const StarBox = ({ percent, colorKey = 0, size = 'md' }: StarBoxProps) => {
  const rateWidths: { [key: number]: string } = {
    10: 'w-1/6',
    20: 'w-1/5',
    30: 'w-2/6',
    40: 'w-2/5',
    50: 'w-3/6',
    60: 'w-4/6',
    70: 'w-9/12',
    80: 'w-10/12',
    90: 'w-11/12',
    100: 'w-full',
  };

  const widthClassName = rateWidths[percent];

  const BoxSizeClassName = {
    sm: 'w-1200 h-1200',
    md: 'lg:w-[96px] lg:h-[96px] w-[48px] h-[48px]',
  };

  const StarClassName = {
    sm: 'p-200',
    md: 'lg:px-700 lg:py-800 px-500 py-400',
  };

  return (
    <div
      className={qtMerge(
        'relative flex h-fit',
        'bg-[#DCDCE5]',
        BoxSizeClassName[size],
      )}
    >
      <div
        className={qtMerge(
          'absolute left-50 top-50 h-full',
          // This is added like this due to tailwind limitation for dynamic custom values.
          colorKey === 1 && 'bg-[#ff3722]',
          colorKey === 2 && 'bg-[#ff8622]',
          colorKey === 3 && 'bg-[#ffce00]',
          colorKey === 4 && 'bg-[#73CF11]',
          colorKey === 5 && 'bg-[#00b67a]',
          widthClassName,
        )}
      />
      <div className="absolute left-50 top-50 flex h-full w-full items-center justify-center">
        <LabelPairedTrustpilotMdIcon
          width={100}
          height={100}
          className={StarClassName[size]}
          fill="#ffffff"
          fillOpacity={1}
        />
      </div>
    </div>
  );
};

export const Rating = ({
  rate = 0,
  size = 'md',
  className = '',
}: RatingProps) => {
  const starContainers = Array.from({ length: 5 }).map((_, index) => index * 1);
  const rateFloat = rate.toString();
  const rateParts = rateFloat.split('.');
  const wholeRate = parseInt(rateParts[0]);
  const decimalRate = parseInt(rateParts[1]);

  const getStarPercentage = (index: number) =>
    index + 1 <= wholeRate ? 100 : wholeRate === index ? decimalRate * 10 : 0;

  const colorKey = Math.ceil(rate);

  const gapClassName = {
    sm: 'gap-gap-xs',
    md: 'gap-gap-md',
  };

  return (
    <div className={qtMerge('flex h-fit w-fit', gapClassName[size], className)}>
      {starContainers.map((container, ci) => {
        return (
          <StarBox
            key={`star-${container}`}
            percent={getStarPercentage(ci)}
            colorKey={colorKey}
            size={size}
          />
        );
      })}
    </div>
  );
};

export default Rating;
