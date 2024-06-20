let lat;
let lon;

const apiKey = "8ad839b65264bae52bc1d8df55faaf48";
const form = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const currentWeatherEl = document.getElementById("current-weather");
const forecastEl = document.getElementById("forecast");
const searchHistoryEl = document.getElementById("search-history");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value.trim(); //asking for trimmed value from the input box
    if (city) {
        fetchWeather(city); // fetch the city coordinates
        addToSearchHistory(city); //need code to add the search to the search history
        cityInput.value = ""; // clearing the input value after hitting submit
    }
});

searchHistoryEl.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const city = event.target.textContent;
        fetchWeather(city);
    }
 
});

function fetchWeather(city) {
    const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(queryURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(data => {
            if (data.coord) {
                lat = data.coord.lat;
                lon = data.coord.lon;
                getWeatherData(lat, lon, city);
            } else {
                alert("City not found");
            }
        })
        .catch(error => console.error("Error fetching city coordinates:", error));
}

function getWeatherData(lat, lon, city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data, city);
            displayForecast(data);
        })
        .catch(error => console.error("Error fetching weather data:", error));
}

function displayCurrentWeather(data, city) {
    const currentWeather = data.list[0];
    const {main, weather, wind, dt_txt} = currentWeather;
    currentWeatherEl.innerHTML = `
    <div class="current-weather-card">
         <h2>${city}</h2>
            <p>${new Date(dt_txt).toLocaleDateString()}</p>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
            <p>Temperature: ${main.temp}°C</p>
            <p>Wind: ${wind.speed}m/s</p>
            <p>Humidity: ${main.humidity}%</p>
    </div>
    `;
}

function displayForecast(data) {
    forecastEl.innerHTML = '<h2>5-Day Forecast:</h2>' ;
    const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    forecastList.forEach(item => {
        const { main, weather, wind, dt_txt } = item;
        forecastEl.innerHTML += 
        `<div class="forecast-card">
                <p>${new Date(dt_txt).toLocaleDateString()}</p>
                <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
                <p>Temperature: ${main.temp}°C</p>
                <p>Wind Speed: ${wind.speed} m/s</p>
                <p>Humidity: ${main.humidity}%</p>
            </div>
        `;
    });
}

function addToSearchHistory(city) {
    // add to local storage
}

function updateSearchHistory() {
    //add to local storage
}


document.addEventListener("DOMContentLoaded", updateSearchHistory);