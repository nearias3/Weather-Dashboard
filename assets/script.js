let cityName = "Austin";
let stateCode = "TX";
let countryCode = "US";
let lat;
let lon;



const apiKey = "8ad839b65264bae52bc1d8df55faaf48";
const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
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
        fetchWeather(city); // fetch the city coordinates
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

function fetchWeather(query, city, state, country) {
    cityName = city;
    stateCode = state;
    countryCode = country;
    fetch(query)
        .then(function (response) {
            console.log(response);
            return response.json();
        })

}

function addToSearchHistory(city) {
    // add to local storage
}

function updateSearchHistory() {
    //add to local storage
}


document.addEventListener("DOMContentLoaded", updateSearchHistory);