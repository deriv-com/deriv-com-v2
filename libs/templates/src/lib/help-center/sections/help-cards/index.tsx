import { CardContent, CardsContainer } from '@deriv-com/components';
import { FluidContainer, Section } from '@deriv/quill-design';
import {
  IllustrativeChatIcon,
  IllustrativeCommunityIcon,
  StandaloneFileCircleInfoRegularIcon,
  StandaloneWhatsappIcon,
} from '@deriv/quill-icons';

const HelpCardSection = () => {
  const cards = [
    {
      header: 'Live Chat',
      description:
        'Chat with a Deriv representative for quick and convenient help.',
      size: 'sm',
      color: 'light',
      align: 'start',
      icon: <IllustrativeChatIcon fill="black" iconSize="md" />,
      link: {
        href: '#',
        content: 'Chat now',
      },
    },
    {
      header: 'Whatsapp',
      description:
        'Chat with a Deriv representative for personalized assistance.',
      size: 'sm',
      color: 'light',
      align: 'start',
      icon: <StandaloneWhatsappIcon fill="black" iconSize="md" />,
      link: {
        href: '#',
        content: 'Message now',
      },
    },
    {
      header: 'Ask community',
      description:
        'Chat with a Deriv representative for personalized assistance.',
      size: 'sm',
      color: 'light',
      align: 'start',
      icon: <IllustrativeCommunityIcon fill="black" iconSize="md" />,
      link: {
        href: '#',
        content: 'Explore now',
      },
    },
    {
      header: 'Complaints',
      description: "File a complaint with Deriv's customer support team.",
      size: 'sm',
      color: 'light',
      align: 'start',
      icon: <StandaloneFileCircleInfoRegularIcon fill="black" iconSize="md" />,
      link: {
        href: '#',
        content: 'Read now',
      },
    },
  ] as CardContent[];

  return (
    <Section className=" bg-solid-slate-75 py-general-4xl">
      <FluidContainer>
        <CardsContainer variant="ContentLeft" cards={cards} cols="four" />
      </FluidContainer>
    </Section>
  );
};

export default HelpCardSection;
