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
	

// ассортимент каталога

$('.catalog__palitra-btn').on('click', function(){
$('.catalog__palitra-wrapper').toggleClass('catalog__palitra-wrapper--active');
});






// $('.catalog__palitra-btn').click(function()
// {
//   $('span').toggle();
// });

//кнопка активности
$('.catalog__filter-list').on('click', function(){
$('.catalog__item').addClass('active');
$('.catalog__filter-list').addClass('active');
$('.catalog__filter-move').removeClass('active');
});

$('.catalog__filter-move').on('click', function(){
$('.catalog__item').addClass('active');
$('.catalog__filter-move').addClass('active');
$('.catalog__filter-list').removeClass('active');
});




});