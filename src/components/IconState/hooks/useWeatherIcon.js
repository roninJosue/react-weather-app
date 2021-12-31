import {
  WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiRaindrop,
  WiThunderstorm
} from "react-icons/wi";
import React from "react";

export const validStateName = [
  'clouds',
  'clear',
  'rain',
  'snow',
  'drizzle',
  'thunderstorm'
]

const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm
}

const useWeatherIcon = (state) => {

  const renderState = () => {
    const WeatherIconComponent = stateByName[state] ?? WiDaySunny
    return <WeatherIconComponent />
  }

  return {
    renderState
  }
}

export default useWeatherIcon