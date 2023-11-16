import { Card, OptimizedImage } from '@deriv-com/components';
import { Button } from '@deriv/quill-design';

export const CTABlockContent = () => {
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <Card.ContentRight
      className="lg:gap-gap-lg"
      align="start"
      size="lg"
      header="Join over 2.5 million online traders worldwide"
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
      <Button colorStyle="coral" size="lg" onClick={() => scrollTop()}>
        Get a demo forex account
      </Button>
    </Card.ContentRight>
  );
};
