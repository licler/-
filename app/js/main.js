$(function(){
    
//слайдер/////////////////////////////////////
 $('.slider__items').slick({	
        arrows: true,
        dots: true,
       //  fade: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/back.svg" alt="images"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/next.svg" alt="images"></button>',
        responsive: [
              {
                breakpoint: 650,
                settings: {
              //     slidesToShow: 3,
              //     slidesToScroll: 3,
              autoplaySpeed: 3000,
                  arrows: false,
                  dots: false
                }
              }
        ]
 });




 // рейтинг////////////////////////////////////

$(".rate-star").rateYo({
       rating: 5,
       starWidth: '14px'
     });
	


// Каталог палитры//////////////////////////////////////////////////////////////

$('.catalog__palitra-btn').on('click', function(evt){
       $('.catalog__palitra-wrapper').removeClass('catalog__palitra-wrapper--active');    
       evt.currentTarget.previousElementSibling.classList.toggle('catalog__palitra-wrapper--active');
       // $('.catalog__palitra-wrapper--active').slideToggle(1000);
});



//кнопка активности/////////////////////////////////////////
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


// Партнеры////////////////////////////////////////////////////

$('.parthner__btn').on('click', function(){
$('.parthner__inner').toggleClass('parthner__inner--active');
});
$('.parthner__btn').click(function(){
       if($('.parthner__btn-open').html() == 'Показать все') {
              $('.parthner__btn-open').html('Скрыть все');
       }
       else $('.parthner__btn-open').html('Показать все');
       return false;
});



// слайдер цитат/////////////////////////////////////////////
$('.reviews__items').slick({	
       arrows: true,
       // autoplay: true,
       infinite: true,
       slidesToShow: 2,
       slidesToScroll: 2,
       prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/back.svg" alt="images"></button>',
       nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/next.svg" alt="images"></button>',
       responsive: [
              {
                breakpoint: 1130,
                settings: {
                autoplaySpeed: 3000,
                arrows: false
                }
              },
              {
              breakpoint: 1065,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
              }
       }
]
});



});

// menu-page
$('.menu-page__btn').on('click', function(){
$('.menu-page__list').toggleClass('active');
});


// header

$('.menu__big-btn').on('click', function(){
$('.header__list').toggleClass('active')
});


///////////////////////////////////////////////////////
