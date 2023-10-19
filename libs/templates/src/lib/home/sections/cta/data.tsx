import { Card, OptimizedImage } from '@deriv-com/components';
import { Button } from '@deriv/quill-design';

export const CTABlockContent = () => {
  return (
    <Card.ContentRight
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
      <Button className="lg:mt-400" size="md">
        Get a demo forex account
      </Button>
    </Card.ContentRight>
  );
};
