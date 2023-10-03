import { FastAndReliableContent } from './data';
import { Features } from '@deriv-com/blocks';
import { OptimizedImage } from '@deriv-com/components';

const FastAndReliableSection = () => {
  return (
    <Features.ContentLeft
      title="Fast and reliable"
      content={<FastAndReliableContent />}
      image_content={
        <>
          <OptimizedImage
            className="block lg:hidden"
            imageName="home/hero/hk_homepage_feature_2.png"
            width={712}
            height={800}
            alt="home hero"
          />
          <OptimizedImage
            className="hidden lg:block"
            imageName="home/hero/hk_homepage_feature.png"
            width={712}
            height={800}
            alt="home hero"
          />
        </>
      }
    />
  );
};

export default FastAndReliableSection;
