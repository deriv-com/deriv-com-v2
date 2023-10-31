import { SocialIcons } from '.';
import React from 'react';

export const SocialMediaSection = ({
  socialButtons,
}: {
  socialButtons: SocialIcons[];
}) => {
  return (
    <div className="flex gap-gap-lg max-lg:justify-center">
      {socialButtons.map((item) => (
        <React.Fragment key={item.href}>{item.icon}</React.Fragment>
      ))}
    </div>
  );
};
