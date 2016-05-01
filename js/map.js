function init() {
	var myStyledMap = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#000"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}],
		mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(51.13333, 71.43333),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
        scrollwheel: false,
	};

	var mapElement = document.getElementById('map');

	var map = new google.maps.Map(mapElement, mapOptions);
		map.mapTypes.set('styledmap', new google.maps.StyledMapType(myStyledMap));
		map.setMapTypeId('styledmap');

	var image = 'images/marker.png';
	var marker = new google.maps.Marker({
    	icon: image,
		position: new google.maps.LatLng(51.13333, 71.43333),
		map: map,
		title: 'VRTECHNOLOGY'
	});
	var contentString = '<div class="marker-wrap"><h4>VRTECHNOLOGY</h4>Мы находимся в Астане</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}google.maps.event.addDomListener(window, 'load', init);
