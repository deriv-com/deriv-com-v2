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
  content: { cards = [], cols = 'three', dense },
}) => {
  return (
    <FluidContainer className="bg-background-primary-container py-general-4xl">
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col gap-general-2xl max-lg:gap-general-xl">
          <div className="flex flex-col gap-general-xl max-lg:gap-general-lg">
            <div className="flex flex-col items-center justify-center gap-general-lg text-center max-sm:gap-general-md">
              <Heading.H2>{title}</Heading.H2>
              {description && <Text size="xl">{description}</Text>}
            </div>
            {link && (
              <CustomLink
                href={link.href}
                className="flex items-center justify-center text-300 text-opacity-black-600"
              >
                {link.content}
                <StandaloneChevronRightRegularIcon fill="#000000b8" />
              </CustomLink>
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-general-lg">
            <div className="flex w-full justify-center">
              <CardsContainer
                cards={cards}
                variant="ContentBottom"
                cols={cols}
                dense={dense}
              />
            </div>
            {disclaimer && (
              <p className="text-100 text-opacity-black-400">{disclaimer}</p>
            )}
          </div>
        </div>
      </div>
    </FluidContainer>
  );
};

export default FastPayment;
