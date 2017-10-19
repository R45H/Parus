$(function() {
	@@include('global/global.js')

	(function() {
		@@include('blocks/toggle/toggle.js')
		@@include('blocks/aside/aside.js')
		@@include('blocks/modal/modal.js')
	}());

	(function() {
		@@include('blocks/tab-lg/tab-lg.js')
		@@include('blocks/salons/salons.js')
	}());

	(function() { @@include('blocks/header/header.js') }());
	(function() { @@include('blocks/tab/tab.js') }());
	(function() { @@include('blocks/slider/slider.js') }());
	(function() { @@include('blocks/params/params.js') }());
	(function() { @@include('blocks/cats/cats.js') }());
	(function() { @@include('blocks/input/input.js') }());
	(function() { @@include('blocks/btn/btn.js') }());
	(function() { @@include('blocks/icon/icon.js') }());
});

@@include('global/functions.js')