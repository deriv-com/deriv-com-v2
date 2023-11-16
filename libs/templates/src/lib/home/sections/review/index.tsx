import { FluidContainer, Section, qtMerge } from '@deriv/quill-design';
import { useEffect, useRef } from 'react';
import Script from 'next/script';

const ReviewSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)?.Trustpilot?.loadFromElement(ref.current, true);
  }, []);

  return (
    <Section
      className={qtMerge('py-general-4xl', 'bg-background-primary-container')}
    >
      <FluidContainer className="flex flex-col items-center rounded-xl max-sm:w-[90%] sm:py-general-lg">
        <div className={qtMerge('flex scale-150 max-sm:scale-100')}>
          <Script
            key="trustpilot-widget"
            type="text/javascript"
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
            async={true}
          />
          <div
            ref={ref}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="53aa8807dec7e10d38f59f32"
            data-businessunit-id="5ed4c8a9f74f310001f51bf7"
            data-style-height="115px"
            data-style-width="100%"
            data-style-padding="0"
            data-theme="light"
          >
            <a
              href="https://www.trustpilot.com/review/deriv.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </FluidContainer>
    </Section>
  );
};

export default ReviewSection;
