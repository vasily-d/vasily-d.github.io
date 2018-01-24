$(function() {
	// tabs jquery
	$(".tab_item").not(":first").hide();
		$(".wrapper .tab").click(function() {

			$('.slider').slick('slickGoTo', 0, false);

			$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()

		}).eq(0).addClass("active");

	// slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		autoplaySpeed: 3000
	});



	// popup
	$('.js-popup').on('click', function(e) {
		e.preventDefault();

		// поиск button close
		$('#js-close-popup').on('click', function(e) {
			// $('.popup-tour').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});

		// поиск popup tour и popup-overlay
		// $('.popup-tour').css('display', 'block');
		// $('.popup-overlay').css('display', 'block');
		$('.popup').slideDown();
		$('.popup-overlay').css('display', 'block');

		/*
			// js-popup-tour
				$('#js-close-popup').on('click', function(e) {
					e.preventDefault();

					$('.popup').hide();
					$('.popup-overlay').css('display', 'none');
				});
		
		*/
	});

});