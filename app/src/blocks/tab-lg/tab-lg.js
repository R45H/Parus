var
	classBlock = 'tab-lg', // Класс блока
	$tabTitles = $('.' + classBlock + '__title'), // Заголовки (салоны)
	classTitleActive = classBlock + '__title_active', // Класс активного заголовка
	classTitleInactive = classBlock + '__title_inactive', // Класс неактивного заголовка
	$panel = $('.' + classBlock + '__panel'), // Таблицы с расписанием
	classPanelHidden = classBlock + '__panel_hidden', // Класс скрытой таблицы
	titleActiveIndex = 0;

// Блокировка заголовков, которые ссылаются на несуществующие таблицы
$tabTitles.each(function(i) {
	var
		$this = $(this),
		tableId = $this.attr('href'), // ID таблицы, на которую ссылается заголовок
		$thisTable = $(tableId); // Таблица

	if (!$thisTable.length) {
		$this.addClass(classTitleInactive);
		titleActiveIndex++;
	} else {
		if (titleActiveIndex == i) {
			$thisTable.removeClass(classPanelHidden);
			$this.addClass(classTitleActive);
		}
	}
});
// =====

$tabTitles.on('click', function(event) {
	event.preventDefault();

	var
		$this = $(this),
		tableId = $this.attr('href'), // ID таблицы, на которую ссылается заголовок
		$thisTable = $(tableId); // Таблица

	if ($this.hasClass(classTitleActive) || $this.hasClass(classTitleInactive)) return;

	$panel.addClass(classPanelHidden);
	$thisTable.removeClass(classPanelHidden);

	$tabTitles.removeClass(classTitleActive);
	$this.addClass(classTitleActive);
});