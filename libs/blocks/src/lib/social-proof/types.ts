import { ImageNames } from '@deriv-com/components';

export type logoVariant = 'dark' | 'light';

export interface SocialProofCustomThemeProps {
  color?: string;
  logo?: logoVariant;
  background?: string;
}

export interface SocialProofProps {
  theme?: SocialProofCustomThemeProps;
  className?: string;
}

export const logoUrls: { [key: string]: ImageNames } = {
  light: 'home/trustpilot/trustpilot-logo.png',
  dark: 'home/trustpilot/trustpilot-logo-white.png',
};
