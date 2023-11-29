import { ImageNames, TPilotDataProps } from '@deriv-com/components';

export type themeVariant = 'dark' | 'light';

export interface SocialProofCustomThemeProps {
  color?: string;
  logo?: themeVariant;
  background?: string;
  divider?: themeVariant;
}

export interface SocialProofProps {
  theme?: SocialProofCustomThemeProps;
  content?: ({ ...props }: TPilotDataProps) => string[];
  className?: string;
  staticData?: TPilotDataProps | null;
}

export interface SocialProofThemeClassNames {
  background: string;
  color: string;
  caret: string;
  logo: ImageNames;
}

export const logoUrls: { [key: string]: ImageNames } = {
  light: 'home/trustpilot/trustpilot-logo.png',
  dark: 'home/trustpilot/trustpilot-logo-white.png',
};
