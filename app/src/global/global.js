$("a[href='#']").on('click', function(event) {
	event.preventDefault();
});

$('.js-print').on('click', function() {
	window.print();
	return false;
});

if (!$.cookie('salon')) {
	$.cookie('salon', 1, { path: '/' });
}

var $cookieItems = $('[data-salon]');

$cookieItems.each(function() {
	var $this = $(this);

	if (!$this.attr('data-salon') || $this.hasClass('tab-lg__title')) return;

	if (window.innerWidth < 576) {

		if (!($this.attr('data-salon') == $.cookie('salon'))) {
			$this.hide();
		}
	}

	$(window).on('resize', function() {

		if (window.innerWidth >= 576) {
			$this.show();
		} else {
			if ($this.attr('data-salon') == $.cookie('salon')) {
				$this.show();
			} else {
				$this.hide();
			}
		}
	});
});