$(document).ready(function() {
	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});

	// auto date
	// var dt = new Date();
	// $('.footer__copyright').text('Copyright '+String.fromCharCode(169)+' 1970 - '+dt.getFullYear());

	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	 	$('.popup').slideDown(600);
	  $('.popup-overlay').fadeIn('slow');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp(600, function() {
			
		  });

		  $('.popup-overlay').fadeOut('slow');
		});
	});

	// onscroll
	window.onscroll = function() {
	  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  // console.log(scrolled);

	  if(scrolled > 300) {
	  	// $('.arrow').css('display', 'block');
	  	$('.arrow').show('slow', function() {
	  		//
	  	});
	  }
	  else {
	  	// $('.arrow').css('display', 'none');
	  	$('.arrow').hide('slow', function() {
	  		//
	  	});
	  }
	};

	// lazy load
	var myLazyLoad = new LazyLoad();

	// count
	// console.log($('.slides-portfolio__item').length);
	$('.work-count span').text($('.slides-portfolio__item').length);

});