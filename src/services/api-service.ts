import { APIUrls } from "../constants/constant";

const APIBaseURL = "https://api.openweathermap.org/data/2.5/";
const AppId = "8d9b3a938540c103e9717e4c881f8440";

const getFullUrl = (path: string) => {
  return APIBaseURL + path;
};

const fetchCurrentWeather = (city: string) => {
  return fetch(
    `${getFullUrl(
      APIUrls.currentWeather
    )}?q=${city}&units=metric&appid=${AppId}`,
    { method: "GET" }
  );
};

const fetchWeatherForecast = (city: string) => {
  return fetch(
    `${getFullUrl(
      APIUrls.weatherForecast
    )}?q=${city}&units=metric&appid=${AppId}`,
    { method: "GET" }
  );
};

export const APIService = {
  fetchCurrentWeather,
  fetchWeatherForecast,
};
