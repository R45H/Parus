var
	classSched = 'schedule', // Класс блока
	$tabTitles = $('.' + classSched + '__title'), // Заголовки (салоны)
	classTitleActive = classSched + '__title_active', // Класс активного заголовка
	classTitleInactive = classSched + '__title_inactive', // Класс неактивного заголовка
	$table = $('.' + classSched + '__table'), // Таблицы с расписанием
	classTableHidden = classSched + '__table_hidden', // Класс скрытой таблицы
	titleActiveIndex = 0;

// Блокировка заголовков, которые ссылаются на несуществующие таблицы
$tabTitles.each(function(i) {
	var
		$this = $(this),
		tableId = $this.attr('href').slice(1), // ID таблицы, на которую ссылается заголовок
		$thisTable = $('#' + tableId); // Таблица

	if (!$thisTable.length) {
		$this.addClass(classTitleInactive);
		titleActiveIndex++;
	} else {
		if (titleActiveIndex == i) {
			$thisTable.removeClass(classTableHidden);
			$this.addClass(classTitleActive);
		}
	}
});
// =====

$tabTitles.on('click', function(event) {
	event.preventDefault();

	var
		$this = $(this),
		tableId = $this.attr('href').slice(1), // ID таблицы, на которую ссылается заголовок
		$thisTable = $('#' + tableId); // Таблица

	if ($this.hasClass(classTitleActive) || $this.hasClass(classTitleInactive)) return;

	$table.addClass(classTableHidden);
	$thisTable.removeClass(classTableHidden);

	$tabTitles.removeClass(classTitleActive);
	$this.addClass(classTitleActive);
});