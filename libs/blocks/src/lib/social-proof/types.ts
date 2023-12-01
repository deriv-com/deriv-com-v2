import { TPilotDataProps } from '@deriv-com/components';
import { ReactNode } from 'react';

export type themeVariant = 'dark' | 'light';

export interface SocialProofCustomThemeProps {
  color?: string;
  background?: string;
  divider?: themeVariant;
}

export interface SocialProofProps {
  theme?: SocialProofCustomThemeProps;
  content?: ({ ...props }: TPilotDataProps) => string[];
  className?: string;
  logo: ReactNode;
  staticData?: TPilotDataProps | null;
}

export interface SocialProofThemeClassNames {
  background: string;
  color: string;
  caret: string;
}
