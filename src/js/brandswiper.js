// core version + navigation, pagination modules:
import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
// import '../styles/swiperstyle.scss'

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination],
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },

    400: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    600: {
      slidesPerView: 2.3,
      spaceBetween: 50,
    },

    700: {
      slidesPerView: 2.8,
      spaceBetween: 50,
    },
  }
});