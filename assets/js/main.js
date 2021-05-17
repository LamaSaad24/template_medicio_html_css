$('.btn-close').click(function () {
    $('#collapsibleNavId').hide()
})
$('.navbar-toggler').click(function () {
    $('#collapsibleNavId').show()
})
//slide
new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    pauseOnHover: false,
}).mount();
//scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
        $('header').css('transform', 'translateY(-35px)');
         $('.back-to-top').css('display','block');
    }
    else {
        $('header').css('transform', 'translateY(0px)');
        $('.back-to-top').css('display','none');
    }
})
//slick slider
$(document).ready(function(){
    $('.testimonials-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
        }
        }
        ]
        });
});
//slick slider gallery
$(document).ready(function(){
    $('.gallery-content').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
        {
        breakpoint: 980,
        settings: {
            slidesToShow: 3,
        }
        },
        {
        breakpoint: 622,
        settings: {
            slidesToShow: 1,
        }
        }
        ]
        });
});

//penel 
$('.panel-title').click(function(){
    if($(this).hasClass('active')){
        $('.panel-title').removeClass('active');
        $('.panel-collapse').hide('slow');
    }
    else{
        $('.panel-title').removeClass('active');
        $(this).addClass('active');
        $('.panel-collapse').hide('slow');
        let panel=$(this).parent().parent();
        let child =$(panel).find('.panel-collapse');
        $(child).show('slow');
        
    }
})

//navbar

$('.nav-item').click(function(){
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
})

//wow
new WOW().init();