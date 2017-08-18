var
	classSlider = 'banner-lg',
	classItem = 'banner-lg__i',
	classDots = 'dots',
	classDot = 'dots__item',
	$slider = $('.' + classSlider),
	$items = $slider.find('.' + classItem);

if ($items.length > 1) {

	$slider.slick({
		arrows: false,
		dots: true,
		dotsClass: classDots,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		}
	});
}