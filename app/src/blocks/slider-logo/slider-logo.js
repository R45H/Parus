var
	classSlider = 'slider-logo',
	classDots = classSlider + '__dots',
	classDot = classSlider + '__dot',
	$slider = $('.' + classSlider),
	$items = $slider.children();

if ($items.length > 1) {

	$slider.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		dotsClass: classDots,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnDotsHover: true,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		},
		prevArrow: '<div class="' + classSlider + '__prev"></div>',
		nextArrow: '<div class="' + classSlider + '__next"></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});
}