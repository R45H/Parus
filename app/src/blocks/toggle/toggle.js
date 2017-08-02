var
	$toggle = $('.toggle'),
	activeClass = 'toggle_opened',
	inactiveClass = 'toggle_closed';

$toggle.on('click', function() {
	var $this = $(this);

	if (!$this.hasClass(activeClass) && !$this.hasClass(inactiveClass)) {
		$this.toggleClass(activeClass);
	} else {
		$this.toggleClass(activeClass);
		$this.toggleClass(inactiveClass);
	}
});

$(window).on('resize', function() {
	if (window.innerWidth > 575) {
		$toggle.removeClass(activeClass + ' ' + inactiveClass);
	}
});