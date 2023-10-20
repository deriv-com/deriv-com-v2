import { Card, OptimizedImage } from '@deriv-com/components';
import { Button, qtMerge } from '@deriv/quill-design';

export const CTABlockContent = () => {
  const ScrollFunction = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <Card.ContentRight
      className={qtMerge('lg:gap-800')}
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
        onClick={ScrollFunction}
      >
        Get a demo forex account
      </Button>
    </Card.ContentRight>
  );
};
