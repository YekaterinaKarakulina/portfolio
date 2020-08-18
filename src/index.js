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

document.querySelector('.container').addEventListener('mouseover', () => {
  if (event.target.classList.contains('card__title')) {
    event.target.closest('.card').classList.add('hovered');
  }
})

document.querySelector('.container').addEventListener('mouseout', () => {
  if (event.target.classList.contains('card__title')) {
    event.target.closest('.card').classList.remove('hovered');
  }
})