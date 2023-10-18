import clsx from 'clsx';
import { CardContent, LiveMarketContent } from '../card/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, SwiperOptions } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { qtMerge } from '@deriv/quill-design';

type cardProps = CardContent | LiveMarketContent;
export interface CardSliderProps {
  className?: string;
  cards?: cardProps[];
  renderCard?: React.FC<cardProps>;
  slideClasses?: string;
  swiperData?: SwiperOptions;
}

const defaultSwiperProps: SwiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    enabled: true,
    clickable: true,
    horizontalClass: `[--swiper-pagination-color:#ff444f]`,
  },
};

export const CardSlider = ({
  className,
  cards = [],
  renderCard,
  slideClasses,
  swiperData,
}: CardSliderProps) => {
  const swiperProps = Object.assign(defaultSwiperProps, swiperData);

  return (
    <div className="flex w-full justify-center">
      <Swiper
        className={qtMerge(className)}
        modules={[Pagination]}
        pagination={swiperProps.pagination}
        slidesPerView={swiperProps.slidesPerView}
        spaceBetween={swiperProps.spaceBetween}
        breakpoints={swiperProps.breakpoints}
        rewind
      >
        {cards.map((card, index) => (
          <SwiperSlide className={clsx(slideClasses)} key={index}>
            {renderCard?.(card)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
