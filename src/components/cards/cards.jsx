/* eslint-disable no-unused-vars */
// Import Swiper React components
import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

import './cards.scss';

// const Cards = () => {
//   return (
//     <div className="cards">
//       <Swiper pagination navigation>
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//       </Swiper>

//       {/* <Swiper
//         spaceBetween={50}
//         slidesPerView={2}
//         navigation
//         // pagination={{ clickable: true }}
//         // scrollbar={{ draggable: true }}
//         // onSlideChange={() => console.log('slide change')}
//         // onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//       </Swiper> */}
//     </div>
//   );
// };

// export default Cards;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <h1>lalal</h1>
    // <div className="cards">
    //   <Swiper
    //     spaceBetween={50}
    //     slidesPerView={3}
    //     navigation
    //     pagination={{ clickable: true }}
    //     onSlideChange={() => console.log('slide change')}
    //     onSwiper={(swiper) => console.log(swiper)}
    //     className="cont"
    //   >
    //     <SwiperSlide className="lala">Slide 1</SwiperSlide>
    //     <SwiperSlide className="lala">Slide 2</SwiperSlide>
    //     <SwiperSlide className="lala">Slide 3</SwiperSlide>
    //     <SwiperSlide className="lala">Slide 4</SwiperSlide>
    //   </Swiper>
    // </div>
  );
};
