import clsx from 'clsx';
import { CardContent } from '../card/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { qtMerge } from '@deriv/quill-design';

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

const defaultSwiperProps: SwiperProps = {
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
        className={qtMerge(
          swiperProps.pagination && '!pb-general-3xl',
          className,
        )}
        modules={[Pagination]}
        pagination={swiperProps.pagination}
        slidesPerView={swiperProps.slidesPerView}
        spaceBetween={swiperProps.spaceBetween}
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
