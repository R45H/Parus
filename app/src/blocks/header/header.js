var
	$items = $('.header__menu-item'),
	subClass = 'header__sub-wrap',
	visibleClass = 'header__sub-wrap_visible',
	hoveredClass = 'js-hovered',
	$salonsWrap = $('.header__salons-wrap'),
	$salonsItem = $('.header__salons-text'),
	$salonsLinks = $('.header__salons-link'),
	classSalonsOpened = 'header__salons-text_opened',
	classSalonsLinksActive = 'header__salons-link_active',
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

/* Установка салона по умолчанию */
$salonsItem.text($salonsLinks.first().text());
$salonsLinks.first().addClass(classSalonsLinksActive);
/* ===== */

/* Клик по элементу с салонами */
$salonsItem.on('click', function() {
	toggleSalonsWrap();
});
/* ===== */

/* Клик по салону */
$salonsLinks.on('click', function() {
	var $this = $(this);
	if ($this.hasClass(classSalonsLinksActive)) return;

	$salonsItem.text($this.text());

	$salonsLinks.removeClass(classSalonsLinksActive);
	$this.addClass(classSalonsLinksActive);

	toggleSalonsWrap();
});
/* ===== */

/* Закрытие списка салонов при клике вне него */
$(document).on('click', function(event) {
	var $target = $(event.target);

	if (!$salonsItem.hasClass(classSalonsOpened) ||
		$target.parents('.header__salons').length ||
		$target.hasClass('header__salons-text')) return;

	toggleSalonsWrap();
});
/* ===== */

/* Закрытие списка салонов при ресайзе */
$(window).on('resize', function() {
	if (window.innerWidth < 576 || !$salonsItem.hasClass(classSalonsOpened)) return;

	toggleSalonsWrap();
});
/* ===== */

/* Функция окрытия / закрытия списка салонов */
function toggleSalonsWrap() {
	$salonsItem.toggleClass(classSalonsOpened);
	$salonsWrap.slideToggle(delay / 2);
}
/* ===== */