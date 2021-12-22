import React from "react"
import {render, screen} from "@testing-library/react"
import Weather from './Weather'

test('Weather render', async () => {
  render(<Weather temperature={10}  state='sunny'/>)


  const temperature = await screen.findByRole("heading")

  expect(temperature).toHaveTextContent('10')
})