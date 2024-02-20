import FeaturesV4, { FeaturesV4Props } from '../features-v4';

export const FeaturesV5 = ({ variant, ...rest }: FeaturesV4Props) => {
  return <FeaturesV4 variant="content-left" {...rest} />;
};

export default FeaturesV5;
