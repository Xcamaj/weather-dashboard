var apiWeatherKey = '9f0779280ef21eceac2a12efca6febb5'
var queryUrl = 'HTTPS://api.openweathermap.org/data/2.5/weather?q='+ userInput + '&appid=' + apiWeatherKey;
var searchBtn = document.getElementById('searchBtn')



searchBtn.addEventListener('click', function(getCityWeather){
getCityWeather.preventDefault();
    var userInput = document.getElementById('userInput').value  
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ userInput + '&appid=' + apiWeatherKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
})
