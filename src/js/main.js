$(function() {

$('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          dots: false,
          draggable: true
        }
      },]
});

$(".stars").rateYo({
    starWidth: "16px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });



$('.filter-price__slider').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__min').text(data.from);
      $('.filter-price__max').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__min').text(data.from);
      $('.filter-price__max').text(data.to);
  },
});

$('select').styler();

$('.product__items-num').styler();

$('.shop-content__filters-btn').on('click', function(){
  $('.shop-content__filters-btn').removeClass('shop-content__filters-btn--active')
  $(this).addClass('shop-content__filters-btn--active');
})

$('.button-list').on('click', function(){
  $('.products-item').addClass('products-item--list')
  
})

$('.button-grid').on('click', function(){
  $('.products-item').removeClass('products-item--list')
  
})


$('.product-slide__thumb').slick({

  asNavFor: '.product-slide__big',
  focusOnSelect: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  draggable: false,


})




$('.product-slide__big').slick({


  asNavFor: '.product-slide__thumb',
  draggable: false,
  arrows: false,
  fade: true



})


$('.product-tabs__top-links').on('click', function(e){

  e.preventDefault()

  $('.product-tabs__top-links').removeClass('product-tabs__top-links--active');

  $(this).addClass('product-tabs__top-links--active')

  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');

  $($(this).attr('href')).addClass('product-tabs__content-item--active')

})


$('.blog-page__slider').slick({
  prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="15px" viewBox="0 0 10 16" version="1.1"><g id="surface1"><path style=" fill:#fe3e57;fill-opacity:1;" d="M 1.292969 7.292969 C 0.902344 7.683594 0.902344 8.320312 1.292969 8.710938 L 6.292969 13.710938 C 6.683594 14.101562 7.320312 14.101562 7.710938 13.710938 C 8.101562 13.320312 8.101562 12.683594 7.710938 12.292969 L 3.414062 8 L 7.707031 3.707031 C 8.097656 3.316406 8.097656 2.679688 7.707031 2.289062 C 7.316406 1.898438 6.679688 1.898438 6.289062 2.289062 L 1.289062 7.289062 Z M 1.292969 7.292969 "/></g></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="15px" viewBox="0 0 10 16" version="1.1"><g id="surface1"><path style=" fill:#fe3e57;fill-opacity:1;" d="M 8.707031 7.292969 C 9.097656 7.683594 9.097656 8.320312 8.707031 8.710938 L 3.707031 13.710938 C 3.316406 14.101562 2.679688 14.101562 2.289062 13.710938 C 1.898438 13.320312 1.898438 12.683594 2.289062 12.292969 L 6.585938 8 L 2.292969 3.707031 C 1.902344 3.316406 1.902344 2.679688 2.292969 2.289062 C 2.683594 1.898438 3.320312 1.898438 3.710938 2.289062 L 8.710938 7.289062 Z M 8.707031 7.292969 "/></g></svg></button>',
  infinite: false
})


$('.hamburger').on('click', function(){
  $('.hamburger').toggleClass('hamburger--active')
  $('body').toggleClass('modal-open')
  $('.menu__list').toggleClass('menu__list--active')
})






function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = $('.promo__timer').attr('data-time')
  initializeClock('timer', deadline);

});