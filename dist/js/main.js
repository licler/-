$(function(){
//слайдер
 $('.slider__items').slick({	
        arrows: true,
        dots: true,
        fade: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/back.svg" alt="images"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/next.svg" alt="images"></button>',
 });

 // рейтинг

$(".rate-star").rateYo({
       rating: 5,
       starWidth: '14px'
     });
	
	
	
});