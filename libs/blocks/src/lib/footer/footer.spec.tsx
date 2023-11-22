import { render } from '@testing-library/react';
import Footer, { FooterItems } from '.';
import { StandaloneFacebookIcon } from '@deriv/quill-icons';

export const data: FooterItems[] = [
  {
    id: 0,
    layers: [
      {
        id: 0,
        header: 'ABOUT US',
        type: 'link',
        items: [
          {
            id: 0,
            href: '/who-we-are',
            text: 'Who we are',
          },
          {
            id: 1,
            href: '/why-choose-us',
            text: 'Why choose us',
          },
          { id: 2, href: '/contact-us', text: 'Contact us' },
          { id: 3, href: '/principles', text: 'Principles' },
        ],
      },
    ],
  },
];
describe('Footer', () => {
  const social = [
    {
      icon: <StandaloneFacebookIcon iconSize="md" id="social-icon" />,
      href: '/',
    },
  ];

  it('should render successfully', () => {
    render(
      <Footer.FooterBlock
        descriptionContent={() => (
          <p id="description-content">Description content here</p>
        )}
        socialButtons={social}
        warningText="Risk warning description goes here. A risk warning description is a crucial component of various financial, investment, or business documents, including prospectuses, investment brochures, loan agreements, and other legal or financial disclosures."
      >
        <img
          className="flex w-full flex-1"
          src="https://placehold.co/712x100"
          alt="Placeholder"
          id="footer-block-children"
        />
      </Footer.FooterBlock>,
    );

    //renders social buttons correctly
    expect(document.getElementById('social-icon')).toBeTruthy();

    //renders description content correctly
    expect(document.getElementById('description-content')).toBeTruthy();

    //renders with warning text correctly
    expect(document.getElementById('footer-warning-text')).toBeTruthy();

    //renders with children correctly
    expect(document.getElementById('footer-block-children')).toBeTruthy();
  });

  it('renders without social icons and warning text', () => {
    render(
      <Footer.FooterBlock
        descriptionContent={() => (
          <p id="description-content">Description content here</p>
        )}
      >
        <img
          className="flex w-full flex-1"
          src="https://placehold.co/712x100"
          alt="Placeholder"
          id="footer-block-children"
        />
      </Footer.FooterBlock>,
    );

    //renders social buttons correctly
    expect(document.getElementById('social-icon')).toBeNull();

    //renders description content correctly
    expect(document.getElementById('description-content')).toBeTruthy();

    //renders with warning text correctly
    expect(document.getElementById('footer-warning-text')).toBeNull();

    //renders with children correctly
    expect(document.getElementById('footer-block-children')).toBeTruthy();
  });
});
