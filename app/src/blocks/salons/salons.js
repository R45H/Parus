var
	classSalons = 'salons',
	$salons = $('.' + classSalons),
	classSalonsOpened = classSalons + '__text_opened',
	classSalonsLinksActive = classSalons + '__link_active',
	delay = 300;

$salons.each(function() {
	var
		$this = $(this),
		$salonsWrap = $this.find('.' + classSalons + '__wrap'),
		$salonsItem = $this.find('.' + classSalons + '__text'),
		$salonsLinks = $this.find('.' + classSalons + '__link');

	/* Установка салона по умолчанию */
	var cookieName = '';

	if ($salonsLinks.eq(1).attr('data-club-title') !== undefined && $salonsLinks.eq(1).attr('data-club-title') != '') {
		cookieName = 'club';
	}

	if ($salonsLinks.eq(1).attr('data-salon-title') !== undefined && $salonsLinks.eq(1).attr('data-salon-title') != '') {
		cookieName = 'salon';
	}

	$salonsItem
		.text(
			$salonsLinks
				.eq(parseInt($.cookie(cookieName)) - 1)
				.text());

	$salonsLinks
		.eq(parseInt($.cookie(cookieName)) - 1)
		.addClass(classSalonsLinksActive);
	/* ===== */

	/* Клик по элементу с салонами */
	$salonsItem.on('click', function() {
		var opened = $(this).hasClass(classSalonsOpened);

		/* Закрываем открытые элементы */
		if (!opened) {
			$salons.each(function() {
				var $this = $(this);

				if ($this.find('.' + classSalonsOpened).length) {
					toggleSalonsWrap(
						$this.find('.' + classSalonsOpened),
						$this.find('.' + classSalons + '__wrap')
					);
				}
			});
		}
		/* ===== */

		toggleSalonsWrap($salonsItem, $salonsWrap);
	});
	/* ===== */

	/* Клик по салону */
	$salonsLinks.on('click', function() {
		var $this = $(this);
		if ($this.hasClass(classSalonsLinksActive)) return;

		$salonsItem.text($this.text());

		$salonsLinks.removeClass(classSalonsLinksActive);
		$this.addClass(classSalonsLinksActive);

		$.cookie(cookieName, $this.attr('data-' + cookieName + '-title'), { path: '/' });
		toggleSalonsWrap($salonsItem, $salonsWrap);

		var $cookieItems = $('[data-' + cookieName + ']');
		if (!$cookieItems.length) return;

		$cookieItems.each(function() {
			var $this = $(this);

			if ($this.attr('data-' + cookieName) == '' ||
				$this.attr('data-' + cookieName) === undefined) return;

			// Таблицы
			if ($this.hasClass('tab-lg__title')) {
				if ($this.attr('data-' + cookieName) == $.cookie(cookieName)) {
					$this.trigger('click');
				}
				return;
			}
			// =====

			if ($this.attr('data-' + cookieName) == $.cookie(cookieName)) {
				$this.show();
			} else {
				$this.hide();
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

		toggleSalonsWrap($salonsItem, $salonsWrap);
	});
	/* ===== */

	/* Закрытие списка салонов при ресайзе */
	$(window).on('resize', function() {
		if (window.innerWidth < 576 || !$salonsItem.hasClass(classSalonsOpened)) return;

		toggleSalonsWrap($salonsItem, $salonsWrap);
	});
	/* ===== */
});

/* Функция открытия / закрытия списка салонов */
function toggleSalonsWrap($item, $wrap) {
	$item.toggleClass(classSalonsOpened);
	$wrap.slideToggle(delay / 2);
}
/* ===== */
