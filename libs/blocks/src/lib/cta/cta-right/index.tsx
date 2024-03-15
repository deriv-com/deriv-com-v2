import CTALeft, { CTABlockProps } from '../cta-left';

export const CTARight = ({
  variant = 'content-right',
  ...rest
}: CTABlockProps) => {
  return <CTALeft variant={variant} {...rest} />;
};

export default CTARight;
