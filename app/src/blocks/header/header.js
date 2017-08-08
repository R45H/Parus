var
	$items = $('.header__menu-item'),
	subClass = 'header__sub-wrap',
	hoveredClass = 'js-hovered',
	delay = 300;

/* Наведение курсора на пункт с подменю */
$items.on('mouseenter', function() {
	var $this = $(this);

	$this.addClass(hoveredClass);

	setTimeout(function() {

		if (!$this.hasClass(hoveredClass)) return;

		$this
			.find('.' + subClass)
			.slideDown(delay);
	}, delay / 2);
});
/* ===== */

/* Увод курсора */
$items.on('mouseleave', function() {
	var $this = $(this);

	$this.removeClass(hoveredClass);

	setTimeout(function() {

		if ($this.hasClass(hoveredClass)) return;

		$this
			.find('.' + subClass)
			.slideUp(delay);
	}, delay * 1.5);
});
/* ===== */
