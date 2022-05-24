var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(35.1075667,129.0346529),
        level: 3 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 
var markerPosition  = new kakao.maps.LatLng(35.1075667,129.0346529); 
var marker = new kakao.maps.Marker({
    position: markerPosition,
    clickable: true
});
marker.setMap(map);
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);