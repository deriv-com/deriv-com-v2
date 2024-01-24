import { CustomLink } from '@deriv-com/components';
import { SocialIcons } from './footer-block';

export const SocialMediaSection = ({
  socialButtons,
}: {
  socialButtons: SocialIcons[];
}) => {
  return (
    <div className="flex gap-gap-lg max-lg:justify-center">
      {socialButtons.map(({ href, target, icon, ...rest }) => (
        <CustomLink
          href={href}
          target="_blank"
          show_eu_modal={true}
          key={href}
          {...rest}
        >
          {icon}
        </CustomLink>
      ))}
    </div>
  );
};
