$(document).ready(function() {

  /*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass('active');
  });
  /*==========/menu-toggle=========*/

  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".header__nav").removeClass('active');
      $(".burger").removeClass('active');
 
    $("html, body").animate ({
      scrollTop: blockOffset - 30
    }, 500);
  });
/*=========/smooth scroll=============*/

/*===========Video-icon========*/
  $('.reviews-videobox__video').on("click", function() {
   $(this).toggleClass('active');
 }); 
/*===========/video-icon========*/

 /*==========Label===========*/



 $('.learn-form__item select').on('change', function() {
 

 if($(this).val() == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }

});


 $('.learn-form__item input, .learn-form__item textarea').on('input', function() {
 

 if($(this).val().length == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }

});
 /*==========label===========*/

  /*======Slider-intro=============*/
  $('.intro__slider').slick({
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow: $('.intro__arrow_prev'),
      nextArrow: $('.intro__arrow_next'),
  });
  /*=============/slider-intro==============*/

  /*======Slider-reviews=============*/
  $('.reviews__slider').slick({
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow: $('.slider-arrows__arrow_prev'),
      nextArrow: $('.slider-arrows__arrow_next'),
  });
  /*=============/slider-reviews==============*/

  /*======Slider-life=============*/
  $('.life__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      prevArrow: $('.life .slider-arrows__arrow_prev'),
      nextArrow: $('.life .slider-arrows__arrow_next'),
      responsive: [
      {
       breakpoint: 766,
      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.life .slider-arrows__arrow_prev'),
      nextArrow: $('.life .slider-arrows__arrow_next'),
    }
      }
  ]

  }); 
  /*=============/slider-life==============*/

  let bg = document.querySelector('.into_img1');
  window.addEventListener('mousemove', function(e) {
    let x = 0 ;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
  });

    let bg2 = document.querySelector('.into_img2');
  window.addEventListener('mousemove', function(e) {
    let x2 = 0 ;
    let y2 = e.clientY / window.innerHeight;
    bg2.style.transform = 'translate(-' + x2 * 50 + 'px, -' + y2 * 50 + 'px)';
  });

    let bg3 = document.querySelector('.into_img3');
  window.addEventListener('mousemove', function(e) {
    let x3 = 0 ;
    let y3 = e.clientY / window.innerHeight;
    bg3.style.transform = 'translate(-' + x3 * 50 + 'px, -' + y3 * 50 + 'px)';
  });


	
});