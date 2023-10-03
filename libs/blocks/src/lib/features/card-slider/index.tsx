import clsx from 'clsx';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';
import { CardContent } from '@deriv-com/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export interface CardSliderProps {
  title?: string;
  description?: string;
  cta?: ReactNode;
  className?: string;
  cards?: CardContent[];
  renderCard?: React.FC<CardContent>;
  slideClasses?: string;
}

const CardSlider = ({
  title,
  description,
  cta,
  className,
  cards = [],
  renderCard,
  slideClasses = 'max-w-xs',
}: CardSliderProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center gap-gap-2xl">
        <div className="flex flex-col items-center justify-center gap-gap-xl">
          <Heading.H2>{title}</Heading.H2>
          <Text size="xl">{description}</Text>
        </div>
        <div className="flex w-full justify-center">
          <Swiper
            className="!pb-general-2xl"
            modules={[Pagination]}
            pagination={{
              enabled: true,
              clickable: true,
              horizontalClass: `[--swiper-pagination-color:#ff444f]`,
            }}
            rewind
            slidesPerView={'auto'}
            spaceBetween={16}
          >
            {cards.map((card) => (
              <SwiperSlide className={clsx(slideClasses)} key={card.header}>
                {renderCard?.(card)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default CardSlider;
