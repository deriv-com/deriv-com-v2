import BaseCard from '../base';
import { CardContent } from '../types';

export const ContentLeftCard: React.FC<Omit<CardContent, 'id'>> = ({
  children,
  ...rest
}) => {
  return (
    <BaseCard contentPosition="start" {...rest}>
      {children}
    </BaseCard>
  );
};

export default ContentLeftCard;
