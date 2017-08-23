var
	classTab = 'tab',
	$tab = $('.' + classTab),
	$tabTitles = $tab.find('.' + classTab + '__title'),
	$tabPanels = $tab.find('.' + classTab + '__panel'),
	classTitleActive = classTab + '__title_active',
	classPanelActive = classTab + '__panel_active';

$tabTitles.on('click', function(event) {
	event.preventDefault();

	var
		$this = $(this),
		id = $this.attr('href'),
		$panel = $(id);

	$tabTitles.removeClass(classTitleActive);
	$this.addClass(classTitleActive);

	$tabPanels.removeClass(classPanelActive);
	$panel.addClass(classPanelActive);
});