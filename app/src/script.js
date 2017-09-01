$(function() {

	(function() {
		@@include('blocks/toggle/toggle.js')
		@@include('blocks/aside/aside.js')
	}());

	(function() { @@include('blocks/header/header.js') }());
	(function() { @@include('blocks/tab/tab.js') }());
	(function() { @@include('blocks/slider/slider.js') }());
	(function() { @@include('blocks/schedule/schedule.js') }());
	(function() { @@include('blocks/params/params.js') }());
	(function() { @@include('blocks/cats/cats.js') }());

	@@include('global/global.js')
});

@@include('global/functions.js')