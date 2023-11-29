import {
  SocialProofCustomThemeProps,
  SocialProofThemeClassNames,
  logoUrls,
  themeVariant,
} from './types';

export const getThemeClassNames = (
  theme: SocialProofCustomThemeProps | null | undefined,
): SocialProofThemeClassNames => {
  const bgClassName = theme?.background || 'bg-background-primary-container';
  const colorClassName = theme?.color || '';
  const logo: themeVariant = theme?.logo || 'light';
  const caret = theme?.divider || 'light';
  const logoImage = logoUrls[logo];

  const caretClassName = {
    light: 'bg-opacity-black-200',
    dark: 'bg-opacity-white-200',
  };

  return {
    background: bgClassName,
    color: colorClassName,
    caret: caretClassName[caret],
    logo: logoImage,
  };
};
