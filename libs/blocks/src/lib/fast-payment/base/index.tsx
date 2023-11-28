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
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col gap-gap-3xl">
          <div className="flex flex-col gap-gap-2xl">
            <div className="flex flex-col items-center justify-center gap-general-lg text-center max-sm:gap-general-md">
              <Heading.H2>{title}</Heading.H2>
              {description && <Text size="xl">{description}</Text>}
            </div>

            {link && (
              <div className="flex justify-center">
                <CustomLink href={link.href} className="w-fit" hasIcon>
                  {link.content}
                </CustomLink>
              </div>
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
              <p className="text-100 text-typography-subtle">{disclaimer}</p>
            )}
          </div>
        </div>
      </div>
    </FluidContainer>
  );
};

export default Base;
