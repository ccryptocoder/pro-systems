window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#promoSlider2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        observer:true,
        observeParents:true,
        observeSlideChildren:true,
        // Navigation arrows
        navigation: {
          nextEl: '#promoSliderNext',
          prevEl: '#promoSliderPrev',
        },
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 1,
              spaceBetween: 10
            },
        }
    });
  });