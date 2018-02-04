$(function() {
	// tabs jquery
	$(function() {
		$(".tab_item").not(":first").hide();
		$(".wrap .tab").click(function() {
			
			// нужно если slick+tab
			//$('.slider').slick('slickGoTo', 0, false);
			
			$(".wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	});



	// tabs2 jquery
	$(function() {
		$(".tab_item2").not(":first").hide();
		$(".wrap .tab2").click(function() {
			
			// нужно если slick+tab
			//$('.slider').slick('slickGoTo', 0, false);
			
			$(".wrap .tab2").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item2").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	});



	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
		e.preventDefault();

		// поиск button close popup
		$('#js-close-popup').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});

		// поиск popup и popup-overlay для их открытия
		// $('.popup').css('display', 'block');
		// $('.popup-overlay').css('display', 'block');
		// or
		$('.popup').slideDown();
		$('.popup-overlay').css('display', 'block');
	});



	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Заявка отправлена!");
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		return false;
	});



	// click to .our-designers-team .tabs2 .tab2
	$('.tabs2 .tab2 img').on('click', function(e) {
		// restore all
		var curImg = $('.tabs2 .tab2 img');
		curImg.eq(0).attr('src', 'img/our-designers-team-photo1-shadow.jpg');
		curImg.eq(1).attr('src', 'img/our-designers-team-photo2-shadow.jpg');
		curImg.eq(2).attr('src', 'img/our-designers-team-photo3-shadow.jpg');
		curImg.eq(3).attr('src', 'img/our-designers-team-photo4-shadow.jpg');

		var current = $(this).attr('src');
		current = current.replace(/-shadow/g,"");

		// change one
		$(this).attr('src', current);
	});


});