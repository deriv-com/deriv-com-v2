import { TPilotDataProps } from '@deriv-com/components';

export const data: Record<string, TPilotDataProps | null> = {
  BadScore: {
    trustScore: 0.6,
    numberOfReviews: '45454',
    stars: 0.6,
  },
  PoorScore: {
    trustScore: 1.6,
    numberOfReviews: '45454',
    stars: 1.6,
  },
  AverageScore: {
    trustScore: 2.5,
    numberOfReviews: '45454',
    stars: 2.5,
  },
  GreatScore: {
    trustScore: 3.8,
    numberOfReviews: '99990',
    stars: 3.8,
  },
  ExcellentScore: {
    trustScore: 4.8,
    numberOfReviews: '45454',
    stars: 4.8,
  },
};
