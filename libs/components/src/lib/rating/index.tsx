import { qtMerge } from '@deriv/quill-design';
import OptimizedImage from '../optimized-image';

export type RatingProps = {
  rate: string;
};

const StarBox = ({ percent }: { percent: number }) => (
  <div className="relative flex h-1200 w-1200 bg-opacity-black-100">
    <div
      className={qtMerge(
        'absolute left-50 top-50 h-full bg-[#219653]',
        // `w-[${percent}%]`,
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

export const Rating = ({ rate }: RatingProps) => {
  // const  isNaN(parseInt("test")) ? 0 : parseInt("test")
  const starContainers = Array.from({ length: 5 }).map((_, index) => index * 1);

  return (
    <div className="flex w-fit gap-300 bg-background-secondary-container">
      {starContainers.map((container) => {
        return <StarBox key={`star-${container}`} />;
      })}
    </div>
  );
};

export default Rating;
