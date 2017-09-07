var
	$toggle = $('.toggle'),
	activeClass = 'toggle_opened',
	inactiveClass = 'toggle_closed';

/* Анимация гамбургера при клике */
$toggle.on('click', function() {
	var $this = $(this);

	if (!$this.hasClass(activeClass) && !$this.hasClass(inactiveClass)) {
		$this.addClass(activeClass);
	} else {
		$this.toggleClass(activeClass);
		$this.toggleClass(inactiveClass);
	}
});
/* ===== */

/* Возврат гамбургера в исходное состояние при ресайзе */
$(window).on('resize', function() {

	if (window.innerWidth > 575) {
		$toggle.removeClass(inactiveClass + ' ' + activeClass);
	}
});
/* ===== */