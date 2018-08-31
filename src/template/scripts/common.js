$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.input_date .input__wrap').mask('00.00.00');


	$('.scroll').perfectScrollbar({
		scrollYMarginOffset: 100
	});

	$('select').styler();


	$('.catalog__list').slick({
		slidesToShow: 4,
		rows: 2,
		infinite: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				rows: 2
			}
		}]
	});


	var mobileBtn = $('.panel__mobile-btn'),
			nav = $('.panel__nav');

	mobileBtn.click(function(event) {
		$(this).toggleClass('panel__mobile-btn_toggle');
		nav.slideToggle(300);
	});


	setTimeout(function() {
 		$('.prelouder').addClass('prelouder_hide');
	}, 3500);



});
