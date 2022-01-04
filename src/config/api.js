import axios from "axios";

const URL = `https://api.openweathermap.org/data/2.5/`
const APPId = process.env.REACT_APP_OPEN_WEATHER_APP_ID

export const getWeather = (city, countryCode) => {
  return axios.get(`${URL}/weather?q=${city},${countryCode}&appid=${APPId}`)
}

export const getForecast = (city, countryCode) => {
  return axios.get(`${URL}/forecast?q=${city},${countryCode}&appid=${APPId}`)
}