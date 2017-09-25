var
	classBlock = 'tab-lg', // Класс блока
	classHead = classBlock + '__head', // Класс шапки табов
	classBody = classBlock + '__body', // Класс тела табов
	classPanel = classBlock + '__panel', // Класс панели табов
	classTitle = classBlock + '__title', // Класс заголовка табов
	classTitleActive = classTitle + '_active', // Класс активного заголовка
	classTitleInactive = classTitle + '_inactive', // Класс неактивного заголовка
	classPanelHidden = classPanel + '_hidden'; // Класс скрытой таблицы

$('.' + classBlock).each(function() {
	var
		$this = $(this),
		$tabTitles = $this.find('.' + classHead + ':first > .' + classTitle), // Заголовки (салоны)
		$panel = $this.find('.' + classBody + ':first > .' + classPanel), // Таблицы с расписанием
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
});