import "./modules/swiper-bundle.min.js";

const aboutSlider = new Swiper(".about-slider", {
  slidesPerView: 1.5,
  centeredSlides: false,
  grabCursor: true,
  spaceBetween: 16,
  scrollbar: {
    el: ".about-slider__scrollbar",
    draggable: true
  },
  navigation: {
    nextEl: ".about-slider__next",
    prevEl: ".about-slider__prev",
  },
  autoHeight: true,
  freeMode: true
});

const gallerySlider = new Swiper(".gallery-slider", {
  slidesPerView: 1,
  centeredSlides: false,
  grabCursor: true,
  spaceBetween: 24,
  scrollbar: {
    el: ".gallery-slider__scrollbar",
    draggable: true
  },
  navigation: {
    nextEl: ".gallery-slider__next",
    prevEl: ".gallery-slider__prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4.5,
    },
  },
  autoHeight: true,
  freeMode: true
});