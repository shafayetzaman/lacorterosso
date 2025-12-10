import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function StoryHero() {
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
        <SwiperSlide style={{
          color: 'white',
          cursor: 'grabbing',
          backgroundSize: 'cover',
          backgroundImage: 'url(./src/assets/swiper/swiper1.webp)',
          backgroundPosition: 'center'
        }}>

        </SwiperSlide>
        <SwiperSlide style={{
          color: 'white',
          cursor: 'grabbing',
          backgroundSize: 'cover',
          backgroundImage: 'url(./src/assets/swiper/swiper2.webp)',
          backgroundPosition: 'center'
        }}>

        </SwiperSlide>
        <SwiperSlide style={{
          color: 'white',
          cursor: 'grabbing',
          backgroundSize: 'cover',
          backgroundImage: 'url(./src/assets/swiper/swiper3.webp)',
          backgroundPosition: 'center'
        }}>

        </SwiperSlide>
        <SwiperSlide style={{
          color: 'white',
          cursor: 'grabbing',
          backgroundSize: 'cover',
          backgroundImage: 'url(./src/assets/swiper/swiper4.webp)',
          backgroundPosition: 'center'
        }}>

        </SwiperSlide>
        <SwiperSlide style={{
          color: 'white',
          cursor: 'grabbing',
          backgroundSize: 'cover',
          backgroundImage: 'url(./src/assets/swiper/swiper5.webp)',
          backgroundPosition: 'center'
        }}>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}