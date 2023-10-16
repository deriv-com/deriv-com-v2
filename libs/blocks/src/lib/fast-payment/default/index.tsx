import { FluidContainer, Heading, Text } from '@deriv/quill-design';
import {
  CardsContainer,
  CardsContainerProps,
  CustomLink,
} from '@deriv-com/components';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';
import { LinkProps } from '@deriv-com/utils';

/* eslint-disable-next-line */
export interface FastPaymentProps {
  title: string;
  description?: string;
  link?: LinkProps;
  disclaimer?: string;
  content: Omit<CardsContainerProps<'ContentBottom'>, 'variant'>;
}

const FastPayment: React.FC<FastPaymentProps> = ({
  title,
  description,
  link,
  disclaimer,
  content: { cards = [], cols = 'three' },
}) => {
  return (
    <FluidContainer className="bg-background-primary-container py-general-3xl">
      <div className="flex flex-col items-center">
        <Heading.H2 className="mb-1200">{title}</Heading.H2>
        {description && (
          <Text size="md" className="mb-gap-md">
            {description}
          </Text>
        )}
        {link && (
          <CustomLink
            href={link.href}
            className="flex items-center justify-center text-typography-link"
          >
            {link.content}
            <StandaloneChevronRightRegularIcon fill="#FF444F" />
          </CustomLink>
        )}
        <div className="mt-general-xl">
          <CardsContainer cards={cards} variant={'ContentBottom'} cols={cols} />
        </div>
        {disclaimer && (
          <p className="text-100 text-opacity-black-400">{disclaimer}</p>
        )}
      </div>
    </FluidContainer>
  );
};

export default FastPayment;
