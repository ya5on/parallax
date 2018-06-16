//слайдер основная страница
$(document).ready(function() {
    $(".main-slider").owlCarousel({
        autoplay: true,
        items: 1,
        loop: true,
        touchDrag: true,
        nav: true,
        navText: ['', ''],
        dots: true
    });
});
//слайдер about страница
$(document).ready(function() {
    $(".about-page-slider").owlCarousel({
        autoplay: true,
        items: 1,
        loop: true,
        touchDrag: true,
        nav: true,
        navText: ['', ''],
        dots: true,
        mouseDrag: false
    });
});


// кнопка скрол основная страница
$(document).ready(function() {
    $(".slide-section").click(function(e){

    	var linkHref = $(this).attr('href');
    	$('html, body').animate({
    		scrollTop: $(linkHref).offset().top
    	}, 700);

        e.preventDefault();
    });
});

// кнопка наверх
$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
}
});
$('#toTop').click(function() {
$('body,html').animate({scrollTop:0},800);
});
});



