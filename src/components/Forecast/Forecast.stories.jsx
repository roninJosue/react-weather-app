import React from "react"
import Forecast from "./Forecast";

export default {
  title: 'Forecast',
  component: Forecast
}

const forecastItemList = [
  {hour: 3, state: 'sunny', temperature: 33, weekDay: 'Monday'},
  {hour: 8, state: 'rain', temperature: 23, weekDay: 'Monday'},
  {hour: 10, state: 'fog', temperature: 33, weekDay: 'Monday'},
  {hour: 10, state: 'fog', temperature: 33, weekDay: 'Friday'},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)