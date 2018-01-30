$(function() {
		// slick slider
		$('.slider .slider-slick').slick({
			slidesToShow: 1,
			autoplay: true,
  		autoplaySpeed: 2000,
			arrows: true,
			dots: true
		});


		// slick slider2
		$('.slider2 .slider-slick').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
  		autoplaySpeed: 2000,
			arrows: true,
			dots: true
		});


		 $('.owl-carousel').owlCarousel({
		 	items: 2,
		 	loop: true,
		 	autoWidth: true,
		 	margin: 26,
		 	autoplay: true,
		 	nav: true,
		 	dots: true
		 });


		// popups
		// ставим на кнопку которая вызывает данный popup
		$('.js-popup').on('click', function(e) {
			e.preventDefault();

			// поиск button close popup
			$('#js-close-popup').on('click', function(e) {
				// $('.popup1').css('display', 'none');
				// $('.popup-overlay1').css('display', 'none');
				// or
				$('.popup1').slideUp();
				$('.popup-overlay1').css('display', 'none');
			});

			// поиск popup и popup-overlay для их открытия
			// $('.popup1').css('display', 'block');
			// $('.popup-overlay1').css('display', 'block');
			// or
			$('.popup1').slideDown();
			$('.popup-overlay1').css('display', 'block');
		});


		// ставим на кнопку которая вызывает данный popup
		$('.js-popup2').on('click', function(e) {
			e.preventDefault();

			// поиск button close popup
			$('#js-close-popup2').on('click', function(e) {
				// $('.popup2').css('display', 'none');
				// $('.popup-overlay1').css('display', 'none');
				// or
				$('.popup2').slideUp();
				$('.popup-overlay1').css('display', 'none');
			});

			// поиск popup и popup-overlay для их открытия
			// $('.popup1').css('display', 'block');
			// $('.popup-overlay1').css('display', 'block');
			// or
			$('.popup2').slideDown();
			$('.popup-overlay1').css('display', 'block');
		});	

});