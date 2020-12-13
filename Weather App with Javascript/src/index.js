function formatDate(timestamp) {
  let date = new Date(timestamp);

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  document.querySelector("#date").innerHTML = formatDate(
    response.data.dt * 1000
  );
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

  document
    .querySelector("#icon")
    .setAttribute("alt", response.data.weather[0].description);

  celsiusTemperature = response.data.main.temp;
}

function formatTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:00`;
}

function displayTemperature(response) {
  let forecastContainer = document.querySelector("#forecast");
  let forecast = response.data.list;

  forecastContainer.innerHTML = `
          <div class="col-sm">
              <h3>${formatTime(forecast[0].dt * 1000)}</h3>
              <img
                src="http://openweathermap.org/img/wn/${
                  forecast[0].weather[0].icon
                }@2x.png"
                alt="${forecast[0].weather[0].description}"
                class="forecast-icon"
                id=""
              />
              <p class="forecast-temperature-text">
                <strong>${Math.round(
                  forecast[0].main.temp_min
                )} | </strong> ${Math.round(forecast[0].main.temp_max)}°C
              </p>
            </div>
            <div class="col-sm">
              <h3>${formatTime(forecast[1].dt * 1000)}</h3>
              <img
                src="http://openweathermap.org/img/wn/${
                  forecast[1].weather[0].icon
                }@2x.png"
                alt="${forecast[1].weather[0].description}"
                class="forecast-icon"
                id=""
              />
              <p class="forecast-temperature-text">
                <strong>${Math.round(
                  forecast[1].main.temp_min
                )} | </strong> ${Math.round(forecast[1].main.temp_max)}°C
              </p>
            </div>
            <div class="col-sm">
              <h3>${formatTime(forecast[2].dt * 1000)}</h3>
              <img
                src="http://openweathermap.org/img/wn/${
                  forecast[2].weather[0].icon
                }@2x.png"
                alt="${forecast[2].weather[0].description}"
                class="forecast-icon"
                id=""
              />
              <p class="forecast-temperature-text">
                <strong>${Math.round(
                  forecast[2].main.temp_min
                )} | </strong> ${Math.round(forecast[2].main.temp_max)}°C
              </p>
            </div>
            <div class="col-sm">
              <h3>${formatTime(forecast[3].dt * 1000)}</h3>
              <img
                src="http://openweathermap.org/img/wn/${
                  forecast[3].weather[0].icon
                }@2x.png"
                alt="${forecast[3].weather[0].description}"
                class="forecast-icon"
                id=""
              />
              <p class="forecast-temperature-text">
                <strong>${Math.round(
                  forecast[3].main.temp_min
                )} | </strong> ${Math.round(forecast[3].main.temp_max)}°C
              </p>
            </div>
            <div class="col-sm">
              <h3>${formatTime(forecast[4].dt * 1000)}</h3>
              <img
                src="http://openweathermap.org/img/wn/${
                  forecast[4].weather[0].icon
                }@2x.png"
                alt="${forecast[4].weather[0].description}"
                class="forecast-icon"
                id=""
              />
              <p class="forecast-temperature-text">
                <strong>${Math.round(
                  forecast[4].main.temp_min
                )} | </strong> ${Math.round(forecast[4].main.temp_max)}°C
              </p>
            </div>
  `;
}

function searchCity(city) {
  let apiKey = "067ec79138f20159f6eb0199b82be35a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "067ec79138f20159f6eb0199b82be35a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
  let fahrenheitCal = (celsiusTemperature * 9) / 5 + 32;
  let fahrenheitTemp = document.querySelector("#temperature");
  fahrenheitTemp.innerHTML = Math.round(fahrenheitCal);
}

function showCelsiusTemp(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector("#temperature");
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
  celsiusTemp.innerHTML = Math.round(celsiusTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let celsiusTemperature = null;

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheitTemp);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsiusTemp);
