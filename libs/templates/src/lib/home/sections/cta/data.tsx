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
        <>
          <OptimizedImage
            className="block lg:hidden"
            imageName="home/hero/cta_responsive.png"
            width={712}
            height={800}
            alt="cta demo forex mobile"
          />
          <OptimizedImage
            className="hidden lg:block"
            imageName="home/hero/cta_desktop.png"
            width={712}
            height={800}
            alt="cta demo forex desktop"
          />
        </>
      }
    >
      <Button className="lg:mt-400" size="md">
        Get a demo forex account
      </Button>
    </Card.ContentRight>
  );
};
