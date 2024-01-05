import { FluidContainer, Section, qtMerge } from '@deriv/quill-design';
import { ComponentProps, ReactNode } from 'react';

export type FooterCTAProps = ComponentProps<typeof Section> & {
  className?: string;
  padding?: boolean;
  image: ReactNode;
  children?: ReactNode;
};

const FooterCTABlock = ({
  className,
  padding = false,
  image,
  children,
  ...rest
}: FooterCTAProps) => {
  return (
    <Section
      className={qtMerge(
        padding ? 'py-general-4xl' : 'py-general-xl',
        className,
      )}
      {...rest}
    >
      <FluidContainer
        className="relative flex min-h-[496px] flex-col justify-end rounded-lg lg:flex-row lg:justify-start"
        id="cta-container"
      >
        <div className="absolute h-full w-full overflow-hidden rounded-xl object-cover object-top">
          {image}
        </div>
        <div className="z-10 w-full p-general-3xl lg:mr-general-md lg:w-[608px]">
          {children}
        </div>
      </FluidContainer>
    </Section>
  );
};

export default FooterCTABlock;
