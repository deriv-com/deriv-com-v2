import FeaturesV4 from '../features-v4';
import { FeaturesV4Props } from '../types';

export const FeaturesV5 = ({
  variant = 'content-right',
  ...rest
}: FeaturesV4Props) => {
  return <FeaturesV4 variant={variant} {...rest} />;
};

export default FeaturesV5;
