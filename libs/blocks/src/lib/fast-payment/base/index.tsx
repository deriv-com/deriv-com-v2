import { FluidContainer, Heading, Text } from '@deriv/quill-design';
import { CardsContainer, CustomLink } from '@deriv-com/components';

import { FastPaymentProps } from '../types';

// TODO: Complete Redo needed

const Base: React.FC<FastPaymentProps> = ({
  title,
  description,
  link,
  disclaimer,
  content: { cards = [], cols = 'three', dense },
}) => {
  return (
    <FluidContainer className="bg-background-primary-container py-general-4xl">
      <div className="flex flex-col items-center text-center">
        <Heading.H2>{title}</Heading.H2>
        {description && <Text className="pt-general-lg">{description}</Text>}

        {link && (
          <div className="flex justify-center pt-general-xl">
            <CustomLink href={link.href} className="w-fit" hasIcon>
              {link.content}
            </CustomLink>
          </div>
        )}
        <CardsContainer
          cards={cards}
          variant="ContentBottom"
          cols={cols}
          dense={dense}
          className="pt-general-2xl"
        />
        {disclaimer && (
          <Text size="sm" className="pt-general-2xl text-typography-subtle">
            {disclaimer}
          </Text>
        )}
      </div>
    </FluidContainer>
  );
};

export default Base;
