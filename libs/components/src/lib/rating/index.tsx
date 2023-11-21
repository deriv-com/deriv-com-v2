import { qtMerge } from '@deriv/quill-design';
import OptimizedImage from '../optimized-image';

export type RatingProps = {
  rate: number | undefined;
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

type StarBoxProps = {
  percent: number;
  colorKey?: number;
};

const StarBox = ({ percent, colorKey = 0 }: StarBoxProps) => {
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

  return (
    <div className="relative flex h-1200 w-1200 bg-opacity-black-100">
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
        <OptimizedImage
          imageName="home/trustpilot/star.png"
          alt="star"
          width={16.8}
          height={16.8}
        />
      </div>
    </div>
  );
};

export const Rating = ({ rate = 0 }: RatingProps) => {
  const starContainers = Array.from({ length: 5 }).map((_, index) => index * 1);
  const rateFloat = rate.toString();
  const rateParts = rateFloat.split('.');
  const wholeRate = parseInt(rateParts[0]);
  const decimalRate = parseInt(rateParts[1]);

  const getStarPercentage = (index: number) =>
    index + 1 <= wholeRate ? 100 : wholeRate === index ? decimalRate * 10 : 0;

  const colorKey = Math.ceil(rate);

  return (
    <div className="flex w-fit gap-300 bg-background-secondary-container">
      {starContainers.map((container, ci) => {
        return (
          <StarBox
            key={`star-${container}`}
            percent={getStarPercentage(ci)}
            colorKey={colorKey}
          />
        );
      })}
    </div>
  );
};

export default Rating;
