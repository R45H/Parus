var
	classSched = 'schedule';

/* Переключатель клубов */
var
	$tabTitles = $('.' + classSched + '__title'),
	classTitleActive = classSched + '__title_active';

$tabTitles.on('click', function(event) {
	event.preventDefault();

	if ($(this).hasClass(classTitleActive)) return;

	$tabTitles.removeClass(classTitleActive);
	$(this).addClass(classTitleActive);
});
/* ===== */

/* Параметры */
var
	$items = $('.' + classSched + '__param-i'),
	classOpened = classSched + '__param-i_opened',
	subClass = classSched + '__param-sub',
	hoveredClass = 'js-hovered',
	delay = 300;

// Наведение курсора на блок с параметрами
$items.on('mouseenter', function() {
	var
		$this = $(this),
		$sub = $this.find('.' + subClass);

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
		$sub = $this.find('.' + subClass);

	$this.removeClass(hoveredClass);

	setTimeout(function() {

		if ($this.hasClass(hoveredClass)) return;

		$sub.slideUp(delay / 2);
		$this.removeClass(classOpened);
	}, delay * 2);
});
// =====

// Клик по чекбоксу
var
	$checkboxes = $('.' + classSched + '__param-sub-item');
	classChecked = classSched + '__param-sub-item_checked';

$checkboxes.on('change', function() {
	var
		$this = $(this),
		thisVal = $this.val(),
		$valWrap = $($this.parents('.' + classSched + '__param-i').find('.' + classSched + '__param-value')),
		valWrapArr = $valWrap.text().split(', '),
		defaultText = 'Все',
		isOk = 1,
		action = 'add';

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
			$valWrap.text(valWrapArr.sort().join(', '));
		}
	}

	if (action == 'remove') {

		$.each(valWrapArr, function(i, val) {
			if (val == thisVal) {
				valWrapArr.splice(i, 1);
			}
		});

		if (!valWrapArr.length) {
			valWrapArr.push(defaultText);
		}

		$valWrap.text(valWrapArr.sort().join(', '));
	}
});
// =====

/* ===== */

/* Категории */
var
	$cats = $('.' + classSched + '__cats-item'),
	classCatsAll = classSched + '__cats-item_all',
	classCatsActive = classSched + '__cats-item_active',
	$catsAll = $('.' + classSched + '__cats-item_all');

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
/* ===== */