var
	classBlock = 'icon', // Класс блока категории
	classActive = classBlock + '_active', // Класс активного блока категории
	classIcon = classBlock + '__img', // Класс картинки в блоке категории
	classCoach = 'coach', // Класс карточки тренера
	classCoachIcon = classCoach + '__icon', // Класс иконок карточки тренера
	$icon = $('.' + classBlock), // Блоки категории
	$coach = $('.' + classCoach), // Карточки тренеров
	obj = {}, // Объект с данными
	state = 0; // Состояние (>0 - включено, 0 - выключено)

if (!$icon.length) return;

// Забиваем все имена иконок в объект
$icon.each(function() {
	var
		$this = $(this),
		$img = $this.find('.' + classIcon), // Картинка в текущем блоке категории
		imgPath = $img.attr('src'), // Путь к картинке
		imgName = imgPath.slice(imgPath.lastIndexOf('/') + 1, imgPath.lastIndexOf('.')); // Имя картинки без расширения

	obj[imgName] = false;
});
// =====

$icon.on('click', function() {
	var
		$this = $(this),
		$img = $this.find('.' + classIcon).attr('src'), // Путь к картинке в текущем блоке категории
		imgPath = $img,
		imgName = imgPath.slice(imgPath.lastIndexOf('/') + 1, imgPath.lastIndexOf('.')); // Имя картинки без расширения

	$this.toggleClass(classActive);
	obj[imgName] = $this.hasClass(classActive);

	state = 0;
	$.each(obj, function(item, val) {
		if (val) {
			state++;
		}
	});

	refreshCoach();
});

function refreshCoach() {

	if (!state) {
		$coach.parent().show();
		return;
	}

	$coach.each(function() {
		var
			$this = $(this),
			$icons = $this.find('.' + classCoachIcon), // Все иконки в текущей карточке
			count = 0; // Счётчик

		if ($icons.length > 0) {

			$icons.each(function() {
				var
					$this = $(this),
					coachImgPath = $this.attr('src'), // Путь к картинке
					coachImgName = coachImgPath.slice(coachImgPath.lastIndexOf('/') + 1, coachImgPath.lastIndexOf('.')); // Имя картинки без расширения

				if (obj[coachImgName]) {
					count++;
				}
			});

			if (count) {
				$this.parent().show();
			} else {
				$this.parent().hide();
			}
		} else {
			$this.parent().hide();
		}
	});
}