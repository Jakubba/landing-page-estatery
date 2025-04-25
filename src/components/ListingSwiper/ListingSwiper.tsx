import React from 'react';
// @ts-ignore
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card/Card';
import { ListingSwiperProps } from './ListingSwiper.types';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ListingSwiper: React.FC<ListingSwiperProps> = ({ listings }) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 5 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {listings.map((listing, index) => (
          <SwiperSlide key={index}>
            <Card
              className="!w-full"
              to={listing.to}
              tagLabel={listing.tagLabel}
              price={listing.price}
              priceNote={listing.priceNote}
              title={listing.title}
              location={listing.location}
              imageSrc={listing.imageSrc}
              showHeartButton={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
