import BaseCard from '../base';
import { CardContent } from '../types';

export const ContentTopCard: React.FC<CardContent> = ({
  children,
  ...rest
}) => {
  return (
    <BaseCard contentPosition="top" {...rest}>
      {children}
    </BaseCard>
  );
};

export default ContentTopCard;
