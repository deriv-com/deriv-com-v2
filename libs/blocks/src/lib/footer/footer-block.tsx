import { FluidContainer, Section, Text } from '@deriv/quill-design';
import { BrandDerivWordmarkSlateIcon } from '@deriv/quill-icons/Logo';
import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';
import { SocialMediaSection } from './footer.social';

export interface SocialIcons {
  icon: ReactNode;
  href: string;
  'data-cy'?: string;
}

export interface FooterProps {
  className?: string;
  children: ReactNode;
  socialButtons?: SocialIcons[];
  descriptionContent?: () => ReactNode;
  banner?: () => ReactNode;
  warningText?: string | ReactElement;
  awards?: () => ReactNode;
}

export const FooterBlock = ({
  className,
  children,
  socialButtons,
  descriptionContent: DescriptionContent,
  banner: DerivGoBanner,
  warningText,
  awards: IIPAward,
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
        <div className="flex flex-col max-lg:gap-gap-xl lg:flex-row">
          <div className="flex flex-1 py-general-xs max-lg:justify-center">
            <BrandDerivWordmarkSlateIcon
              height="24"
              width="72.33"
              className="opacity-800"
            />
          </div>
          {socialButtons && (
            <SocialMediaSection socialButtons={socialButtons} />
          )}
        </div>
        <div className="hidden lg:block">{children}</div>
        {DerivGoBanner && (
          <div className="hidden max-lg:block ">
            <DerivGoBanner />
          </div>
        )}
        <div className="flex flex-col gap-gap-lg">
          {DescriptionContent && <DescriptionContent />}
          {warningText && (
            <div className="rounded-lg bg-background-primary-base p-general-md">
              <Text size="sm" className="text-typography-subtle">
                {warningText}
              </Text>
            </div>
          )}
        </div>
        {IIPAward && (
          <div className="hidden max-lg:block ">
            <IIPAward />
          </div>
        )}
      </FluidContainer>
    </Section>
  );
};

export default FooterBlock;
