$(function() {
	$(document).ready(function() {
		// slick slider1
		$('.slider1 .slider-slick').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: true,
			dots: false
		});

		// slick slider2
		$('.slider2 .slider-slick').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: true,
			dots: false
		});

		// jQuery smooth scrolling
		$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
			var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
		  
			if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
			}

			return false; // выключаем стандартное действие
		});

		// magnific-popup
		$('.image-link').magnificPopup({type:'image'});
		$('.popup-link1').magnificPopup({
		  type: 'image'
		  // other options
		});
		

		// parallax js
		$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});


		// popup1
		$('.js-popup1').on('click', function(e) {
		  e.preventDefault();

		  // поиск popup и popup-overlay для их открытия
		  // $('.popup').css('display', 'block');
		  // $('.popup-overlay').css('display', 'block');
		  // or
		  $('.popup1').slideDown();
		  $('.popup-overlay').css('display', 'block');
		  
		  // поиск button close popup
		  $('#js-close-popup, .popup-overlay').on('click', function(e) {
		    // $('.popup').css('display', 'none');
		    // $('.popup-overlay').css('display', 'none');
		    // or
		    $('.popup1').slideUp();
		    $('.popup-overlay').css('display', 'none');
		  });
		});




	});
});