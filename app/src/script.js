$(function() {

	(function() {
		@@include('blocks/toggle/toggle.js')
		@@include('blocks/aside/aside.js')
	}());

	(function() { @@include('blocks/header/header.js') }());

	@@include('global/global.js')
});

@@include('global/functions.js')