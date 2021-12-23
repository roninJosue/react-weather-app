import React from "react"
import {render, screen} from "@testing-library/react";
import ForecastItem from "./ForecastItem";

test('ForecastItem render', async () => {
  render(<ForecastItem weekDay='Friday' temperature={28} hour={5} state='rain' />)

  const temperature = await screen.findByText(/28/)
  const hour = await screen.findByText(/5/)
  const weekDay = await screen.findByText('Friday')
  //const icon = await screen.findByTestId('')

  expect(temperature).toHaveTextContent('28 °')
  expect(hour).toHaveTextContent('5')
  expect(weekDay).toHaveTextContent('Friday')
  //expect(icon).toBeDefined()
})