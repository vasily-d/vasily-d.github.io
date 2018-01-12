$(function() {
	// tabs jquery
	$(function() {
		$(".tab_item").not(":first").hide();
		$(".wrapper .tab").click(function() {

			$('.slider').slick('slickGoTo', 0, false);

			$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()

		}).eq(0).addClass("active");

	});

	// slider
	$(document).ready(function(){
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: true,
			autoplaySpeed: 3000
		});
	});

});