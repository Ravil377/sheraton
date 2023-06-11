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


const numberSlider = document.querySelector('.number__slider-js');
const numberThumbSlider = document.querySelector('.number__thumb-slider-js');
const thumbContainer = document.querySelector('.number__slider-thumb-container');

if (numberSlider) {
  var thumbSwiper = new Swiper(numberThumbSlider, {
    lazy: true,
    effect: "fade",
    slidesPerView: 1,
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true
    },
    watchSlidesProgress: true,
  });

  const numberSwiper = new Swiper(numberSlider, {
    lazy: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    thumbs: {
      swiper: thumbSwiper,
    },
    navigation: {
      nextEl: ".swiper-button-prev-js",
      prevEl: ".swiper-button-next-js",
    },
  });

  numberSwiper.on('slideChangeTransitionEnd', function () {
    if (numberSwiper.activeIndex === numberSwiper.slides.length - 1) {
      thumbContainer.classList.add('hide');
      // Выполните нужные действия для предпоследнего слайда
    } else {
      thumbContainer.classList.remove('hide');
    }
  });
}


const tabs = document.querySelector('.tabs__buttons-js');
const details = document.querySelector('.tabs__details-js');
tabs.addEventListener('click', (e) => {
  const tab = e.target;
  const id = tab.id;
  const active = tabs.querySelector('._active');
  const detail = details.querySelector('._active');
  if(tab.classList.contains('btn')) {
    detail.classList.remove('_active');
    active.classList.remove('_active');
    tab.classList.add('_active');
    details.querySelector(`[data-tab="${id}"]`).classList.add('_active');
  }
})