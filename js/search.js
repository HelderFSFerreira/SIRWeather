
function handlebGetClick() {
  todayForecast($("#ilocal").val());
}


function todayForecast(cidade){
    var urlbase = "http://api.wunderground.com/api/5cf397def9872e46/conditions/q/";
    var urllocal = cidade;
    var urltipo = ".json";
    var url = urlbase + urllocal + urltipo;
    //console.log(url);

    $.getJSON(url, function(estadotempo){
        local = estadotempo.current_observation.display_location.full;
        tempc = estadotempo.current_observation.temp_c;
        icon = estadotempo.current_observation.icon;
        humidity = estadotempo.current_observation.relative_humidity;
        wind_v = estadotempo.current_observation.wind_kph;
        wind_d = estadotempo.current_observation.wind_dir;
        latitude = estadotempo.current_observation.display_location.latitude;
        longitude = estadotempo.current_observation.display_location.longitude;

        var classContent = $("<div/>").addClass("forecast-content");
        var classLocation = $("<div/>").addClass("location").append(local);
        var classDegree = $("<div/>").addClass("degree");
        var classNum = $("<div/>").addClass("num").append(tempc).append($("<sup/>").append("o"));
        var classForecastIcon = $("<div/>").addClass("forecast-icon");
        var imgSrc = $("<img/>").attr({
          src : "images/icons/"+icon+".svg",
          alt : "",
          width : 90
        });



        var span1 = $("<span/>").append($("<img/>").attr({
          src : "images/icon-umberella.png",
          alt : ""
        })).append(humidity);

        var span2 = $("<span/>").append($("<img/>").attr({
          src : "images/icon-wind.png",
          alt : ""
        })).append(wind_v+"km/h");

        var span3 = $("<span/>").append($("<img/>").attr({
          src : "images/icon-compass.png",
          alt : ""
        })).append(wind_d);



        var aux1 = classForecastIcon.append(imgSrc);
        var aux2 = classDegree.append(classNum).append(aux1);

        var final = classContent.append(classLocation).append(aux2).append(span1).append(span2).append(span3);

        var headerClass = $("<div/>").addClass("forecast-header");
        var headerDayClass = $("<div/>").addClass("day").append("Today");

        var aux3 = headerClass.append(headerDayClass);

        $("#today").empty();
        $("#today").append(aux3).append(final);

        // Alteração do mapa

        var myLatlng = new google.maps.LatLng(latitude,longitude);
        var mapOptions = {
        zoom: 11,
        center: myLatlng
    }

    forecast(cidade);
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title:local
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

    })
}

function forecast(cidade) {
  var urlbase = "http://api.wunderground.com/api/147e761d7ebef227/forecast10day/q/";
  var urllocal = cidade;
  var urltipo = ".json";
  var url = urlbase + urllocal + urltipo;

  $.getJSON(url, function(tempoforecast) {

    var forecastday = tempoforecast.forecast.simpleforecast.forecastday;
    for (var i = 0; i < 6; i++) {

        var diaSemana = forecastday[i].date.weekday;
        var icon = forecastday[i].conditions;
        var tempMax = forecastday[i].high.celsius;
        var tempMin = forecastday[i].low.celsius;

        //header

        var classForecastHeader = $("<div/>").addClass("forecast-header");
        var classDay = $("<div/>").addClass("day").append(diaSemana);

        var finalHeader = classForecastHeader.append(classDay);

        // Content

        var classContent = $("<div/>").addClass("forecast-content");

        var classIcon = $("<div/>").addClass("forecast-icon");
        var imgSrc = $("<img/>").attr({
          src : "images/icons/"+icon+".svg",
          alt : "",
          width : 48
        });
        var classDegree = $("<div/>").addClass("degree").append(tempMax).append($("<sup/>").append("o"));
        var classSmall = $("<small/>").append(tempMin).append($("<sup/>").append("o"));



        var aux1 = classIcon.append(imgSrc);
        var finalContent = classContent.append(aux1).append(classDegree).append(classSmall);

        $("#forecast"+i).empty().append(finalHeader).append(finalContent);
    }
  })
}
/*<div class="forecast" id="forecast6">
  <div class="forecast-header">
    <div class="day">Sunday</div>
  </div>
  <div class="forecast-content">
    <div class="forecast-icon">
      <img src="images/icons/icon-14.svg" alt="" width=48>
    </div>
    <div class="degree">23<sup>o</sup>C</div>
    <small>18<sup>o</sup></small>
  </div>*/
