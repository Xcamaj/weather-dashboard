var startDate = moment().format("MMM Do YY");
var apiWeatherKey = '9f0779280ef21eceac2a12efca6febb5'
var queryUrl = 'HTTPS://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiWeatherKey;
var searchBtn = document.getElementById('searchBtn')
var uvIndex = document.getElementById('uvi')
var res;
// var cityName = document.getElementById('city-name');
// var currentTemp = document.getElementById('temp');
// var currentWind = document.getElementById('wind');
// var currentHumidity = document.getElementById('humidity');


searchBtn.addEventListener('click', function (getCityWeather) {
    getCityWeather.preventDefault();
    var userInput = document.getElementById('userInput').value
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiWeatherKey + '&units=imperial')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            res = data

            $('#city-name').empty()
            $('#city-name').text("Location: " + res.name + " " + startDate)
            $('#temp').empty()
            $("#temp").text('Temp: ' + res.main.temp)
            $('#humidity').empty()
            $('#humidity').text('Humidity: ' + res.main.humidity)
            $('#wind').empty()
            $('#wind').text('Wind: ' + res.wind.speed)
            if (res && res.coord) {
                var lat = res.coord.lat;
                var lon = res.coord.lon;
                var queryUrlUvi = "https://api.openweathermap.org/data/2.5/uvi?&appid=" + apiWeatherKey + "&lat=" + lat + "&lon=" + lon + '&units=imperial'
                $.ajax({
                    url: queryUrlUvi,
                    method: 'GET'
                }).then(function (response) {
                    console.log(response, "response")
                    $('#uvi').empty();
                    $('#uvi').text("UV Index: " + response.value)

                });

            }
            if (res && res.coord) {
                var lat = res.coord.lat;
                var lon = res.coord.lon;
                fetch("https://api.openweathermap.org/data/2.5/onecall?&appid=" + apiWeatherKey + "&lat=" + lat + "&lon=" + lon + '&units=imperial' + "exclude=hourly,minutely")
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                        res = data
                        $('#day-1').empty()
                        $('#day-1').text(moment().add(1, 'd'))
                        $('#temp-day-1').empty()
                        $('#temp-day-1').text(res.daily[0].temp.day)
                        $('#humidity-day-1').empty()
                        $('#humidity-day-1').text(res.daily[0].humidity)
                        $('#wind-day-1').empty()
                        $('#wind-day-1').text(res.daily[0].wind_speed)
                        $('#day-2').empty()
                        $('#day-2').text(moment().add(2, 'd'))
                        $('#temp-day-2').empty()
                        $('#temp-day-2').text(res.daily[1].temp.day);
                        $('#humidity-day-2').empty()
                        $('#humidity-day-2').text(res.daily[1].humidity)
                        $('#wind-day-2').empty()
                        $('#wind-day-2').text(res.daily[1].wind_speed)
                        $('#day-3').empty()
                        $('#day-3').text(moment().add(3, 'd'))
                        $('#temp-day-3').empty()
                        $('#temp-day-3').text(res.daily[2].temp.day);
                        $('#humidity-day-3').empty()
                        $('#humidity-day-3').text(res.daily[2].humidity)
                        $('#wind-day-3').empty()
                        $('#wind-day-3').text(res.daily[2].wind_speed)
                        $('#day-4').empty()
                        $('#day-4').text(moment().add(4, 'd'))
                        $('#temp-day-4').empty()
                        $('#temp-day-4').text(res.daily[3].temp.day);
                        $('#humidity-day-4').empty()
                        $('#humidity-day-4').text(res.daily[3].humidity)
                        $('#wind-day-4').empty()
                        $('#wind-day-4').text(res.daily[3].wind_speed)
                        $('#day-5').empty()
                        $('#day-5').text(moment().add(5, 'd'))
                        $('#temp-day-5').empty()
                        $('#temp-day-5').text(res.daily[4].temp.day);
                        $('#humidity-day-5').empty()
                        $('#humidity-day-5').text(res.daily[4].humidity)
                        $('#wind-day-5').empty()
                        $('#wind-day-5').text(res.daily[4].wind_speed)


                    })
            }
        })
})



