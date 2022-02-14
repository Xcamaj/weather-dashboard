var apiWeatherKey = '9f0779280ef21eceac2a12efca6febb5'
var queryUrl = 'HTTPS://api.openweathermap.org/data/2.5/weather?q='+ userInput + '&appid=' + apiWeatherKey;
var searchBtn = document.getElementById('searchBtn')



searchBtn.addEventListener('click', function(getCityWeather){
getCityWeather.preventDefault();
    var userInput = document.getElementById('userInput').value  
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiWeatherKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&appid=' +apiWeatherKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
    })  

var lat = response.coord.lat;
var lon = response.coord.lon;
var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=" + apiWeatherKey + "&lat=" + lat + "&lon=" + lon;

$.ajax({
    url: queryURLUV,
    method: 'GET'
}).then(function (response) {
    $('#uvl-display').empty();
  
});
   
