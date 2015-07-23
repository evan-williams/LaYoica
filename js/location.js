
$(document).ready(function () {
    var mapCanvas = document.getElementById('map-canvas');
    
    var mapOptions = {
        center: new google.maps.LatLng(-42.008988, -71.56557),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        
    };
    
    var map = new google.maps.Map(mapCanvas, mapOptions);
    
    var marker = new google.maps.Marker({
        map: map,
        place: { placeId: 'ChIJU4uYNyeVG5YRSyNSfeZwmbA', location: { lat: -42.013905, lng: -71.569749 } }
    });
        
    var infowindow = new google.maps.InfoWindow({content:"<b>Cabañas La Yoica</b>" });
    google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);
});
