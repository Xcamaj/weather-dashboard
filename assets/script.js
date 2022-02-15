var apiWeatherKey = '9f0779280ef21eceac2a12efca6febb5'
var queryUrl = 'HTTPS://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiWeatherKey;
var searchBtn = document.getElementById('searchBtn')
var uvIndex = document.getElementById('uvi')
var res;
var cityName = document.getElementById('city-name');
var currentTemp = document.getElementById('temp');
var currentWind = document.getElementById('wind');
var currentHumidity = document.getElementById('humidity');


searchBtn.addEventListener('click', function (getCityWeather) {
    getCityWeather.preventDefault();
    var userInput = document.getElementById('userInput').value
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiWeatherKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            res = data
            var temp = parseFloat(res.main.temp)
            $('#temp').empty()
            $("#temp").text('Temp: ' + ((temp - 273.15) * 1.8) + 32);
            $('#humidity').empty()
            $('#humidity').text('Humidity: ' + res.main.humidity)
            $('#wind').empty()
            $('#wind').text('Wind: ' + res.wind.gust)
            if (res && res.coord) {
                var lat = res.coord.lat;
                var lon = res.coord.lon;
                var queryUrlUvi = "https://api.openweathermap.org/data/2.5/uvi?&appid=" + apiWeatherKey + "&lat=" + lat + "&lon=" + lon;
                $.ajax({
                    url: queryUrlUvi,
                    method: 'GET'
                }).then(function (response) {
                    console.log(response, "response")
                    $('#uvi').empty();
                    $('#uvi').text("UV Index: " + response.value)

                });
            }
        })
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&appid=' + apiWeatherKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
})


