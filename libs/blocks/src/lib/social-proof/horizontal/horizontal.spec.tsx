import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialProofHorizontal from '.';
import { OptimizedImage } from '@deriv-com/components';

describe('SocialProofHorizontal', () => {
  it('render social proof horizontal block correctly', () => {
    render(
      <SocialProofHorizontal
        content={({ numberOfReviews, trustScore }) => [
          'Our customers say',
          'Excellent',
          `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
        ]}
        data={{
          trustScore: 4.5,
          numberOfReviews: '45454',
          stars: 4.4,
        }}
        theme={{
          color: '!text-[#ffffff]',
          background: 'bg-solid-slate-700',
        }}
        logo={
          <OptimizedImage
            imageName="home/trustpilot/trustpilot-logo.png"
            alt="trustpilot"
            width={97}
            height={24}
          />
        }
      />,
    );

    expect(screen.getByText('Our customers say')).toBeInTheDocument();

    expect(document.querySelector('.bg-solid-slate-700')).toBeInTheDocument();

    expect(screen.getByAltText('trustpilot')).toBeInTheDocument();
  });
});
