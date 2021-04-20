var Bucharest = new google.maps.LatLng(44.4268, 26.1025);
var mapOptions = {
  zoom: 6,
  center: Bucharest,
};
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
  position: Bucharest,
  title: "Hello World!",
});

marker.setMap(map);
