import {getCityCode, toCelsius} from "../utils";
import {validStateName} from "../../components/IconState/hooks/useWeatherIcon";

const getAllWeather = (response, city, countryCode) => {
  const {data} = response
  const temperature = toCelsius(data.main.temp)
  const stateFromServer = data.weather[0].main.toLowerCase()
  const state = validStateName.includes(stateFromServer) ? stateFromServer : null
  const propName = getCityCode(city, countryCode)
  const propValue = {temperature, state}

  return ({[propName]: propValue})
}

export default getAllWeather