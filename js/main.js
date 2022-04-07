$(document).ready(function(){
    $('.go').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});


jQuery(document).ready(function() {

	$('.owl-carousel-main').owlCarousel({
	    loop:false,
	    margin:0,
	    nav: false,
	    dots: true,
	    autoplay: true,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
            items:1
	        }
	    }
	});

	$('.owl-carousel-reviews').owlCarousel({
	    loop:false,
	    margin:20,
	    nav: false,
	    dots: false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
            items:1.5
	        },
	        450:{
            items:2
	        },
	        800:{
            items:3
	        },
	        996:{
            items:4
	        }
	    }
	});

	$('.owl-carousel-stars').owlCarousel({
	    loop:true,
	    margin:0,
	    nav: true,
	    navText: ["<img src='img/reviews/arrow_left.svg'>", "<img src='img/reviews/arrow_right.svg'>"],
	    dots: false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    items:1,
	    smartSpeed:450,
	    responsive:{
	        0:{
            items:1
	        }
	    }
	});

	$('.owl-carousel-product').owlCarousel({
	    loop: true,
	    margin: 0,
	    nav: true,
	    dots: false,
	    autoplay: false,
	    navText: ["<b>&#8592;</b>", "<b>Следующий день &nbsp; &#8594;</b>"],
	    responsive:{
	        0:{
            items: 1
	        }
	    }
	});


	var call = $('.header');
	/*if (screen.width > '1050') {*/
	$(window).scroll(function () {
	    if ($(window).scrollTop() > 10) {
	        call.addClass('t0');
	    } else {
	        call.removeClass('t0');
	    }
	});

	var alt_b = $('.pt.active img').attr('title');
	var alt_p = $('.pt.active img').attr('alt');
	$('b#new_b').html(alt_b);
	$('p#new_p').html(alt_p);

	$('.product-thumbs-track > .pt').on('click', function(){
		$('.product-thumbs-track .pt').removeClass('active');
		$(this).addClass('active');
		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product-big-img').attr('src');
		var alt_b = $('.pt.active img').attr('title');
		var alt_p = $('.pt.active img').attr('alt');
		$('b#new_b').html(alt_b);
		$('p#new_p').html(alt_p);
		if(imgurl != bigImg) {
			$('.product-big-img').attr({src: imgurl});
			$('.zoomImg').attr({src: imgurl});
		}	
	});	

	$('.content-tab__price_item').on('click', function(){
		$('.content-tab__price_item').removeClass('item-focus');
		$(this).addClass('item-focus');
		var price = $(this).children('p').children('span').html();
		/*var bonus = $(this).children('div').html();*/
		var time = $(this).children('p#time').html();
		
		var total_price = $('#total-price');
		var total_bonus = $('#total-bonus');
		var total_time = $('#total-time');
		total_price.html(price);
		var bonus = price * 0.05;
		total_bonus.html(bonus);
		total_time.html(time);
		/*total_price.html() = price;*/
		
	});	

	$(function() {
	var $menu_popup = $('.menu-popup');
	
	$(".menu-triger, .menu-close").click(function(){
		$menu_popup.slideToggle(300, function(){
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu').length){
			$('body').removeClass('body_pointer');
			$menu_popup.slideUp(300);
		}
	});
});


	
})





