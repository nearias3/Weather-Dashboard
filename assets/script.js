let lat;
let lon;

const apiKey = "8ad839b65264bae52bc1d8df55faaf48";
const form = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const currentWeather = document.getElementById("current-weather");
const forecast = document.getElementById("forecast");
const searchHistory = document.getElementById("search-history");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value.trim(); //asking for trimmed value from the input box
    if (city) {
        fetchWeather(city); // fetch the city coordinates
        addToSearchHistory(city); //need code to add the search to the search history
        cityInput.value = ""; // clearing the input value after hitting submit
    }
});

searchHistory.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const city = event.target.textContent;
        fetchWeather(city);
    }
 
});

function fetchWeather(city) {
    const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";
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
    // Something is off with this code, queryURL seems to be wrong, city not found error
}

function displayCurrentWeather(data, city) {
    const currentWeather = data.list[0];
    const {main, weather, wind, dt_txt} = currentWeather;
    currentWeather.innerHTML = `
    <div class="card">
         <h2>${city}</h2>
            <p>${new Date(dt_txt).toLocaleDateString()}</p>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
            <p>Temperature: ${main.temp}°C</p>
            <p>Wind: ${wind.speed}m/s</p>
            <p>Humidity: ${main.humidity}%</p>
    </div>
    `;
}

function addToSearchHistory(city) {
    // add to local storage
}

function updateSearchHistory() {
    //add to local storage
}


document.addEventListener("DOMContentLoaded", updateSearchHistory);