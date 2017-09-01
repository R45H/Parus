var
	classBlock = 'params', // Класс блока
	$items = $('.' + classBlock), // Блоки
	classOpened = classBlock + '_opened', // Класс развёрнутого блока
	subClass = classBlock + '__sub', // Класс контейнера с чекбоксами
	hoveredClass = 'js-hovered', // Класс, который добавляется сразу при наведении курсора
	delay = 300, // Время анимации
	$checkboxes = $('.' + classBlock + '__sub-item'), // Чекбоксы
	classChecked = classBlock + '__sub-item_checked'; // Класс отмеченного чекбокса

// Наведение курсора на блок с параметрами
$items.on('mouseenter', function() {
	var
		$this = $(this),
		$sub = $this.find('.' + subClass); // Скрытый контейнер текущего блока

	$this.addClass(hoveredClass);

	setTimeout(function() {

		if (!$this.hasClass(hoveredClass)) return;

		$sub.slideDown(delay);
		$this.addClass(classOpened);
	}, delay);
});
// =====

// Увод курсора
$items.on('mouseleave', function() {
	var
		$this = $(this),
		$sub = $this.find('.' + subClass); // Скрытый контейнер текущего блока

	$this.removeClass(hoveredClass);

	setTimeout(function() {

		if ($this.hasClass(hoveredClass)) return;

		$sub.slideUp(delay / 2);
		$this.removeClass(classOpened);
	}, delay * 2);
});
// =====

// Клик по чекбоксу
$checkboxes.on('change', function() {
	var
		$this = $(this),
		thisVal = $this.val(), // Значение чекбокса
		$valWrap = $($this.parents('.' + classBlock).find('.' + classBlock + '__str')), // Элемент-строка со списком значений текущего блока
		valWrapArr = $valWrap.text().split(', '), // Значение элемента-строки, сконвертированное в массив
		valWrapStr, // Здесь будет результат нового массива в виде строки
		defaultText = 'Все', // Стандартный текст для элемента-строки
		isOk = 1, // Если 0, изменения не применятся
		action = 'add'; // Действие для элемента-строки: добавление (add) или удаление (remove) значения

	// Обработка кликов по чекбоксу
	if ($this.hasClass(classChecked)) {
		$this
			.removeClass(classChecked)
			.prop('checked', false);
		action = 'remove';
	} else {
		$this
			.addClass(classChecked)
			.prop('checked', true);
	}

	// Добавление значения в строку
	if (action == 'add') {

		if (valWrapArr[0] == defaultText) {
			valWrapArr.length = 0;
		}

		$.each(valWrapArr, function(i, val) {
			if (val == thisVal) {
				isOk = 0;
			}
		});

		if (isOk) {
			valWrapArr.push(thisVal);
			valWrapStr = valWrapArr.sort().join(', ');
			$valWrap
				.text(valWrapStr)
				.attr('title', valWrapStr);
		}
	}

	// Удаление значения из строки
	if (action == 'remove') {

		$.each(valWrapArr, function(i, val) {
			if (val == thisVal) {
				valWrapArr.splice(i, 1);
			}
		});

		if (!valWrapArr.length) {
			valWrapArr.push(defaultText);
		}

		valWrapStr = valWrapArr.sort().join(', ');
		$valWrap
			.text(valWrapStr)
			.attr('title', valWrapStr);
	}
});
// =====
