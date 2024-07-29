AOS.init();

var swiper = new Swiper(".TechnologySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 1000,
      },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });
  var swiper = new Swiper(".IndustriesSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 1000,
      },
    breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });
