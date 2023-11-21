import { CustomLink } from '@deriv-com/components';
import { Text, qtMerge } from '@deriv/quill-design';

const Link = ({ href, children }: { href: string; children: string }) => {
  return (
    <CustomLink
      size="sm"
      className={qtMerge('inline font-bold underline')}
      href={href}
    >
      {children}
    </CustomLink>
  );
};

export const MainDescriptionContent = () => {
  return (
    <Text size="sm">
      Please read our <Link href="/">Terms and conditions</Link>,{' '}
      <Link href="/"> Risk disclosure</Link>, and{' '}
      <Link href="/">Secure and responsible trading</Link> to fully understand
      the risks involved before using our services. The information on this
      website does not constitute investment advice.
    </Text>
  );
};
