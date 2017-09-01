var
	classSched = 'schedule', // Класс блока
	$tabTitles = $('.' + classSched + '__title'), // Заголовки (салоны)
	classTitleActive = classSched + '__title_active'; // Класс активного заголовка

$tabTitles.on('click', function(event) {
	event.preventDefault();

	if ($(this).hasClass(classTitleActive)) return;

	$tabTitles.removeClass(classTitleActive);
	$(this).addClass(classTitleActive);
});