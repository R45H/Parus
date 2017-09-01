var
	classBlock = 'cats', // Класс блока
	$cats = $('.' + classBlock + '__item'), // Категории
	classCatsActive = classBlock + '__item_active', // Класс активной категории
	classCatsAll = classBlock + '__item_all', // Класс элемента "Все категории"
	$catsAll = $('.' + classCatsAll); // Элемент "Все категории"

$cats.on('click', function() {
	var $this = $(this);

	if ($this.hasClass(classCatsActive)) {

		if (!$this.hasClass(classCatsAll)) {
			$this.removeClass(classCatsActive);

			if (!$cats.filter('.' + classCatsActive).length) {
				$catsAll.addClass(classCatsActive);
			}
		}
	} else {

		if ($this.hasClass(classCatsAll)) {
			$cats.removeClass(classCatsActive);
		} else {
			$catsAll.removeClass(classCatsActive);
		}

		$this.addClass(classCatsActive);
	}
});