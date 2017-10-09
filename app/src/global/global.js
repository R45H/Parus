$("a[href='#']").on('click', function(event) {
	event.preventDefault();
});

$('.js-print').on('click', function() {
	window.print();
	return false;
});

/* Куки */
var cookieName = ['club', 'salon'];

$.each(cookieName, function(i, val) {

	if (!$.cookie(val)) {
		$.cookie(val, 1, { path: '/' });
	}

	var $cookieItems = $('[data-' + val + ']');

	$cookieItems.each(function() {
		var $this = $(this);

		if (!$this.attr('data-' + val) || $this.hasClass('tab-lg__title')) return;

		if (window.innerWidth < 576) {

			if (!($this.attr('data-' + val) == $.cookie(val))) {
				$this.hide();
			}
		}

		$(window).on('resize', function() {

			if (window.innerWidth >= 576) {
				$this.show();
			} else {
				if ($this.attr('data-' + val) == $.cookie(val)) {
					$this.show();
				} else {
					$this.hide();
				}
			}
		});
	});
});

/* ===== */
