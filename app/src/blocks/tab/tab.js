var
	classTab = 'tab',
	$tab = $('.' + classTab),
	$tabHead = $tab.find('.' + classTab + '__head'),
	$tabBody = $tab.find('.' + classTab + '__body'),
	$tabTitles = $tab.find('.' + classTab + '__title'),
	$tabPanels = $tab.find('.' + classTab + '__panel'),
	classTitleActive = 'tab__title_active',
	classPanelActive = 'tab__panel_active';

$tabTitles.on('click', function(event) {

	var
		$this = $(this),
		id = $this.attr('href'),
		$panel = $(id);

	$tabTitles.removeClass(classTitleActive);
	$this.addClass(classTitleActive);

	$tabPanels.removeClass(classPanelActive);
	$panel.addClass(classPanelActive);

	return false;
});