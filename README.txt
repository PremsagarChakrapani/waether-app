Openweather App JavaScript

This document provides an overview of the JavaScript code used in the Openweather App project. The JavaScript code interacts with the OpenWeatherMap API to fetch and display weather information based on user input.



Table of Contents

API Key
DOM Elements
Weather URL
Async Function: getWeatherByLocation
Function: addWeatherToPage
Function: Ktoc
Event Listener: form submit




API Key
The Openweather App utilizes the OpenWeatherMap API to fetch weather information. The API key is stored in a variable named apiKey.

const apiKey = "5c157992181fe98e4ba6811c1c88b3ca";

................................................................................................................................................


DOM Elements
The script references various DOM elements to interact with the HTML document.

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


................................................................................................................................................


Weather URL
The url function is defined to construct the URL for fetching weather data based on the provided city.
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;



................................................................................................................................................


Async Function: getWeatherByLocation
This asynchronous function fetches weather data from the OpenWeatherMap API based on the provided city. It uses the fetch API to make a network request.

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), {
    origin: "cros",
  });
  const respData = await resp.json();

  console.log(respData);

  addWeatherToPage(respData);
}

................................................................................................................................................


Function: addWeatherToPage
This function takes the fetched weather data and dynamically creates HTML elements to display the weather information on the page.

function addWeatherToPage(data) {
  // ... HTML creation based on weather data ...
}

// Example HTML structure created:
// <div class="weather">
//   <div class="info">
//     <img class="info__first__image" src="..."/>
//     <h2 class="orange__text__gradient"> ...°C</h2>
//     <img src="..."/>
//   </div>
//   <small class="blue__text__gradient"> ...</small>
// </div>



................................................................................................................................................



Function: Ktoc
This function converts temperature from Kelvin to Celsius.

function Ktoc(K) {
  return Math.floor(K - 273.15);
}


................................................................................................................................................



Event Listener: form submit
An event listener is attached to the form to handle the submission. It prevents the default form submission behavior, extracts the city from the input, and calls getWeatherByLocation with the provided city.

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
});



................................................................................................................................................


Guidelines to run the app:

- Enter the city name in the input field.
- After entering the city name(with correct spelling), click on the search icon next to the input field.
- The result i.e, the temperature in celcius, weather conditions and an icon to represent the weather conditions is diplayed.
- To use the app again, either reload or type in the new city name in the search bar.


................................................................................................................................................

