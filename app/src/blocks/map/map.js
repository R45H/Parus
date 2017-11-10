/* Карта */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	/* Точки */
	var dot1 = {lat: 59.942050, lng: 30.367325}; // г. Санкт-Петербург, ул. Парадная, д.3, к.2
	var dot2 = {lat: 59.950659, lng: 30.372372}; // г. Санкт-Петербург, Воскресенская наб., д.4
	var dotCenter = {lat: 59.946804, lng: 30.373375};
	/* ===== */

	/* Карты */
	if (document.getElementById('map')) { // Стандартная карта (контакты)
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: dotCenter,
			scrollwheel: false,
			mapTypeControl: true,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [
					google.maps.MapTypeId.roadmap
				]
			}
		});

		/* Образец карточки */
		var contentString1 = '<div class="map__info">г. Санкт-Петербург, ул. Парадная, д.3, к.2</div>';
		var contentString2 = '<div class="map__info">г. Санкт-Петербург, Воскресенская наб., д.4</div>';
		/* ================ */

		/* Рамка */
		var infoWindow = new google.maps.InfoWindow({
			content: contentString1
		});
		/* ===== */

		/* Маркеры */
		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1
		});

		var marker2 = new google.maps.Marker({
			position: dot2,
			map: map1
		});

		marker1.addListener('click', function() {
			infoWindow.setContent(contentString1);
			infoWindow.open(map1, marker1);
		});

		marker2.addListener('click', function() {
			infoWindow.setContent(contentString2);
			infoWindow.open(map1, marker2);
		});
		/* ======= */

		/* Центрирование карты */

		var selector = document.querySelector('#address-1').classList.contains('tab__title'); // True если карта на странице контактов

		// При инициализации на странице контактов
		if (selector) {

			google.maps.event.addDomListener(window, 'load', function() {
				moveToMarker(map1, dot1, marker1);
			});
		}
		// =====

		// При ресайзе
		var listener = google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map1, "resize");

			if (selector) {
				map1.panTo(dot1);
			} else {
				map1.panTo(dotCenter);
			}
		});
		// =====

		/* ===== */

		/* Действие при клике по адресам */
		document.querySelector('#address-1').addEventListener('click', function() {
			refreshResizeListener(map1, dot1);
			moveToMarker(map1, dot1, marker1);
		});

		document.querySelector('#address-2').addEventListener('click', function() {
			refreshResizeListener(map1, dot2);
			moveToMarker(map1, dot2, marker2);
		});
		/* ===== */
	}
	/* ===== */

	function refreshResizeListener(map, dot) {
		google.maps.event.removeListener(listener);
		listener = google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map, "resize");
			map.panTo(dot);
		});
	}

	function moveToMarker(map, dot, marker) {
		map.panTo(dot);
		map.setZoom(15);
		google.maps.event.trigger(marker, 'click');
	}
}
/* ========== */
