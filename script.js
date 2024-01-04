

const apiKey = "5c157992181fe98e4ba6811c1c88b3ca";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d102ce6f8a7f8c61a416505fdeb98697`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), {
    origin: "cros",
  });
  const respData = await resp.json();

  console.log(respData);

  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = Ktoc(data.main.temp);
  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
        <div class="info">
        <img class="info__first__image" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        <h2 class="orange__text__gradient"> ${temp}°C</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        </div>
          <small class="blue__text__gradient">${data.weather[0].main}</small>
          `;

  //   cleanup
  main.innerHTML = "";
  main.appendChild(weather);
  main.classList.add("show");
}

function Ktoc(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
});