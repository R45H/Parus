var
	$btn = $('.btn');

$btn.on('click', function() {
	var
		$this = $(this),
		cookie = $this.attr('data-salon-title'),
		$salonTitle = $('.salons__link[data-salon-title=' + cookie + ']');

	if (!cookie || !$salonTitle.length) return;

	$salonTitle.click();
});