/* Карта */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	/* Точки */
	var dot1 = {lat: 59.940776, lng: 30.369471}; // г. Санкт-Петербург, ул. Парадная, д.3, к.2
	var dot2 = {lat: 59.950659, lng: 30.372372}; // г. Санкт-Петербург, Воскресенская наб., д.4
	/* ===== */

	/* Карты */
	if (document.getElementById('map')) { // Стандартная карта (контакты)
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: dot1,
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

		/* Центрирование карты при ресайзе */
		google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map1, "resize");
			map1.panTo(dot1);
		});
		/* ===== */

		/* Действие при клике по адресам */
		document.querySelector('#address-1').addEventListener('click', function() {
			map1.panTo(dot1);
			map1.setZoom(15);
			google.maps.event.trigger(marker1, 'click');
		});

		document.querySelector('#address-2').addEventListener('click', function() {
			map1.panTo(dot2);
			map1.setZoom(15);
			google.maps.event.trigger(marker2, 'click');
		});
		/* ===== */
	}
	/* ===== */
}
/* ========== */
