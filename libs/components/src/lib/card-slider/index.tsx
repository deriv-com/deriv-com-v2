import clsx from 'clsx';
import { CardContent } from '../card/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface SwiperPagination {
  pagination?: {
    enabled?: boolean;
    clickable?: boolean;
    horizontalClass?: string;
  };
}

interface SwiperProps extends SwiperPagination {
  className?: string;
  slidesPerView?: 'auto' | number;
  spaceBetween?: number;
}

export interface CardSliderProps {
  className?: string;
  cards?: CardContent[];
  renderCard?: React.FC<CardContent>;
  slideClasses?: string;
  swiperData?: SwiperProps;
}

export const CardSlider = ({
  className = '!pb-general-2xl',
  cards = [],
  renderCard,
  slideClasses,
  swiperData = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      enabled: true,
      clickable: true,
      horizontalClass: `[--swiper-pagination-color:#ff444f]`,
    },
  },
}: CardSliderProps) => {
  return (
    <div className="flex w-full justify-center">
      <Swiper
        className={clsx(className)}
        modules={[Pagination]}
        pagination={swiperData.pagination}
        slidesPerView={swiperData.slidesPerView}
        spaceBetween={swiperData.spaceBetween}
        rewind
      >
        {cards.map((card) => (
          <SwiperSlide className={clsx(slideClasses)} key={card.header}>
            {renderCard?.(card)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
