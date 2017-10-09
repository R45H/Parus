var
	$btn = $('.btn');

$btn.on('click', function() {
	var
		$this = $(this),
		cookie = $this.attr('data-club-title'),
		$salonTitle = $('.salons__link[data-club-title=' + cookie + ']');

	if (!cookie || !$salonTitle.length) return;

	$salonTitle.click();
});