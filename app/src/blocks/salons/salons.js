var
	classSalons = 'salons',
	$salonsWrap = $('.' + classSalons + '__wrap'),
	$salonsItem = $('.' + classSalons + '__text'),
	$salonsLinks = $('.' + classSalons + '__link'),
	classSalonsOpened = classSalons + '__text_opened',
	classSalonsLinksActive = classSalons + '__link_active',
	delay = 300;

/* Установка салона по умолчанию */
$salonsItem
	.text(
		$salonsLinks
			.eq(parseInt($.cookie('salon')) - 1)
			.text());

$salonsLinks
	.eq(parseInt($.cookie('salon')) - 1)
	.addClass(classSalonsLinksActive);
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

	$.cookie('salon', $this.attr('data-salon-title'));
	toggleSalonsWrap();

	var $cookieItems = $('[data-salon]');
	if (!$cookieItems.length) return;

	$cookieItems.each(function() {
		var $this = $(this);

		if (!($this.attr('data-salon') == $.cookie('salon')) ||
			$this.attr('data-salon') == '' ||
			$this.attr('data-salon') === undefined) return;

		// Таблицы
		if ($this.hasClass('tab-lg__title')) {
			$this.trigger('click');
		}
	});
});
/* ===== */

/* Закрытие списка салонов при клике вне него */
$(document).on('click', function(event) {
	var $target = $(event.target);

	if (!$salonsItem.hasClass(classSalonsOpened) ||
		$target.parents('.' + classSalons).length ||
		$target.hasClass('.' + classSalons + '__text')) return;

	toggleSalonsWrap();
});
/* ===== */

/* Закрытие списка салонов при ресайзе */
$(window).on('resize', function() {
	if (window.innerWidth < 576 || !$salonsItem.hasClass(classSalonsOpened)) return;

	toggleSalonsWrap();
});
/* ===== */

/* Функция открытия / закрытия списка салонов */
function toggleSalonsWrap() {
	$salonsItem.toggleClass(classSalonsOpened);
	$salonsWrap.slideToggle(delay / 2);
}
/* ===== */
