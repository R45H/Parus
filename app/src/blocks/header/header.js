var
	$items = $('.header__menu-item'),
	subClass = 'header__sub-wrap',
	visibleClass = 'header__sub-wrap_visible',
	hoveredClass = 'js-hovered',
	delay = 300;

/* Наведение курсора на пункт с подменю */
$items.on('mouseenter', function() {
	var
		$this = $(this),
		$sub = $this.find('.' + subClass);

	$this.addClass(hoveredClass);

	setTimeout(function() {

		if (!$this.hasClass(hoveredClass)) return;

		$sub.slideDown(delay);
		$sub.addClass(visibleClass);
	}, delay / 2);
});
/* ===== */

/* Увод курсора */
$items.on('mouseleave', function() {
	var
		$this = $(this),
		$sub = $this.find('.' + subClass);

	$this.removeClass(hoveredClass);

	setTimeout(function() {

		if ($this.hasClass(hoveredClass)) return;

		$sub.slideUp(delay / 2);
		$sub.removeClass(visibleClass);
	}, delay * 1.5);
});
/* ===== */
