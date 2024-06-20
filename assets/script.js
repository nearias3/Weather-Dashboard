const apiKey = "8ad839b65264bae52bc1d8df55faaf48";
const apiBaseUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
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

searchHistory.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const city = event.target.textContent;
        getCityCoordinates(city);
    }
 
});

function getCityCoordinates(city) {
  const url = apiBaseUrl;
  fetch(url);
  // what if a city with no values is given
}


function addToSearchHistory(city) {
    // add to local storage
}

function updateSearchHistory() {
    //add to local storage
}


document.addEventListener("DOMContentLoaded", updateSearchHistory);