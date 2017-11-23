var topDelay = 700; // Задержка прокрутки

var $up = $('.up'); // Кнопка прокрутки

$(window).on('scroll resize', function() {
	var topShow = 1; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"

	if ($(this).scrollTop() > topShow) $up.fadeIn();
	else $up.fadeOut();
});

$up.on('click', function() {
	$('body, html').animate({
		scrollTop: 0
	}, topDelay);
});