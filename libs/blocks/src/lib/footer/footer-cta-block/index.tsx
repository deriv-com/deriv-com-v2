import { FluidContainer, Section, qtJoin } from '@deriv/quill-design';
import { ReactNode } from 'react';

export interface FooterCTAProps {
  className?: string;
  padding?: boolean;
  image: ReactNode;
  children?: ReactNode;
}

const FooterCTABlock = ({
  className,
  padding = false,
  image,
  children,
}: FooterCTAProps) => {
  return (
    <Section>
      <FluidContainer
        className={qtJoin(
          'bg-cover',
          padding ? 'py-general-4xl' : 'py-general-xl',
          className,
        )}
        id="cta-container"
      >
        <div className="relative isolate flex min-h-[496px] flex-col justify-end rounded-lg bg-cover lg:flex-row lg:justify-start">
          <div className="absolute h-full w-full overflow-hidden rounded-xl object-cover object-top">
            {image}
          </div>
          <div className="bottom-50 z-10 w-full p-general-3xl lg:mr-general-md lg:w-[608px]">
            {children}
          </div>
        </div>
      </FluidContainer>
    </Section>
  );
};

export default FooterCTABlock;
