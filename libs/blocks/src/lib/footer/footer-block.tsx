import { FluidContainer, Section, Text } from '@deriv/quill-design';
import { BrandDerivWordmarkSlateIcon } from '@deriv/quill-icons';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { SocialMediaSection } from './footer.social';

export interface SocialIcons {
  icon: ReactNode;
  href: string;
}

export interface FooterProps {
  className?: string;
  children: ReactNode;
  socialButtons?: SocialIcons[];
  descriptionContent: () => ReactNode;
  warningText?: string;
}

export const FooterBlock = ({
  className,
  children,
  socialButtons,
  descriptionContent: DescriptionContent,
  warningText,
}: FooterProps) => {
  return (
    <Section
      className={clsx(
        'py-general-2xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col gap-gap-3xl">
        <div className="flex flex-col py-general-xs max-lg:gap-gap-xl lg:flex-row">
          <div className="flex flex-1 max-lg:justify-center">
            <BrandDerivWordmarkSlateIcon height="24px" width="72.33px" />
          </div>
          {socialButtons && (
            <SocialMediaSection socialButtons={socialButtons} />
          )}
        </div>
        <div className="hidden lg:block">{children}</div>
        <div className="flex flex-col gap-gap-lg">
          <DescriptionContent />
          {warningText && (
            <div className="rounded-lg bg-solid-slate-75 p-general-md">
              <Text size="sm" className="text-opacity-black-400">
                {warningText}
              </Text>
            </div>
          )}
        </div>
      </FluidContainer>
    </Section>
  );
};

export default FooterBlock;
