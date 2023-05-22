import Swiper, { Autoplay, Pagination, Navigation, EffectFade, Thumbs } from "swiper";
Swiper.use([Autoplay, Pagination, Navigation, EffectFade, Thumbs]);

const slider = document.querySelector('.slider-services-js');
const sliderThumb = document.querySelector('.slider-thumb-services-js');
const sliderSection = document.querySelector('.section__list-js');

if (sliderSection) {  
    var Slider = new Swiper(sliderSection, {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slider-sect-right-btn-js',
            prevEl: '.slider-sect-left-btn-js',
        },
    });
}

if (slider) {
  var thumbSwiper = new Swiper(sliderThumb, {
    slidesPerView: 5,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: {
      nextEl: '.slider-right-btn-js',
      prevEl: '.slider-left-btn-js',
    },
    on: {
        click: function () {
          this.slideTo(this.clickedIndex, 300, false); // Сдвигаем слайд к центру
        },
    },

  });


  var Slider = new Swiper(slider, {
    // loop: true,
    slidesPerView: 1,
    effect: "fade",
    initialSlide: 2,
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: thumbSwiper
    },
    on: {
        init: function () {
          thumbSwiper.slideTo(2, 300, false); // Сдвигаем слайд к центру без анимации
        },
      },
  });

  document.querySelector('.slider-right-btn-js').addEventListener('click', function() {
    Slider.slideNext();
  });

  document.querySelector('.slider-left-btn-js').addEventListener('click', function() {
    Slider.slidePrev();
  });

}

const imageSliders = document.querySelectorAll('.img-slider');

if(imageSliders) {
  imageSliders.forEach((imageSlider, idx) => {
    const sw = `.img-slider${idx + 1}-js`;
    var swiper = new Swiper(sw, {
      effect: "fade",
      slidesPerView: 1,
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  })
}
