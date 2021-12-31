import React from "react"
import {render, screen} from "@testing-library/react"
import Forecast from "./Forecast";

const forecastItemList = [
  {hour: 3, state: 'clear', temperature: 33, weekDay: 'Monday'},
  {hour: 8, state: 'rain', temperature: 23, weekDay: 'Monday'},
  {hour: 10, state: 'drizzle', temperature: 33, weekDay: 'Monday'},
  {hour: 10, state: 'drizzle', temperature: 33, weekDay: 'Friday'},
]

test('Forecast render', async () => {
  render(<Forecast forecastItemList={forecastItemList} /> )

  const items = await screen.findAllByTestId('forecast-item-container')

  expect(items).toHaveLength(forecastItemList.length)
})
