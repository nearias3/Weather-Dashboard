const apiKey = "8ad839b65264bae52bc1d8df55faaf48";
const apiBaseUrl: "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
const form = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const currentWeather = document.getElementById("current-weather");
const forecast = document.getElementById("forecast");
const searchHistory = document.getElementById("search-history");

// add eventlistener for the city submitted into the form
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value.trim(); //asking for trimmed value from the input box
    if (city) {
        getCityCoordinates(city); // fetch the city coordinates
        addToSearchHistory(city); //need code to add the search to the search history
        cityInput.value = ""; // clearing the input value after hitting submit
    }
});




// add event listener for the search history ??

// what if a city with no values is given

// create function for fetching a city's coordinates from the api

// create function for fetching the weather data

// display the forecast

// add that city to the search history

// search history is stored and loaded when the app is loaded