import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import { CardsContainer, CustomLink } from '@deriv-com/components';

import { FastPaymentProps } from '../types';

// TODO: Complete Redo needed

const Base: React.FC<FastPaymentProps> = ({
  title,
  description,
  link,
  disclaimer,
  content: { cards = [], cols = 'three', dense, sliderClass },
  className,
}) => {
  return (
    <Section
      className={qtMerge(
        'overflow-hidden py-general-4xl text-center',
        className,
      )}
    >
      <FluidContainer
        className="flex flex-col items-center"
        data-testid="fast-payment-container"
      >
        <Heading.H2 className="max-w-[816px] text-center">{title}</Heading.H2>
        {description && (
          <Text
            data-testid="fast-payment-description"
            className="pt-general-md"
          >
            {description}
          </Text>
        )}
        {link && (
          <CustomLink
            href={link.href}
            className="w-fit pt-general-xl"
            hasIcon
            size="md"
            data-testid="fast-payment-link"
          >
            {link.content}
          </CustomLink>
        )}
        <CardsContainer
          cards={cards}
          variant="ContentBottom"
          cols={cols}
          dense={dense}
          className="pt-general-2xl"
          sliderClass={sliderClass}
        />
        {disclaimer && (
          <Text size="sm" className="pt-general-2xl text-typography-subtle">
            {disclaimer}
          </Text>
        )}
      </FluidContainer>
    </Section>
  );
};

export default Base;
