import React from "react"
import {render, screen} from "@testing-library/react"
import CityInfo from "./CityInfo";

test('CityInfo render', async () => {
  const city = 'Leon'
  const country = 'Nicaragua'

  render(<CityInfo city={city} country={country} />)

  const cityAndCountriesComponents = await screen.findAllByRole('heading')

  expect(cityAndCountriesComponents[0]).toHaveTextContent(city)
  expect(cityAndCountriesComponents[1]).toHaveTextContent(country)
})