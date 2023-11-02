import { Card, OptimizedImage } from '@deriv-com/components';
import { Button, qtMerge } from '@deriv/quill-design';

export const CTABlockContent = () => {
  return (
    <Card.ContentRight
      align="start"
      size="lg"
      header="Join over 2.5 million online traders"
      color="gray"
      content={
        <OptimizedImage
          imageName="home/hero/cta_image.png"
          alt="home hero"
          width={712}
          height={800}
        />
      }
    >
      <Button className={qtMerge('lg:mt-200')} size="md">
        Get a demo forex account
      </Button>
    </Card.ContentRight>
  );
};
