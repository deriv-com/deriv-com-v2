import { TPilotDataProps } from '@deriv-com/components';
import { Section } from '@deriv/quill-design';
import { ComponentProps, ReactNode } from 'react';

export type themeVariant = 'dark' | 'light';

export interface SocialProofCustomThemeProps {
  color?: string;
  background?: string;
  divider?: themeVariant;
}

type SectionProps = Omit<ComponentProps<typeof Section>, 'content'>;

export type SocialProofProps = SectionProps & {
  theme?: SocialProofCustomThemeProps;
  content?: ({ ...props }: TPilotDataProps) => string[] | ReactNode[];
  className?: string;
  logo: ReactNode;
  data?: TPilotDataProps | null;
};

export interface SocialProofThemeClassNames {
  background: string;
  color: string;
  caret: string;
}
