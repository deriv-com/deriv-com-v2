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
      id="cta-container"
      {...rest}
    >
      <FluidContainer className="relative h-[496px] rounded-lg">
        <div className="absolute -z-10 h-full w-full overflow-hidden rounded-xl object-cover object-top">
          {image}
        </div>
        <div className="h-full w-full p-general-3xl rtl:mr-auto lg:mr-general-md lg:w-[608px]">
          {children}
        </div>
      </FluidContainer>
    </Section>
  );
};

export default FooterCTABlock;
