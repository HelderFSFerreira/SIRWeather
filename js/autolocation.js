$(document).ready(function(){

    function initGeoLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var urlbase = "http://api.wunderground.com/api/147e761d7ebef227/geolookup/q/";
          var urltipo = ".json";
          var url = urlbase + pos.lat +","+ pos.lng + urltipo;

          $.getJSON(url, function(tempoforecast) {
            var city = tempoforecast.location.city;
            var country = tempoforecast.location.country_name;
            console.log(city);
            console.log(country);

            //$("#ilocal").val(city+","+country);
            //$('#bget').trigger('click');
            todayForecast(city+","+country);
          })
        })
      }
    }

    initGeoLocation();
});
