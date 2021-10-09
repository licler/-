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

$('.parthner__btn').on('click', function(){
$('.parthner__inner').toggleClass('parthner__inner--active');
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


// слайдер цитат
$('.reviews__items').slick({	
       arrows: true,
       // autoplay: true,
       infinite: true,
       slidesToShow: 2,
       slidesToScroll: 2,
       prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/back.svg" alt="images"></button>',
       nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/next.svg" alt="images"></button>',
});



});