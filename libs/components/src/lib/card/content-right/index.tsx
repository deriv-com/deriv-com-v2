import BaseCard from '../base';
import { CardContent } from '../types';

export const ContentRightCard: React.FC<CardContent> = ({
  children,
  ...rest
}) => {
  return (
    <BaseCard contentPosition="end" {...rest}>
      {children}
    </BaseCard>
  );
};

export default ContentRightCard;
