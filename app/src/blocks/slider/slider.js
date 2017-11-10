var
	classSlider = 'slider',
	classDots = classSlider + '__dots',
	classDot = classSlider + '__dot',
	$slider = $('.' + classSlider),
	$items = $slider.children();

if ($items.length > 1) {

	$slider.slick({
		dots: true,
		dotsClass: classDots,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnDotsHover: true,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		},
		prevArrow: '<div class="' + classSlider + '__prev"></div>',
		nextArrow: '<div class="' + classSlider + '__next"></div>'
	});
}