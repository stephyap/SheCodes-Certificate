import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=067ec79138f20159f6eb0199b82be35a&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="App">
        <div class="container">
          <div class="weather-app-wrapper">
            <form class="search-form" id="search-form" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-6">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    onChange={updateCity}
                    class="form-control shadow-sm"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="Search"
                    class="form-control btn btn-warning shadow-sm w-100"
                  />
                </div>
                <div class="col-3">
                  <button
                    class="btn btn-light w-100"
                    id="current-location-button"
                  >
                    Current
                  </button>
                </div>
              </div>
            </form>
            <div class="location-overview"></div>
            <div class="row weather-overview">
              <div class="col-sm">
                <img src={weather.icon} alt="" />
                <p class="temperature-text">
                  <span id="temperature"></span>
                  <a href="/" class="active">
                    {Math.round(weather.temperature)}°C
                  </a>{" "}
                  |<a href="/">°F </a>
                </p>
              </div>
              <div class="col-sm">
                <ul>
                  <li>Description: {weather.description} </li>
                  <li>Humidity: {weather.humidity}%</li>
                  <li>Wind: {weather.wind}km/h</li>
                </ul>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary active">
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      autocomplete="off"
                      checked
                    />
                    Temperature
                  </label>
                  <label class="btn btn-secondary">
                    <input
                      type="radio"
                      name="options"
                      id="option2"
                      autocomplete="off"
                    />
                    Precipitation
                  </label>
                  <label class="btn btn-secondary">
                    <input
                      type="radio"
                      name="options"
                      id="option3"
                      autocomplete="off"
                    />
                    Wind
                  </label>
                </div>{" "}
              </div>
            </div>

            <div class="container forecast-container">
              <div class="row" id="forecast"></div>
            </div>
          </div>
          <small>
            <a href="/">Open source coded</a> by Chiu Feng (Steph)
          </small>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div class="container">
          <div class="weather-app-wrapper">
            <form class="search-form" id="search-form" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-6">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    onChange={updateCity}
                    class="form-control shadow-sm"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="Search"
                    class="form-control btn btn-warning shadow-sm w-100"
                  />
                </div>
                <div class="col-3">
                  <button
                    class="btn btn-light w-100"
                    id="current-location-button"
                  >
                    Current
                  </button>
                </div>
              </div>
            </form>
            <div class="location-overview"></div>
            <div class="row weather-overview">
              <div class="col-sm">
                <img src="\" alt="" />
                <p class="temperature-text">
                  <span id="temperature"></span>
                  <a href="/" class="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F </a>
                </p>
              </div>
              <div class="col-sm">
                <ul>
                  <li>Description: </li>
                  <li>Humidity: </li>
                  <li>Wind: km/h</li>
                </ul>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary active">
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      autocomplete="off"
                      checked
                    />
                    Temperature
                  </label>
                  <label class="btn btn-secondary">
                    <input
                      type="radio"
                      name="options"
                      id="option2"
                      autocomplete="off"
                    />
                    Precipitation
                  </label>
                  <label class="btn btn-secondary">
                    <input
                      type="radio"
                      name="options"
                      id="option3"
                      autocomplete="off"
                    />
                    Wind
                  </label>
                </div>{" "}
              </div>
            </div>

            <div class="container forecast-container">
              <div class="row" id="forecast"></div>
            </div>
          </div>
          <small>
            <a href="/">Open source coded</a> by Chiu Feng (Steph)
          </small>
        </div>
      </div>
    );
  }
}
