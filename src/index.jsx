/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';

// import './sass/style.scss';
// import Swiper from './swiper/swiperAPI';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// const CONTAINER = document.querySelector('.container');
// const MODAL_IMG = document.querySelector('.modal__image');
// const CERTIFICATE_MODAL = document.querySelector('.certificate__modal');

// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   slidesPerGroup: 1,
//   loop: false,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true,
//     dynamicMainBullets: 3,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// CONTAINER.addEventListener('mouseover', (event) => {
//   if (event.target.classList.contains('card__title')) {
//     event.target.closest('.card').classList.add('hovered');
//   }
// })

// CONTAINER.addEventListener('mouseout', (event) => {
//   if (event.target.classList.contains('card__title')) {
//     event.target.closest('.card').classList.remove('hovered');
//   }
// })

// document.querySelector('header').addEventListener('click', (event) => {
//   if (event.target.classList.contains('certificate')) {
//     MODAL_IMG.src = event.target.src;
//     if (event.target.classList.contains('portrait')) {
//       MODAL_IMG.classList.add('portrait');
//     } else if (event.target.classList.contains('landscape')) {
//       MODAL_IMG.classList.add('landscape');
//     }
//     CERTIFICATE_MODAL.classList.remove('hidden');
//     document.querySelector('.close-btn').classList.remove('hidden');
//   }
//   else if (event.target.classList.contains('close-btn')) {
//     CERTIFICATE_MODAL.classList.add('hidden');
//     document.querySelector('.close-btn').classList.add('hidden');
//     MODAL_IMG.classList.remove('landscape');
//     MODAL_IMG.classList.remove('portrait');
//   }
// })
