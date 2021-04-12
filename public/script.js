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

// To add the marker to the map, call setMap();
marker.setMap(map);

// Sets interval...what is transition slide speed?
// $("#mainCarousel").carousel({
//   interval: 1500,
// });

document.querySelector("#seeMore").addEventListener(
  "click",
  function (event) {
    document.getElementById("details").style.visibility = "visible";
    document.getElementById("experience").style.visibility = "hidden";
  },
  false
);

document.querySelector("#seeMore1").addEventListener(
  "click",
  function (event) {
    document.getElementById("details1").style.visibility = "visible";
    document.getElementById("experience").style.visibility = "hidden";
  },
  false
);
document.querySelector("#seeMore2").addEventListener(
  "click",
  function (event) {
    document.getElementById("details2").style.visibility = "visible";
    document.getElementById("experience").style.visibility = "hidden";
  },
  false
);
document.querySelector("#seeMore3").addEventListener(
  "click",
  function (event) {
    document.getElementById("details3").style.visibility = "visible";
    document.getElementById("experience").style.visibility = "hidden";
  },
  false
);

document.querySelector("#close").addEventListener(
  "click",
  function (event) {
    document.getElementById("details").style.visibility = "hidden";
    window.location.reload();
  },
  false
);

document.querySelector("#close1").addEventListener(
  "click",
  function (event) {
    document.getElementById("details1").style.visibility = "hidden";
    window.location.reload();
  },
  false
);

document.querySelector("#close2").addEventListener(
  "click",
  function (event) {
    document.getElementById("details2").style.visibility = "hidden";
    window.location.reload();
  },
  false
);

document.querySelector("#close3").addEventListener(
  "click",
  function (event) {
    document.getElementById("details3").style.visibility = "hidden";
    window.location.reload();
  },
  false
);
