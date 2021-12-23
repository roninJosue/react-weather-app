import React from "react"
import {render, screen} from "@testing-library/react";
import WeatherDetails from "./WeatherDetails";

test('WeatherDetails render', async () => {
  render(<WeatherDetails wind={10} humidity={80} />)

  const wind = await screen.findByText(/10/);
  const humidity = await screen.findByText(/80/);


  expect(wind).toHaveTextContent('Wind: 10 km/h')
  expect(humidity).toHaveTextContent('Humidity: 80%')
})