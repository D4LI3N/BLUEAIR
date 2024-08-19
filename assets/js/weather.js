var lat;
var lon;

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation not supported');
}

function error() {
alert("Couldn't find you!");
}

function success(position) {
lat = position.coords.latitude;
lon = position.coords.longitude;
var Weather = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon="  + lon;
	$.ajax({
	url : Weather,
	dataType : "json",
	success : function(data){
      if(data.name===""){
        var location = "Unknown! (please enable location services)";
        $('#location').text(location)
      }else{
        var location = data.name;
  			var temp = data.main.temp;
  			var desc = data.weather[0].description;
  			var wind = data.wind.speed;
  			var background = data.weather[0].icon
        $('#location').text(location)
  			$('#temp').text(temp)
  			$('#desc').text(desc)
  			$('#wind').text(wind)
  			$("#temp").text(temp)
        if(location != "Shuzenji"){
				   var str = '<img id="weather-icon" src="' + background + '" alt="weather">';
			     var Obj = document.getElementById("weather-icon");
			     Obj.outerHTML=str;
        }
      }
    }});
}
