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
        <CustomLink
          data-cy={item['data-cy']}
          href={item.href}
          target="_blank"
          show_eu_modal={true}
          key={item.href}
        >
          {item.icon}
        </CustomLink>
      ))}
    </div>
  );
};
