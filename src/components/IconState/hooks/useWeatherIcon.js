import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain
} from "react-icons/wi";
import React from "react";

export const validStateName = [
  'cloud',
  'cloudy',
  'fog',
  'sunny',
  'rain'
]

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
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