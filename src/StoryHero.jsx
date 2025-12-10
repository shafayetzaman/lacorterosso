import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ===== IMPORT SWIPER IMAGES =====
import swiper1 from '/src/assets/swiper/swiper1.webp';
import swiper2 from '/src/assets/swiper/swiper2.webp';
import swiper3 from '/src/assets/swiper/swiper3.webp';
import swiper4 from '/src/assets/swiper/swiper4.webp';
import swiper5 from '/src/assets/swiper/swiper5.webp';

export default function StoryHero() {
  const slides = [swiper1, swiper2, swiper3, swiper4, swiper5];

  return (
    <div className='w-full h-[45vh] md:h-[60vh] lg:h-[70vh]'>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        style={{
          height: '100%',
          '--swiper-navigation-color': '#D9C6A3',
          '--swiper-pagination-color': '#D9C6A3'
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              color: 'white',
              cursor: 'grabbing',
              backgroundSize: 'cover',
              backgroundImage: `url(${slide})`,
              backgroundPosition: 'center'
            }}
          />
        ))}
      </Swiper>
    </div>
  );
}
