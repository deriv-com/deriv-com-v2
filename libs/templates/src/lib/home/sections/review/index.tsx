import styles from './review.module.css';
import { FluidContainer, qtMerge } from '@deriv/quill-design';
import { useEffect, useRef } from 'react';
import Script from 'next/script';

const ReviewSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)?.Trustpilot?.loadFromElement(ref.current, true);
  }, []);

  return (
    <FluidContainer>
      <div className="my-general-xl flex flex-col items-center gap-general-xl rounded-xl py-general-3xl">
        <div className={qtMerge('flex', styles['truspilot-zoom'])}>
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
      </div>
    </FluidContainer>
  );
};

export default ReviewSection;
