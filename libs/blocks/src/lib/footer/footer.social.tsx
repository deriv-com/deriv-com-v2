import { CustomLink } from '@deriv-com/components';
import { SocialIcons } from './footer-block';

export const SocialMediaSection = ({
  socialButtons,
}: {
  socialButtons: SocialIcons[];
}) => {
  return (
    <div className="flex gap-gap-lg max-lg:justify-center">
      {socialButtons.map((item) => (
        <CustomLink href={item.href} target="_blank" key={item.href}>
          {item.icon}
        </CustomLink>
      ))}
    </div>
  );
};
