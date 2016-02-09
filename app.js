// geolocator thingy
// construct url like the spotify search term- concatenate strings in url. need api key and coordinates
$(function(){

  if ("geolocation" in navigator) {
    var button = $('#where-am-i');
    button.on('click', getLocation);
  } else {
    alert("Geolocation is not available");
  }

  function getLocation() {
    console.log('Getting location...');
    navigator.geolocation.getCurrentPosition(onLocation, onError, options);
  }

  var options = {
    enableHighAccuracy: true 
  };

  function onLocation (position) {
    // your code here
    var lat = position.coords.latitude; 
    var lon = position.coords.longitude;
    displayMap(lat,lon);
  }

  function onError(error) {
    console.log("Getting location failed: " + error);
  }

  function displayMap(lat, lon) {
    // your code here
    var apiKey = 'AIzaSyAooLNCG9Cctek-fg_t_z9TyNEQfJRR-SY';
    var map = 'https://maps.googleapis.com/maps/api/staticmap?key=' + apiKey + '&center=' + lat + ',' + lon + '&zoom=5&size=500x400';
    $('#map').attr("src", map);
  }

});
