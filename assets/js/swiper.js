// Swiper Slider
var swiperPartners = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    // when window width is <= 992px
    992: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});
// Swiper Slider for testimonials
var swiperTestimonials = new Swiper(".swiper-container", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    1499: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 1,
    },

    575: {
      slidesPerView: 1,
    },

    320: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
});
