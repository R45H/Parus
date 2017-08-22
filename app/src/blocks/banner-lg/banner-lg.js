var
	classSlider = 'banner-lg',
	classItem = classSlider + '__i',
	classDots = 'dots',
	classDot = 'dots__item',
	$slider = $('.' + classSlider),
	$items = $slider.find('.' + classItem);

if ($items.length > 1) {

	$slider.slick({
		dots: true,
		dotsClass: classDots,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnDotsHover: true,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		},
		prevArrow: '<div class="' + classSlider + '__prev"></div>',
		nextArrow: '<div class="' + classSlider + '__next"></div>'
	});
}