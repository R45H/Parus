var
	$body = $('body'),
	noscrollClass = 'noscroll',
	$aside = $('.aside'),
	$item = $('.aside__item'),
	asideOpenedClass = 'aside_opened',
	itemOpenedClass = 'aside__item_opened',
	itemSubClass = 'aside__item_sub',
	$itemSub = $('.' + itemSubClass),
	subListClass = 'aside__sub-list',
	$subList = $('.' + subListClass),
	fogClass = 'fog',
	delay = 300;

/* Скрытие / раскрытие подменю */
$itemSub.find('.aside__link').on('click', function() {
	var $item = $(this).parent();

	$item
		.toggleClass(itemOpenedClass)
		.find('.' + subListClass)
		.slideToggle(delay);
});
/* ===== */

/* Скрытие / раскрытие бокового меню при клике на гамбургер */
$toggle.on('click', function() {

	if ($aside.hasClass(asideOpenedClass)) {
		toggleAside('close');
	} else {
		toggleAside('open');
	}
});
/* ===== */

/* Действия при ресайзе */
$(window).on('resize', function() {
	if (!$aside.hasClass(asideOpenedClass)) return;

	if (window.innerWidth > 575) {
		toggleAside('close');
	}
});
/* ===== */

/* Клик по затемнению */
$(document).on('click', '.' + fogClass, function() {
	if (!$aside.hasClass(asideOpenedClass)) return;

	toggleAside('close');
	$toggle
		.removeClass(activeClass)
		.addClass(inactiveClass);
});
/* ===== */

// Закрытие бокового меню при нажатии ESC
var closeAsideOnEsc = function(event) {
	if (event.keyCode != 27) return;

	toggleAside('close');
	$toggle
		.removeClass(activeClass)
		.addClass(inactiveClass);
};
// =====

/* Показывает или скрывает боковое меню */
function toggleAside(action) {

	if (action == 'open') {
		$aside.addClass(asideOpenedClass);
		$body.append('<div class="' + fogClass + '"></div>');
		$('.' + fogClass).fadeIn(delay);
		$(document).on('keydown', closeAsideOnEsc);
		$toggle.css({
			'padding-right': getScrollbarWidth(),
			'right': -(getScrollbarWidth())
		});
		toggleBodyScroll();
	}

	if (action == 'close') {
		$(document).off('keydown', closeAsideOnEsc);
		$subList.slideUp(0);
		$item.removeClass(itemOpenedClass);
		$aside.removeClass(asideOpenedClass);
		$('.' + fogClass).fadeOut(delay);
		$toggle.css({
			'padding-right': '',
			'right': ''
		});

		setTimeout(function() {
			$('.' + fogClass).remove();
			toggleBodyScroll(false);
		}, delay / 2);
	}
}
/* ===== */