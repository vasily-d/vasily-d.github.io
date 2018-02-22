$(function() {
	// slick slider1
	$('.slider1 .slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		autoplaySpeed: 2000
	});

	// slick slider2
	$('.customer-testimonials .slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000
	});



});