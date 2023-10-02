import BaseCard from '../base';
import { CardContent } from '../types';

export const ContentBottomCard: React.FC<CardContent> = ({
  children,
  ...rest
}) => {
  return (
    <BaseCard contentPosition="bottom" {...rest}>
      {children}
    </BaseCard>
  );
};

export default ContentBottomCard;
