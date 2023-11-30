import {
  SocialProofCustomThemeProps,
  SocialProofThemeClassNames,
} from './types';

export const getThemeClassNames = (
  theme: SocialProofCustomThemeProps | null | undefined,
): SocialProofThemeClassNames => {
  const bgClassName = theme?.background || 'bg-background-primary-container';
  const colorClassName = theme?.color || '';
  const caret = theme?.divider || 'light';

  const caretClassName = {
    light: 'bg-opacity-black-200',
    dark: 'bg-opacity-white-200',
  };

  return {
    background: bgClassName,
    color: colorClassName,
    caret: caretClassName[caret],
  };
};
