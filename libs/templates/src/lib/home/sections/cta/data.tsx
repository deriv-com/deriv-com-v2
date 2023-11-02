import { Card, OptimizedImage } from '@deriv-com/components';
import { scrollToTop } from '@deriv-com/utils';
import { Button } from '@deriv/quill-design';

export const CTABlockContent = () => {
  return (
    <Card.ContentRight
      className="lg:gap-gap-lg"
      align="start"
      size="lg"
      header="Join over 2.5 million online traders"
      color="gray"
      content={
        <OptimizedImage
          className="block"
          imageName="home/hero/cta_image.png"
          width={1232}
          height={711}
          alt="cta demo forex mobile"
        />
      }
    >
      <Button
        colorStyle="black"
        className="lg:mt-400"
        size="lg"
        onClick={scrollToTop}
      >
        Get a demo forex account
      </Button>
    </Card.ContentRight>
  );
};
