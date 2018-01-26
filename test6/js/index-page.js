$(function() {
	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
	  // other options
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

	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Message successful send");
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		return false;
	});

});