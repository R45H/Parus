$(function() {

	(function() {

		/* Гамбургер */
		@@include('blocks/toggle/toggle.js')
		/* ===== */

		/* Боковое меню */
		@@include('blocks/aside/aside.js')
		/* ===== */
	}());

	(function() {

		/* Шапка */
		@@include('blocks/header/header.js')
		/* ===== */
	}());

	@@include('global/global.js')
});

@@include('global/functions.js')