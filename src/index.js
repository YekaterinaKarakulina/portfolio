console.log('connected');
import './sass/style.scss';

import Swiper from './swiper/swiperAPI';

const swiper = new Swiper('.swiper-container', {
 
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});