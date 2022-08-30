$(function() {

$('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true
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