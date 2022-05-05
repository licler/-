$(function(){
 ///////////////////////////////////////////////////////////////      
// Меню

// $('.header__list-link').mouseenter(function(){
//  $(this).css('text-decoration', 'underline');
// });
// $('.header__list-link').mouseleave(function(){
//        $(this).css('text-decoration', 'none');   
// });

/////////////////////////////////////////////////////////////


//слайдер/////////////////////////////////////
 $('.slider__items').slick({	
        arrows: true,
        dots: true,
        fade: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/back.svg" alt="images"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/next.svg" alt="images"></button>',
 });

/////////////////////////////////////////////

 // рейтинг////////////////////////////////////

$(".rate-star").rateYo({
       rating: 5,
       starWidth: '14px'
     });
	

/////////////////////////////////////////////////////////////////////////

// Каталог палитры//////////////////////////////////////////////////////////////




// if($('.btn-open').html() == 'Показать все') {
//        $('.btn-open').html('Скрыть все');
// }
// else $('.btn-open').html('Показать все');
// return false;
//  });

// });


$('.catalog__palitra-btn').on('click', function(evt){
       $('.catalog__palitra-wrapper').removeClass('catalog__palitra-wrapper--active');    
       evt.currentTarget.previousElementSibling.classList.toggle('catalog__palitra-wrapper--active');
       // $('.catalog__palitra-wrapper--active').slideToggle(1000);
});
 $('.catalog__btn').click(function(){
 $('.catalog__news-wrapper').toggleClass('catalog__news-wrapper--active');

 });






////////////////////////////////////////////////////////////////////////

// $('.catalog__palitra-btn').on('click', function(){
// $('.catalog__palitra-wrapper').addClass('catalog__palitra-wrapper--active');
// });


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
////////////////////////////////////////////////////////////


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
///////////////////////////////////////////////////////////////


// слайдер цитат/////////////////////////////////////////////
$('.reviews__items').slick({	
       arrows: true,
       // autoplay: true,
       infinite: true,
       slidesToShow: 2,
       slidesToScroll: 2,
       prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/back.svg" alt="images"></button>',
       nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/next.svg" alt="images"></button>'
});

///////////////////////////////////////////////////////////

});