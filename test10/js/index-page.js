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
		


	});
});