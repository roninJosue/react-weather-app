import React from "react"
import WeatherDetails from "./WeatherDetails";

export default {
  title: 'Weather Details',
  component: WeatherDetails
}

export const WeatherDetailsExample = () => <WeatherDetails wind={10} humidity={10} />