import React from "react"
import Weather from "./Weather";

export default {
  title: 'Weather',
  component: Weather
}

export const WeatherSunny = () => (<Weather temperature={10} state='sunny'/>)
export const WeatherRain = () => (<Weather temperature={1080} state='rain'/>)