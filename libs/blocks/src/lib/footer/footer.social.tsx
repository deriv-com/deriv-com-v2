import { Text } from '@deriv/quill-design';
import { SocialIcons } from '.';

export const SocialMediaSection = ({
  socialButtons,
}: {
  socialButtons: SocialIcons[];
}) => {
  return (
    <div className="flex gap-gap-lg max-lg:justify-center">
      {socialButtons.map((item) => (
        <Text className="px-[6px] text-icon-standalone-md" key={item.href}>
          {item.icon}
        </Text>
      ))}
    </div>
  );
};
